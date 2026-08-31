<script>
	const snippet = `<div class="field">
	<label class="label" for="bio">Bio</label>
	<textarea class="textarea" id="bio" placeholder="Tell us a little about yourself"></textarea>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Textarea</h1>
			<p>
				Native <code>&lt;textarea class="textarea"&gt;</code>. Same chrome as <code>.input</code>, taller, resizable.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="field" style="max-width: 20rem">
					<label class="label" for="bio-demo">Bio</label>
					<textarea class="textarea" id="bio-demo" placeholder="Tell us a little about yourself"></textarea>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
