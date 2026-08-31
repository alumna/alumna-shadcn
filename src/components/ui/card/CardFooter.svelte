<script>
	let { children, stack = false } = $props();
</script>

<div class="card-footer" data-stack={stack ? 'true' : undefined}>
	{@render children?.()}
</div>
