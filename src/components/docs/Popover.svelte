<script>
	import { on_toggle } from '../ui/Place.svelte';

	const html = `<button class="button button-outline" type="button" popovertarget="dims">Open popover</button>
<div id="dims" popover class="popover" data-side="bottom" data-align="start">
	<div class="popover-header">
		<div class="popover-title">Dimensions</div>
		<p class="popover-description">Set the dimensions for the layer.</p>
	</div>
	<div class="field">
		<label class="label" for="width">Width</label>
		<input class="input" id="width" value="100%">
	</div>
</div>`;

	const imported = `<script>
	import { on_toggle } from './ui/Place.svelte';
<\/script>

<button class="button button-outline" type="button" popovertarget="dims">Open popover</button>
<div id="dims" popover class="popover" data-side="bottom" data-align="start" ontoggle={on_toggle}>
	<div class="popover-header">
		<div class="popover-title">Dimensions</div>
		<p class="popover-description">Set the dimensions for the layer.</p>
	</div>
	<div class="field">
		<label class="label" for="width">Width</label>
		<input class="input" id="width" value="100%">
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Popover</h1>
			<p>
				Native <code>popover</code> (top layer, light dismiss, Escape).
				Paste the markup first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				and call <code>on_toggle</code> so the panel sits next to its trigger
				(<a href="/components/popover">Popover</a>).
				<code>data-side</code> is <code>top</code> / <code>bottom</code> /
				<code>start</code> / <code>end</code>.
				<code>data-align</code> is <code>start</code> / <code>middle</code> / <code>end</code>.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<button class="button button-outline" type="button" popovertarget="docs-pop">Open popover</button>
				<div id="docs-pop" popover class="popover" data-side="bottom" data-align="start" ontoggle={on_toggle}>
					<div class="popover-header">
						<div class="popover-title">Dimensions</div>
						<p class="popover-description">Set the dimensions for the layer.</p>
					</div>
					<div class="stack" style="--stack-gap: 0.75rem">
						<div class="field">
							<label class="label" for="pop-width">Width</label>
							<input class="input" id="pop-width" value="100%">
						</div>
						<div class="field">
							<label class="label" for="pop-height">Height</label>
							<input class="input" id="pop-height" value="25px">
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
