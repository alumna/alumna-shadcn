<script>
	const snippet = `<label class="label">
	<input class="checkbox" type="checkbox">
	Accept terms and conditions
</label>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Checkbox</h1>
			<p>
				Native <code>&lt;input class="checkbox" type="checkbox"&gt;</code>. Put it inside the
				<code>&lt;label&gt;</code>. There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack">
					<label class="label">
						<input class="checkbox" type="checkbox">
						Accept terms and conditions
					</label>
					<label class="label">
						<input class="checkbox" type="checkbox" checked>
						Send me emails
					</label>
					<label class="label">
						<input class="checkbox" type="checkbox" disabled>
						Disabled
					</label>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
