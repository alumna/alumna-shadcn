<script>
	const snippet = `<div class="field-group">
	<div class="field">
		<button class="button button-outline" type="button">Continue with a provider</button>
	</div>
	<div class="field-separator"><span>Or continue with</span></div>
	<div class="field">
		<label class="label" for="email">Email</label>
		<input class="input" id="email" type="email" placeholder="m@example.com">
		<p class="field-description">We will not share your email.</p>
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Field</h1>
			<p>
				Vertical group of label, control, description, and error.
				<code>.field-group</code> stacks fields.
				<code>.field-separator</code> is the “Or continue with” rule (text in a child element).
				There is no wrapper.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="field-group" style="max-width: 20rem">
					<div class="field">
						<button class="button button-outline" type="button">Continue with a provider</button>
					</div>
					<div class="field-separator"><span>Or continue with</span></div>
					<div class="field">
						<label class="label" for="field-email">Email</label>
						<input class="input" id="field-email" type="email" placeholder="m@example.com">
						<p class="field-description">We will not share your email.</p>
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
