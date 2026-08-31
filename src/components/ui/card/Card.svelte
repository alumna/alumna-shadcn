<script>
	let { children, size } = $props();
</script>

<div class="card" data-size={size || undefined}>
	{@render children?.()}
</div>
