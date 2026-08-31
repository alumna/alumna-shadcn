<script>
	const html = `<svg class="spinner" viewBox="0 0 24 24" fill="none" role="status" aria-label="Loading">
	<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" opacity="0.25"></circle>
	<path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
</svg>`;

	const imported = `<script>
	import Spinner from './ui/Spinner.svelte';
<\/script>

<Spinner />

<button class="button" type="button">
	<Spinner decorative />
	Please wait
</button>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Spinner</h1>
			<p>
				SVG with <code>class="spinner"</code>. Standalone: <code>role="status"</code>
				and <code>aria-label="Loading"</code>. Inside a labeled button: <code>aria-hidden</code>.
				Paste the markup first. The SVG is the piece worth wrapping — copy
				<a href="src/components/ui/Spinner.svelte"><code>src/components/ui/Spinner.svelte</code></a>.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="cluster">
					<svg class="spinner" viewBox="0 0 24 24" fill="none" role="status" aria-label="Loading">
						<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" opacity="0.25"></circle>
						<path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
					</svg>
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
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Markup</h2>
			<pre class="docs-code"><code>{html}</code></pre>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Imported</h2>
			<pre class="docs-code"><code>{imported}</code></pre>
		</div>
	</div>
</div>
