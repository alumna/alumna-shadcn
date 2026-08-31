<script>
	let volume = $state(40);

	const snippet = `<div class="field">
	<label class="label" for="volume">Volume</label>
	<input class="slider" id="volume" type="range" min="0" max="100" value="40">
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Slider</h1>
			<p>
				Native <code>&lt;input class="slider" type="range"&gt;</code>. Pair with a
				<code>&lt;label class="label"&gt;</code>.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack" style="max-width: 20rem">
					<div class="field">
						<label class="label" for="volume-demo">Volume {volume}</label>
						<input
							class="slider"
							id="volume-demo"
							type="range"
							min="0"
							max="100"
							bind:value={volume}
						>
					</div>
					<div class="field">
						<label class="label" for="muted-demo">Muted</label>
						<input class="slider" id="muted-demo" type="range" min="0" max="100" value="20" disabled>
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
