<script>
	import { tip_enter, tip_leave, hide_on_escape } from '../ui/Place.svelte';

	let docs_tip;
	let docs_tip_keys;

	const html = `<button class="button button-outline" type="button" aria-describedby="tip">Hover</button>
<div id="tip" popover="manual" class="tooltip" data-side="top">Add to library</div>`;

	const imported = `<script>
	import { tip_enter, tip_leave, hide_on_escape } from './ui/Place.svelte';
	let tip;
<\/script>

<button
	class="button button-outline"
	type="button"
	aria-describedby="tip"
	onmouseenter={(event) => tip_enter(event, tip)}
	onmouseleave={(event) => tip_leave(event, tip)}
	onfocus={(event) => tip_enter(event, tip, 0)}
	onblur={(event) => tip_leave(event, tip, 0)}
	onkeydown={(event) => hide_on_escape(event, tip)}
>Hover</button>
<div id="tip" bind:this={tip} popover="manual" class="tooltip" data-side="top">Add to library</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Tooltip</h1>
			<p>
				<code>popover="manual"</code> plus hover/focus. Inverted colors
				(foreground fill). Paste the markup first. Same helper as
				<a href="/components/popover">Popover</a> — copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>.
				<code>title</code> is still fine when you do not need the styled hint.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="cluster">
					<button
						class="button button-outline"
						type="button"
						aria-describedby="docs-tip"
						onmouseenter={(event) => tip_enter(event, docs_tip)}
						onmouseleave={(event) => tip_leave(event, docs_tip)}
						onfocus={(event) => tip_enter(event, docs_tip, 0)}
						onblur={(event) => tip_leave(event, docs_tip, 0)}
						onkeydown={(event) => hide_on_escape(event, docs_tip)}
					>Hover</button>
					<button
						class="button button-icon button-outline"
						type="button"
						aria-label="Help"
						aria-describedby="docs-tip-keys"
						onmouseenter={(event) => tip_enter(event, docs_tip_keys)}
						onmouseleave={(event) => tip_leave(event, docs_tip_keys)}
						onfocus={(event) => tip_enter(event, docs_tip_keys, 0)}
						onblur={(event) => tip_leave(event, docs_tip_keys, 0)}
						onkeydown={(event) => hide_on_escape(event, docs_tip_keys)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<circle cx="12" cy="12" r="9"></circle>
							<path d="M9.1 9a3 3 0 1 1 4.4 2.7c-.7.4-1.1.8-1.1 1.8"></path>
							<circle cx="12" cy="17" r="0.6" fill="currentColor"></circle>
						</svg>
					</button>
				</div>
				<div id="docs-tip" bind:this={docs_tip} popover="manual" class="tooltip" data-side="top">Add to library</div>
				<div id="docs-tip-keys" bind:this={docs_tip_keys} popover="manual" class="tooltip" data-side="top">
					Search
					<kbd class="kbd">⌘</kbd><kbd class="kbd">K</kbd>
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
