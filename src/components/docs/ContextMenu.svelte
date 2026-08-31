<script>
	import { on_context, on_menu_toggle, menu_keydown, choose_item } from '../ui/Place.svelte';

	let menu;
	let bookmarks = $state(true);
	let urls = $state(false);

	const html = `<div class="context-well">
	Right click here
</div>
<div popover class="menu" role="menu" tabindex="-1">
	<button class="menu-item" type="button" role="menuitem" data-inset>
		Back <span class="menu-shortcut">⌘[</span>
	</button>
	<button class="menu-item" type="button" role="menuitem" data-inset aria-disabled="true">
		Forward <span class="menu-shortcut">⌘]</span>
	</button>
	<button class="menu-item" type="button" role="menuitem" data-inset popovertarget="more" aria-haspopup="menu" aria-expanded="false">
		More tools <span class="menu-caret"></span>
	</button>
	<div id="more" popover class="menu" role="menu" tabindex="-1" data-side="end" data-align="start">
		<button class="menu-item" type="button" role="menuitem">Save page…</button>
		<button class="menu-item" type="button" role="menuitem">Create QR code</button>
	</div>
	<hr class="menu-sep">
	<button class="menu-item" type="button" role="menuitemcheckbox" aria-checked="true">
		<span class="menu-check"></span> Show bookmarks
	</button>
</div>`;

	const imported = `<script>
	import { on_context, on_menu_toggle, menu_keydown, choose_item } from './ui/Place.svelte';
	let menu;
	let on = $state(true);
<\/script>

<div class="context-well" oncontextmenu={(event) => on_context(event, menu)}>
	Right click here
</div>
<div bind:this={menu} popover class="menu" role="menu" tabindex="-1" onkeydown={menu_keydown}>
	<button class="menu-item" type="button" role="menuitem" data-inset onclick={choose_item}>
		Back <span class="menu-shortcut">⌘[</span>
	</button>
	<button class="menu-item" type="button" role="menuitem" data-inset aria-disabled="true">
		Forward <span class="menu-shortcut">⌘]</span>
	</button>
	<button class="menu-item" type="button" role="menuitem" data-inset popovertarget="more" aria-haspopup="menu" aria-expanded="false">
		More tools <span class="menu-caret"></span>
	</button>
	<div id="more" popover class="menu" role="menu" tabindex="-1" data-side="end" data-align="start" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
		<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Save page…</button>
		<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Create QR code</button>
	</div>
	<hr class="menu-sep">
	<button class="menu-item" type="button" role="menuitemcheckbox" aria-checked={on} onclick={() => on = !on}>
		<span class="menu-check"></span> Show bookmarks
	</button>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Context menu</h1>
			<p>
				Same <code>.menu</code> as Dropdown, opened with
				<code>contextmenu</code> at the pointer. Paste the markup first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				(see <a href="/components/popover">Popover</a>).
				Prevent the browser menu on the well. Check items use
				<code>aria-checked</code> and <code>.menu-check</code>.
				One nested submenu uses the same inside-parent pattern as
				Dropdown (no third level). The root menu is a click point, so
				<code>place()</code> always sets <code>top</code> / <code>left</code>
				there; the submenu can still use CSS anchor.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="context-well" role="region" aria-label="Context menu demo" oncontextmenu={(event) => on_context(event, menu)}>
					Right click here
				</div>
				<div bind:this={menu} popover class="menu" role="menu" tabindex="-1" style="min-width: 13rem" onkeydown={menu_keydown}>
					<button class="menu-item" type="button" role="menuitem" data-inset onclick={choose_item}>
						Back <span class="menu-shortcut">⌘[</span>
					</button>
					<button class="menu-item" type="button" role="menuitem" data-inset aria-disabled="true">
						Forward <span class="menu-shortcut">⌘]</span>
					</button>
					<button class="menu-item" type="button" role="menuitem" data-inset onclick={choose_item}>
						Reload <span class="menu-shortcut">⌘R</span>
					</button>
					<button class="menu-item" type="button" role="menuitem" data-inset popovertarget="docs-ctx-more" aria-haspopup="menu" aria-expanded="false">
						More tools <span class="menu-caret"></span>
					</button>
					<div
						id="docs-ctx-more"
						popover
						class="menu"
						role="menu"
						tabindex="-1"
						data-side="end"
						data-align="start"
						style="min-width: 10rem"
						ontoggle={on_menu_toggle}
						onkeydown={menu_keydown}
					>
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Save page…</button>
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Create QR code</button>
					</div>
					<hr class="menu-sep">
					<button
						class="menu-item"
						type="button"
						role="menuitemcheckbox"
						aria-checked={bookmarks}
						onclick={() => bookmarks = !bookmarks}
					>
						<span class="menu-check"></span> Show bookmarks
					</button>
					<button
						class="menu-item"
						type="button"
						role="menuitemcheckbox"
						aria-checked={urls}
						onclick={() => urls = !urls}
					>
						<span class="menu-check"></span> Show full URLs
					</button>
					<hr class="menu-sep">
					<button class="menu-item" type="button" role="menuitem" data-variant="destructive" onclick={choose_item}>
						Delete
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
