<script>
	const TOAST_MS = 3000;

	let toast;
	let hide_timer;

	function show() {
		toast.hidden = false;
		clearTimeout(hide_timer);
		hide_timer = setTimeout(() => {
			toast.hidden = true;
		}, TOAST_MS);
	}

	const snippet = `<button class="button" type="button" onclick={() => { toast.hidden = false; clearTimeout(toast._hide); toast._hide = setTimeout(() => toast.hidden = true, 3000); }}>Show toast</button>
<div class="toast" bind:this={toast} hidden role="status">Saved</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Toast</h1>
			<p>
				Fixed <code>.toast</code> with a hairline shadow. Show by clearing
				<code>hidden</code>; hide after 3 seconds with <code>setTimeout</code>.
				One element, not a queue.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<button class="button" type="button" onclick={show}>Show toast</button>
				<div class="toast" bind:this={toast} hidden role="status">Saved</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
