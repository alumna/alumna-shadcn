<script>
	let on = $state(false);
	let saved = $state(true);
	let outline = $state(true);
	let sm = $state(false);
	let mid = $state(false);
	let lg = $state(false);

	const snippet = `<script>
	let on = $state(false);
	let outline = $state(true);
	let sm = $state(false);
	let mid = $state(false);
	let lg = $state(false);
<\/script>

<button
	class="toggle"
	type="button"
	aria-pressed={on}
	aria-label="Bookmark"
	onclick={() => on = !on}
>
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M6 4h10v16l-5-3-5 3z"></path>
	</svg>
	Bookmark
</button>

<button class="toggle toggle-outline" type="button" aria-pressed={outline} onclick={() => outline = !outline}>Outline</button>
<button class="toggle toggle-sm" type="button" aria-pressed={sm} onclick={() => sm = !sm}>Small</button>
<button class="toggle" type="button" aria-pressed={mid} onclick={() => mid = !mid}>Default</button>
<button class="toggle toggle-lg" type="button" aria-pressed={lg} onclick={() => lg = !lg}>Large</button>`;

	const filled = `<script>
	let saved = $state(true);
<\/script>

<button
	class="toggle"
	type="button"
	aria-pressed={saved}
	aria-label="Bookmark"
	onclick={() => saved = !saved}
>
	<svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M6 4h10v16l-5-3-5 3z"></path>
	</svg>
	Bookmark
</button>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Toggle</h1>
			<p>
				A button with <code>aria-pressed</code>. Default is ghost until pressed
				(muted fill). <code>.toggle-outline</code> adds a hairline.
				Sizes: <code>toggle-sm</code> / <code>toggle-lg</code>.
				The bookmark icon can stay stroke-only, or take
				<code>fill="currentColor"</code> when pressed.
				There is no wrapper.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#pressed-fill">Pressed fill</a></li>
				</ol>
			</nav>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack">
					<div class="cluster">
						<button
							class="toggle"
							type="button"
							aria-pressed={on}
							aria-label="Bookmark"
							onclick={() => on = !on}
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path d="M6 4h10v16l-5-3-5 3z"></path>
							</svg>
							Bookmark
						</button>
						<button
							class="toggle toggle-outline"
							type="button"
							aria-pressed={outline}
							onclick={() => outline = !outline}
						>Outline</button>
						<button class="toggle" type="button" disabled aria-pressed="false">Disabled</button>
					</div>
					<div class="cluster">
						<button
							class="toggle toggle-sm"
							type="button"
							aria-pressed={sm}
							onclick={() => sm = !sm}
						>Small</button>
						<button
							class="toggle"
							type="button"
							aria-pressed={mid}
							onclick={() => mid = !mid}
						>Default</button>
						<button
							class="toggle toggle-lg"
							type="button"
							aria-pressed={lg}
							onclick={() => lg = !lg}
						>Large</button>
					</div>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="pressed-fill">Pressed fill</h2>
			<div class="docs-preview">
				<div class="cluster">
					<button
						class="toggle"
						type="button"
						aria-pressed={saved}
						aria-label="Bookmark"
						onclick={() => saved = !saved}
					>
						<svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M6 4h10v16l-5-3-5 3z"></path>
						</svg>
						Bookmark
					</button>
				</div>
			</div>
			<pre class="docs-code"><code>{filled}</code></pre>
		</div>
	</div>
</div>
