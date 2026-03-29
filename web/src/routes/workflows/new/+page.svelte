<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import WorkflowCanvas from '$lib/components/workflow-builder/WorkflowCanvas.svelte';
	import WorkflowToolbar from '$lib/components/workflow-builder/WorkflowToolbar.svelte';
	import NodePalette from '$lib/components/workflow-builder/NodePalette.svelte';
	import DynamicNodeForm from '$lib/components/workflow-builder/DynamicNodeForm.svelte';
	import CodeView from '$lib/components/workflow-builder/CodeView.svelte';
	import { builderStore } from '$lib/stores/workflow-builder.svelte';
	import { workflowsStore } from '$lib/stores/workflows.svelte';
	import { graphToWorkflow } from '$lib/components/workflow-builder/graph-utils';
	import { exportWorkflowToml } from '$lib/components/workflow-builder/import-export';
	import { t } from '$lib/components/workflow-builder/i18n-utils';

	let codeContent = $state('');
	let codeError = $state<string | null>(null);

	onMount(() => {
		builderStore.reset();
	});

	function handleBeforeUnload(e: BeforeUnloadEvent) {
		if (builderStore.isDirty) {
			e.preventDefault();
		}
	}

	async function handleSave() {
		const wf = graphToWorkflow(builderStore.nodes, builderStore.edges, {
			name: builderStore.workflowName || 'Untitled',
			description: builderStore.workflowDescription,
			schedule: builderStore.workflowSchedule
		});

		// Serialize to TOML lines manually (backend expects toml_content)
		const tomlLines = buildToml(wf);

		try {
			const created = await workflowsStore.create(tomlLines);
			builderStore.markSaved(created.id);
			goto(`/workflows/${created.id}`);
		} catch (e) {
			// Error is shown via workflowsStore
		}
	}

	async function handleRun() {
		// Must save first
		if (!builderStore.workflowId) {
			await handleSave();
		}
		if (builderStore.workflowId) {
			builderStore.setRunning(true);
			try {
				await workflowsStore.run(builderStore.workflowId);
			} finally {
				builderStore.setRunning(false);
			}
		}
	}

	async function handleExport() {
		if (builderStore.workflowId) {
			const raw = await workflowsStore.getRawToml(builderStore.workflowId);
			exportWorkflowToml(raw, builderStore.workflowName || 'workflow');
		}
	}

	function handleBack() {
		goto('/workflows');
	}

	function handleCodeInput(value: string) {
		codeContent = value;
		codeError = null;
	}

	function buildToml(wf: ReturnType<typeof graphToWorkflow>): string {
		let lines = `id = "${wf.id}"\nname = "${wf.name}"\ndescription = "${wf.description}"`;
		if (wf.schedule) lines += `\nschedule = "${wf.schedule}"`;
		lines += '\n';
		for (const step of wf.steps) {
			lines += `\n[[steps]]\nname = "${step.name}"\ntype = "${step.type}"`;
			if (step.tool) lines += `\ntool = "${step.tool}"`;
			if (step.prompt) lines += `\nprompt = "${step.prompt}"`;
			if (step.model) lines += `\nmodel = "${step.model}"`;
			if (step.seconds !== undefined) lines += `\nseconds = ${step.seconds}`;
			if (step.expression) lines += `\nexpression = "${step.expression}"`;
			if (step.if_true) lines += `\nif_true = "${step.if_true}"`;
			if (step.if_false) lines += `\nif_false = "${step.if_false}"`;
			if (step.depends_on.length > 0) {
				lines += `\ndepends_on = [${step.depends_on.map(d => `"${d}"`).join(', ')}]`;
			}
			if (step.timeout_secs) lines += `\ntimeout_secs = ${step.timeout_secs}`;
			if (step.args && Object.keys(step.args).length > 0) {
				lines += `\n[steps.args]`;
				for (const [k, v] of Object.entries(step.args)) {
					if (typeof v === 'string') lines += `\n${k} = "${v}"`;
					else if (typeof v === 'number' || typeof v === 'boolean') lines += `\n${k} = ${v}`;
				}
			}
			lines += '\n';
		}
		if (wf.layout && Object.keys(wf.layout).length > 0) {
			lines += '\n[layout]';
			for (const [name, pos] of Object.entries(wf.layout)) {
				lines += `\n${name} = { x = ${pos.x.toFixed(1)}, y = ${pos.y.toFixed(1)} }`;
			}
			lines += '\n';
		}
		return lines;
	}
</script>

<svelte:window onbeforeunload={handleBeforeUnload} />

<div class="flex flex-col h-[calc(100vh-3.5rem)]">
	<WorkflowToolbar
		onSave={handleSave}
		onRun={handleRun}
		onExport={handleExport}
		onBack={handleBack}
	/>

	{#if builderStore.viewMode === 'code'}
		<CodeView
			value={codeContent}
			oninput={handleCodeInput}
			error={codeError}
		/>
	{:else}
		<div class="flex flex-1 min-h-0">
			<div class="w-48 shrink-0">
				<NodePalette />
			</div>
			<WorkflowCanvas />
			{#if builderStore.selectedNodeId}
				<div class="w-64 shrink-0 border-l">
					<DynamicNodeForm />
				</div>
			{/if}
		</div>
	{/if}
</div>
