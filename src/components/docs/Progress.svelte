<script>
	const snippet = `<progress class="progress" value="40" max="100">40%</progress>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Progress</h1>
			<p>
				Native <code>&lt;progress class="progress"&gt;</code>. Set <code>value</code> and <code>max</code>.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack" style="max-width: 20rem">
					<progress class="progress" value="40" max="100">40%</progress>
					<progress class="progress" value="80" max="100">80%</progress>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
