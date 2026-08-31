<script>
	const snippet = `<label class="label" for="name">Name</label>
<input class="input" id="name" type="text">`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Label</h1>
			<p>
				Native <code>&lt;label class="label" for="…"&gt;</code>. A placeholder is not a label.
				There is no wrapper.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="field" style="max-width: 20rem">
					<label class="label" for="name-demo">Name</label>
					<input class="input" id="name-demo" type="text">
				</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
