<script>
	const snippet = `<div class="field">
	<label class="label" for="email">Email</label>
	<input class="input" id="email" type="email" placeholder="m@example.com">
</div>

<div class="field">
	<label class="label" for="broken">Invalid</label>
	<input class="input" id="broken" type="email" value="not-an-email" aria-invalid="true">
	<p class="field-error">Enter a valid email.</p>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Input</h1>
			<p>
				Native <code>&lt;input class="input"&gt;</code>. Always pair with a
				<code>&lt;label class="label"&gt;</code>. Invalid state is
				<code>aria-invalid="true"</code>, not a JS API.
				There is no wrapper.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack" style="max-width: 20rem">
					<div class="field">
						<label class="label" for="email-demo">Email</label>
						<input class="input" id="email-demo" type="email" placeholder="m@example.com">
					</div>
					<div class="field">
						<label class="label" for="broken-demo">Invalid</label>
						<input class="input" id="broken-demo" type="email" value="not-an-email" aria-invalid="true">
						<p class="field-error">Enter a valid email.</p>
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
