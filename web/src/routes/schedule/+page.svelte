<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Calendar from '@lucide/svelte/icons/calendar';
</script>

<div class="max-w-2xl mx-auto space-y-6">
	<h1 class="text-2xl font-bold">Schedule</h1>

	<Card.Root>
		<Card.Content class="flex flex-col items-center justify-center py-12 text-center">
			<Calendar class="h-12 w-12 text-muted-foreground mb-4" />
			<h2 class="text-lg font-medium">Coming in Phase 8</h2>
			<p class="text-muted-foreground mt-1">
				Scheduled jobs and cron-based automation will be available here.
			</p>
		</Card.Content>
	</Card.Root>
</div>
