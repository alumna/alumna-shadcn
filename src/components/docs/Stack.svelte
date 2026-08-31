<script>
	const snippet = `<div class="stack">
	<div>One</div>
	<div>Two</div>
	<div>Three</div>
</div>

<div class="cluster">
	<span>Save</span>
	<span>Cancel</span>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Stack &amp; cluster</h1>
			<p>
				Extra invisible structure. <code>.stack</code> is a vertical flex column
				(alumna-css <code>.section</code> is a wrapping row). <code>.cluster</code>
				is an inline wrapping group that does not collapse to full width at 40rem
				the way <code>col-*</code> columns do. Gap via
				<code>--stack-gap</code> and <code>--cluster-gap</code>.
				There is no wrapper.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack">
					<div class="docs-swatch">One</div>
					<div class="docs-swatch">Two</div>
					<div class="docs-swatch">Three</div>
				</div>
				<div class="cluster" style="margin-top: 1.5rem">
					<div class="docs-swatch">Save</div>
					<div class="docs-swatch">Cancel</div>
				</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
