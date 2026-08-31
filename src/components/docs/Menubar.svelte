<script>
	import { on_menu_toggle, menu_keydown, choose_item, menubar_enter } from '../ui/Place.svelte';

	const html = `<div class="menubar" role="menubar">
	<button class="menubar-trigger" type="button" role="menuitem" popovertarget="file" aria-haspopup="true" aria-expanded="false">File</button>
	<div id="file" popover class="menu" role="menu" tabindex="-1">
		<button class="menu-item" type="button" role="menuitem">
			New tab <span class="menu-shortcut">⌘T</span>
		</button>
		<button class="menu-item" type="button" role="menuitem" popovertarget="share" aria-haspopup="menu" aria-expanded="false">
			Share <span class="menu-caret"></span>
		</button>
		<div id="share" popover class="menu" role="menu" tabindex="-1" data-side="end" data-align="start">
			<button class="menu-item" type="button" role="menuitem">Email</button>
			<button class="menu-item" type="button" role="menuitem">Message</button>
		</div>
		<button class="menu-item" type="button" role="menuitem">Print…</button>
	</div>
	<button class="menubar-trigger" type="button" role="menuitem" popovertarget="edit" aria-haspopup="true" aria-expanded="false">Edit</button>
	<div id="edit" popover class="menu" role="menu" tabindex="-1">
		<button class="menu-item" type="button" role="menuitem">Undo</button>
		<button class="menu-item" type="button" role="menuitem">Redo</button>
	</div>
</div>`;

	const imported = `<script>
	import { on_menu_toggle, menu_keydown, choose_item, menubar_enter } from './ui/Place.svelte';
<\/script>

<div class="menubar" role="menubar">
	<button class="menubar-trigger" type="button" role="menuitem" popovertarget="file" aria-haspopup="true" aria-expanded="false" onmouseenter={menubar_enter}>File</button>
	<div id="file" popover class="menu" role="menu" tabindex="-1" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
		<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
			New tab <span class="menu-shortcut">⌘T</span>
		</button>
		<button class="menu-item" type="button" role="menuitem" popovertarget="share" aria-haspopup="menu" aria-expanded="false">
			Share <span class="menu-caret"></span>
		</button>
		<div id="share" popover class="menu" role="menu" tabindex="-1" data-side="end" data-align="start" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
			<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Email</button>
			<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Message</button>
		</div>
		<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Print…</button>
	</div>
	<button class="menubar-trigger" type="button" role="menuitem" popovertarget="edit" aria-haspopup="true" aria-expanded="false" onmouseenter={menubar_enter}>Edit</button>
	<div id="edit" popover class="menu" role="menu" tabindex="-1" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
		<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Undo</button>
		<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Redo</button>
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Menubar</h1>
			<p>
				A row of triggers, each opening a <code>.menu</code> popover.
				Paste the markup first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				(see <a href="/components/popover">Popover</a>).
				Opening one closes another (native auto popovers). With a menu
				open, hover or ArrowLeft / ArrowRight moves to the next trigger.
				One nested submenu uses the same inside-parent pattern as
				Dropdown (no third level). ArrowRight on the submenu trigger
				opens it instead of leaving the menubar.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="menubar" role="menubar">
					<button class="menubar-trigger" type="button" role="menuitem" popovertarget="mb-file" aria-haspopup="true" aria-expanded="false" onmouseenter={menubar_enter}>File</button>
					<div id="mb-file" popover class="menu" role="menu" tabindex="-1" data-side="bottom" data-align="start" style="min-width: 12rem" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
							New tab <span class="menu-shortcut">⌘T</span>
						</button>
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
							New window <span class="menu-shortcut">⌘N</span>
						</button>
						<button class="menu-item" type="button" role="menuitem" popovertarget="mb-file-share" aria-haspopup="menu" aria-expanded="false">
							Share <span class="menu-caret"></span>
						</button>
						<div
							id="mb-file-share"
							popover
							class="menu"
							role="menu"
							tabindex="-1"
							data-side="end"
							data-align="start"
							style="min-width: 8rem"
							ontoggle={on_menu_toggle}
							onkeydown={menu_keydown}
						>
							<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Email</button>
							<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Message</button>
						</div>
						<hr class="menu-sep">
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
							Print… <span class="menu-shortcut">⌘P</span>
						</button>
					</div>
					<button class="menubar-trigger" type="button" role="menuitem" popovertarget="mb-edit" aria-haspopup="true" aria-expanded="false" onmouseenter={menubar_enter}>Edit</button>
					<div id="mb-edit" popover class="menu" role="menu" tabindex="-1" data-side="bottom" data-align="start" style="min-width: 12rem" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
							Undo <span class="menu-shortcut">⌘Z</span>
						</button>
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
							Redo <span class="menu-shortcut">⇧⌘Z</span>
						</button>
						<hr class="menu-sep">
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Cut</button>
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Copy</button>
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Paste</button>
					</div>
					<button class="menubar-trigger" type="button" role="menuitem" popovertarget="mb-view" aria-haspopup="true" aria-expanded="false" onmouseenter={menubar_enter}>View</button>
					<div id="mb-view" popover class="menu" role="menu" tabindex="-1" data-side="bottom" data-align="start" style="min-width: 12rem" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
						<button class="menu-item" type="button" role="menuitem" data-inset onclick={choose_item}>Reload</button>
						<button class="menu-item" type="button" role="menuitem" data-inset onclick={choose_item}>Force reload</button>
						<hr class="menu-sep">
						<button class="menu-item" type="button" role="menuitem" data-inset onclick={choose_item}>Toggle fullscreen</button>
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
