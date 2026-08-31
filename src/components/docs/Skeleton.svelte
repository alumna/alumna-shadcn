<script>
	const snippet = `<div class="skeleton" style="height: 1rem; width: 12rem"></div>
<div class="skeleton" style="height: 4rem; width: 100%"></div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Skeleton</h1>
			<p>Pulse placeholder. Set width and height on the element. There is no wrapper.</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem; max-width: 20rem">
					<div class="skeleton" style="height: 1rem; width: 8rem"></div>
					<div class="skeleton" style="height: 4rem; width: 100%"></div>
					<div class="skeleton" style="height: 1rem; width: 16rem"></div>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
