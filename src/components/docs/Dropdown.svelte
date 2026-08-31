<script>
	import { on_menu_toggle, menu_keydown, choose_item } from '../ui/Place.svelte';

	const html = `<button class="button button-outline" type="button" popovertarget="account" aria-haspopup="menu">Open</button>
<div id="account" popover class="menu" role="menu" tabindex="-1" data-side="bottom" data-align="start">
	<div class="menu-label">My Account</div>
	<button class="menu-item" type="button" role="menuitem">Profile</button>
	<button class="menu-item" type="button" role="menuitem" popovertarget="invite" aria-haspopup="menu" aria-expanded="false">
		Invite users <span class="menu-caret"></span>
	</button>
	<div id="invite" popover class="menu" role="menu" tabindex="-1" data-side="end" data-align="start">
		<button class="menu-item" type="button" role="menuitem">Email</button>
		<button class="menu-item" type="button" role="menuitem">Message</button>
	</div>
	<button class="menu-item" type="button" role="menuitem" data-variant="destructive">Log out</button>
</div>`;

	const imported = `<script>
	import { on_menu_toggle, menu_keydown, choose_item } from './ui/Place.svelte';
<\/script>

<button class="button button-outline" type="button" popovertarget="account" aria-haspopup="menu">Open</button>
<div id="account" popover class="menu" role="menu" tabindex="-1" data-side="bottom" data-align="start" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
	<div class="menu-label">My Account</div>
	<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Profile</button>
	<button class="menu-item" type="button" role="menuitem" popovertarget="invite" aria-haspopup="menu" aria-expanded="false">
		Invite users <span class="menu-caret"></span>
	</button>
	<div id="invite" popover class="menu" role="menu" tabindex="-1" data-side="end" data-align="start" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
		<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Email</button>
		<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Message</button>
	</div>
	<button class="menu-item" type="button" role="menuitem" data-variant="destructive" onclick={choose_item}>Log out</button>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Dropdown</h1>
			<p>
				A <code>.menu</code> popover. Light dismiss and Escape come from the
				Popover API. Paste the markup first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				(see <a href="/components/popover">Popover</a>).
				Arrow keys move between items. One nested submenu: put a second
				<code>.menu</code> <em>inside</em> the parent (so auto popovers nest),
				<code>data-side="end"</code>, and a <code>.menu-caret</code> on the
				trigger. Hover or ArrowRight opens it; ArrowLeft closes it (RTL
				flips). A third level is not supported. CSS anchor positions the
				panel when the browser supports it; otherwise
				<code>place()</code> sets <code>top</code> / <code>left</code>
				(<code>data-place="js"</code> forces that fallback).
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<button class="button button-outline" type="button" popovertarget="docs-drop" aria-haspopup="menu" aria-expanded="false">Open</button>
				<div
					id="docs-drop"
					popover
					class="menu"
					role="menu"
					tabindex="-1"
					data-side="bottom"
					data-align="start"
					style="min-width: 14rem"
					ontoggle={on_menu_toggle}
					onkeydown={menu_keydown}
				>
					<div class="menu-label">My Account</div>
					<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
						Profile <span class="menu-shortcut">⇧⌘P</span>
					</button>
					<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
						Billing <span class="menu-shortcut">⌘B</span>
					</button>
					<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
						Settings <span class="menu-shortcut">⌘S</span>
					</button>
					<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
						Keyboard shortcuts <span class="menu-shortcut">⌘K</span>
					</button>
					<hr class="menu-sep">
					<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Team</button>
					<button class="menu-item" type="button" role="menuitem" popovertarget="docs-drop-invite" aria-haspopup="menu" aria-expanded="false">
						Invite users <span class="menu-caret"></span>
					</button>
					<div
						id="docs-drop-invite"
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
						<hr class="menu-sep">
						<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>More…</button>
					</div>
					<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
						New team <span class="menu-shortcut">⌘T</span>
					</button>
					<hr class="menu-sep">
					<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>GitHub</button>
					<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Support</button>
					<button class="menu-item" type="button" role="menuitem" aria-disabled="true">API</button>
					<hr class="menu-sep">
					<button class="menu-item" type="button" role="menuitem" data-variant="destructive" onclick={choose_item}>
						Log out <span class="menu-shortcut">⇧⌘Q</span>
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
