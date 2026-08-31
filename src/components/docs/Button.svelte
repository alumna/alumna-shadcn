<script>
	const snippet = `<button class="button" type="button">Default</button>
<button class="button button-outline" type="button">Outline</button>
<button class="button button-secondary" type="button">Secondary</button>
<button class="button button-ghost" type="button">Ghost</button>
<button class="button button-destructive" type="button">Destructive</button>
<a class="button button-link" href="/">Link</a>

<button class="button button-sm" type="button">Small</button>
<button class="button button-lg" type="button">Large</button>
<button class="button button-icon" type="button" aria-label="Close">
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M18 6 6 18M6 6l12 12"/>
	</svg>
</button>

<button class="button" type="button">
	<svg class="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" opacity="0.25"></circle>
		<path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
	</svg>
	Please wait
</button>`;

	const with_spinner = `<script>
	import Spinner from './ui/Spinner.svelte';
<\/script>

<button class="button" type="button">
	<Spinner decorative />
	Please wait
</button>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Button</h1>
			<p>
				<code>&lt;button class="button"&gt;</code> or <code>&lt;a class="button"&gt;</code>.
				Variants are extra classes. Default is solid primary. Destructive is tinted, not a solid red fill.
				There is no wrapper. Paste the markup first. The spinner SVG is the piece
				worth wrapping — copy
				<a href="src/components/ui/Spinner.svelte"><code>src/components/ui/Spinner.svelte</code></a>
				(<a href="/components/spinner">Spinner</a>).
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="stack">
					<div class="cluster">
						<button class="button" type="button">Default</button>
						<button class="button button-outline" type="button">Outline</button>
						<button class="button button-secondary" type="button">Secondary</button>
						<button class="button button-ghost" type="button">Ghost</button>
						<button class="button button-destructive" type="button">Destructive</button>
						<a class="button button-link" href="/components/button">Link</a>
					</div>
					<div class="cluster">
						<button class="button button-sm" type="button">Small</button>
						<button class="button" type="button">Default</button>
						<button class="button button-lg" type="button">Large</button>
						<button class="button button-icon" type="button" aria-label="Close">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path d="M18 6 6 18M6 6l12 12"></path>
							</svg>
						</button>
						<button class="button" type="button" disabled>Disabled</button>
						<button class="button" type="button">
							<svg class="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" opacity="0.25"></circle>
								<path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
							</svg>
							Please wait
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Markup</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Imported</h2>
			<pre class="docs-code"><code>{with_spinner}</code></pre>
		</div>
	</div>
</div>
