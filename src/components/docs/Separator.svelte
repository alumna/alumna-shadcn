<script>
	const snippet = `<hr class="separator">

<div class="cluster">
	<span>Left</span>
	<hr class="separator separator-vertical">
	<span>Right</span>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Separator</h1>
			<p>
				A rule. Horizontal is the default. Add <code>separator-vertical</code> inside a
				<code>.cluster</code> (or any flex row) for a vertical bar.
				There is no wrapper.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack">
					<p>Above</p>
					<hr class="separator">
					<p>Below</p>
					<div class="cluster" style="--cluster-gap: 1rem">
						<span>Left</span>
						<hr class="separator separator-vertical">
						<span>Right</span>
					</div>
				</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
