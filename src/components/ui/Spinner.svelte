<script>
	let { label = 'Loading', decorative = false } = $props();
</script>

<svg
	class="spinner"
	viewBox="0 0 24 24"
	fill="none"
	role={decorative ? undefined : 'status'}
	aria-label={decorative ? undefined : label}
	aria-hidden={decorative ? 'true' : undefined}
>
	<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" opacity="0.25"></circle>
	<path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
</svg>
