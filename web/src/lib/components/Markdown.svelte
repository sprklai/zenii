<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

	let { content }: { content: string } = $props();

	let hljs: typeof import('highlight.js').default | null = $state(null);

	// Lazy-load highlight.js with selective languages on first render
	async function loadHighlighter() {
		if (hljs) return;
		const core = (await import('highlight.js/lib/core')).default;
		const [js, ts, py, rust, bash, json, html, css, sql, md, yaml, go, java, cpp] =
			await Promise.all([
				import('highlight.js/lib/languages/javascript'),
				import('highlight.js/lib/languages/typescript'),
				import('highlight.js/lib/languages/python'),
				import('highlight.js/lib/languages/rust'),
				import('highlight.js/lib/languages/bash'),
				import('highlight.js/lib/languages/json'),
				import('highlight.js/lib/languages/xml'),
				import('highlight.js/lib/languages/css'),
				import('highlight.js/lib/languages/sql'),
				import('highlight.js/lib/languages/markdown'),
				import('highlight.js/lib/languages/yaml'),
				import('highlight.js/lib/languages/go'),
				import('highlight.js/lib/languages/java'),
				import('highlight.js/lib/languages/cpp')
			]);
		core.registerLanguage('javascript', js.default);
		core.registerLanguage('typescript', ts.default);
		core.registerLanguage('python', py.default);
		core.registerLanguage('rust', rust.default);
		core.registerLanguage('bash', bash.default);
		core.registerLanguage('shell', bash.default);
		core.registerLanguage('json', json.default);
		core.registerLanguage('html', html.default);
		core.registerLanguage('xml', html.default);
		core.registerLanguage('css', css.default);
		core.registerLanguage('sql', sql.default);
		core.registerLanguage('markdown', md.default);
		core.registerLanguage('yaml', yaml.default);
		core.registerLanguage('go', go.default);
		core.registerLanguage('java', java.default);
		core.registerLanguage('cpp', cpp.default);
		await import('highlight.js/styles/github-dark.min.css');
		hljs = core;
	}

	// Trigger lazy load when content has code blocks
	$effect(() => {
		if (content.includes('```')) {
			loadHighlighter();
		}
	});

	function highlightCode(text: string, lang?: string): string {
		if (!hljs) {
			const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
			return `<pre class="rounded-lg bg-zinc-900 p-4 overflow-x-auto"><code>${escaped}</code></pre>`;
		}
		const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
		const highlighted = hljs.highlight(text, { language }).value;
		return `<pre class="rounded-lg bg-zinc-900 p-4 overflow-x-auto"><code class="hljs language-${language}">${highlighted}</code></pre>`;
	}

	const renderer = new marked.Renderer();
	renderer.code = ({ text, lang }: { text: string; lang?: string }) => highlightCode(text, lang);
	marked.setOptions({ renderer, gfm: true, breaks: true });

	function render(md: string): string {
		const raw = marked.parse(md);
		if (typeof raw !== 'string') return '';
		return DOMPurify.sanitize(raw);
	}
</script>

<div class="prose prose-sm dark:prose-invert max-w-none">
	{@html render(content)}
</div>
