<script>
	import { hover_enter, hover_leave, hover_panel_enter, hover_panel_leave, hide_on_escape } from '../ui/Place.svelte';

	let card;

	const html = `<a href="/">@alumna</a>
<div popover="manual" class="popover hover-card" role="dialog" tabindex="-1" aria-label="@alumna" data-side="bottom" data-align="start">
	<div class="cluster" style="--cluster-gap: 0.75rem; align-items: start">
		<span class="avatar">AL</span>
		<div class="stack" style="--stack-gap: 0.25rem">
			<div class="popover-title">@alumna</div>
			<p class="popover-description">A compile-time framework for apps.</p>
		</div>
	</div>
</div>`;

	const imported = `<script>
	import { hover_enter, hover_leave, hover_panel_enter, hover_panel_leave, hide_on_escape } from './ui/Place.svelte';
	let card;
<\/script>

<a
	href="/"
	onmouseenter={(event) => hover_enter(event, card)}
	onmouseleave={(event) => hover_leave(event, card)}
	onfocus={(event) => hover_enter(event, card)}
	onblur={(event) => hover_leave(event, card)}
	onkeydown={(event) => hide_on_escape(event, card)}
>@alumna</a>
<div
	bind:this={card}
	popover="manual"
	class="popover hover-card"
	role="dialog"
	tabindex="-1"
	aria-label="@alumna"
	data-side="bottom"
	data-align="start"
	onmouseenter={hover_panel_enter}
	onmouseleave={hover_panel_leave}
>
	<div class="cluster" style="--cluster-gap: 0.75rem; align-items: start">
		<span class="avatar">AL</span>
		<div class="stack" style="--stack-gap: 0.25rem">
			<div class="popover-title">@alumna</div>
			<p class="popover-description">A compile-time framework for apps.</p>
		</div>
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Hover card</h1>
			<p>
				A richer tooltip: the same manual popover, kept open while the pointer
				is on the trigger or the panel. Paste the markup first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				(see <a href="/components/popover">Popover</a>).
				Preview uses initials, not a remote image.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<a
					href="/components/hover-card"
					style="text-decoration: underline; text-underline-offset: 4px"
					onmouseenter={(event) => hover_enter(event, card)}
					onmouseleave={(event) => hover_leave(event, card)}
					onfocus={(event) => hover_enter(event, card)}
					onblur={(event) => hover_leave(event, card)}
					onkeydown={(event) => hide_on_escape(event, card)}
				>@alumna</a>
				<div
					bind:this={card}
					popover="manual"
					class="popover hover-card"
					role="dialog"
					tabindex="-1"
					aria-label="@alumna"
					data-side="bottom"
					data-align="start"
					onmouseenter={hover_panel_enter}
					onmouseleave={hover_panel_leave}
				>
					<div class="cluster" style="--cluster-gap: 0.75rem; align-items: start">
						<span class="avatar">AL</span>
						<div class="stack" style="--stack-gap: 0.25rem">
							<div class="popover-title">@alumna</div>
							<p class="popover-description">A compile-time framework for apps.</p>
							<p class="popover-description" style="font-size: var(--text-xs)">Joined 2016</p>
						</div>
					</div>
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
