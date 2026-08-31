<script>
	const snippet = `<label class="label">
	<input class="switch" type="checkbox" role="switch">
	Airplane mode
</label>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Switch</h1>
			<p>
				A checkbox restyled as a switch. Keep <code>type="checkbox"</code> and add
				<code>role="switch"</code>. There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack">
					<label class="label">
						<input class="switch" type="checkbox" role="switch">
						Airplane mode
					</label>
					<label class="label">
						<input class="switch" type="checkbox" role="switch" checked>
						Notifications
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
