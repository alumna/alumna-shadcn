<script>
	const snippet = `<kbd class="kbd">⌘</kbd>
<span class="kbd-group">
	<kbd class="kbd">Ctrl</kbd>
	<kbd class="kbd">K</kbd>
</span>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Kbd</h1>
			<p>Keyboard key. <code>.kbd-group</code> for a chord. There is no wrapper.</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="cluster" style="--cluster-gap: 1rem">
					<kbd class="kbd">⌘</kbd>
					<span class="kbd-group">
						<kbd class="kbd">Ctrl</kbd>
						<kbd class="kbd">K</kbd>
					</span>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
