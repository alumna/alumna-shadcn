<script>
	const snippet = `<div class="radio-group" role="radiogroup" aria-label="Plan">
	<label class="label">
		<input class="radio" type="radio" name="plan" value="hobby" checked>
		Hobby
	</label>
	<label class="label">
		<input class="radio" type="radio" name="plan" value="pro">
		Pro
	</label>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Radio</h1>
			<p>
				Native radios. Same <code>name</code> for the group. <code>.radio-group</code> stacks them.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="radio-group" role="radiogroup" aria-label="Plan">
					<label class="label">
						<input class="radio" type="radio" name="plan-demo" value="hobby" checked>
						Hobby
					</label>
					<label class="label">
						<input class="radio" type="radio" name="plan-demo" value="pro">
						Pro
					</label>
					<label class="label">
						<input class="radio" type="radio" name="plan-demo" value="enterprise">
						Enterprise
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
