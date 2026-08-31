<script>
	const snippet = `<div class="alert" role="alert">
	<div class="alert-title">Heads up</div>
	<div class="alert-description">You can add components to your app.</div>
</div>

<div class="alert alert-destructive" role="alert">
	<div class="alert-title">Error</div>
	<div class="alert-description">Your session has expired.</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Alert</h1>
			<p>
				<code>role="alert"</code> status banner. Destructive tints the text.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack">
					<div class="alert" role="alert">
						<div class="alert-title">Heads up</div>
						<div class="alert-description">You can add components to your app.</div>
					</div>
					<div class="alert alert-destructive" role="alert">
						<div class="alert-title">Error</div>
						<div class="alert-description">Your session has expired.</div>
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
