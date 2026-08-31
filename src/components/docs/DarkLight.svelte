<script>
	const fouc = `<meta name="theme-color" content="oklch(1 0 0)">
<script>
	try {
		var theme = localStorage.getItem('theme');
		var source = localStorage.getItem('themeSource');
		var html = document.documentElement;
		var os = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		if (source === 'system' || (!source && !theme)) {
			theme = os;
			source = 'system';
		} else {
			if (theme !== 'dark' && theme !== 'light')
				theme = os;
			source = 'user';
		}
		html.classList.add(theme);
		localStorage.setItem('theme', theme);
		localStorage.setItem('themeSource', source);
		document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)';
	} catch (e) {}
<\/script>`;

	const toggle = `<script>
	import { MediaQuery } from 'svelte/reactivity';
	import { on_menu_toggle, menu_keydown, choose_item } from './ui/Place.svelte';

	const THEME_LIGHT = 'oklch(1 0 0)';
	const THEME_DARK = 'oklch(0.145 0 0)';
	const THEME_LABEL = { light: 'Light', dark: 'Dark' };
	const prefers_dark = new MediaQuery('prefers-color-scheme: dark');

	function sync_theme_color() {
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta)
			meta.setAttribute('content', document.documentElement.classList.contains('dark') ? THEME_DARK : THEME_LIGHT);
	}

	function os_mode() {
		return prefers_dark.current ? 'dark' : 'light';
	}

	function read_source() {
		try {
			const stored_source = localStorage.getItem('themeSource');
			const stored_theme = localStorage.getItem('theme');
			if (stored_source === 'system' || (!stored_source && !stored_theme))
				return 'system';
			return 'user';
		} catch {
			return 'system';
		}
	}

	function apply_theme(next, next_source) {
		const html = document.documentElement;
		html.classList.remove('dark', 'light');
		html.classList.add(next);
		try {
			localStorage.setItem('theme', next);
			localStorage.setItem('themeSource', next_source);
		} catch {
			/* ignore */
		}
		sync_theme_color();
	}

	function read_mode() {
		if (typeof document === 'undefined')
			return 'light';
		const html = document.documentElement;
		if (html.classList.contains('dark')) return 'dark';
		if (html.classList.contains('light')) return 'light';
		const next = os_mode();
		apply_theme(next, source);
		return next;
	}

	let source = $state(read_source());
	let mode = $state(read_mode());

	$effect(() => {
		if (source !== 'system')
			return;
		const next = os_mode();
		if (mode === next && document.documentElement.classList.contains(next))
			return;
		mode = next;
		apply_theme(next, 'system');
	});

	function toggle_theme() {
		mode = mode === 'dark' ? 'light' : 'dark';
		source = 'user';
		apply_theme(mode, 'user');
	}

	function choose_mode(event, next) {
		mode = next;
		source = 'user';
		apply_theme(next, 'user');
		choose_item(event);
	}

	function reset_to_system() {
		source = 'system';
		mode = os_mode();
		apply_theme(mode, 'system');
	}

	function choose_reset(event) {
		choose_item(event);
		reset_to_system();
	}
<\/script>

{#if source === 'system'}
	<button type="button" onclick={toggle_theme} aria-label="Theme: {THEME_LABEL[mode]}">
		{THEME_LABEL[mode]}
	</button>
{:else}
	<button type="button" popovertarget="theme-menu" aria-haspopup="menu" aria-expanded="false" aria-label="Theme: {THEME_LABEL[mode]}">
		{THEME_LABEL[mode]}
	</button>
	<div id="theme-menu" popover class="menu" role="menu" tabindex="-1" data-side="bottom" data-align="end" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
		<button class="menu-item" type="button" role="menuitemradio" aria-checked={mode === 'light'} onclick={(event) => choose_mode(event, 'light')}>
			<span class="menu-check"></span>
			Light
		</button>
		<button class="menu-item" type="button" role="menuitemradio" aria-checked={mode === 'dark'} onclick={(event) => choose_mode(event, 'dark')}>
			<span class="menu-check"></span>
			Dark
		</button>
		<button class="menu-item" type="button" role="menuitem" data-inset onclick={choose_reset}>
			Reset to system
		</button>
	</div>
{/if}`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Dark/Light Modes</h1>
			<p>
				This docs site’s Theme control is Light and Dark only. The first
				visit follows the OS (<code>html.light</code> or
				<code>html.dark</code>, <code>localStorage.theme</code>, and
				<code>themeSource=system</code>). A Light/Dark click is a
				user choice (<code>themeSource=user</code>); later visits
				remember that class even if the OS changes. After that click,
				the same control becomes a menu of Light, Dark, and Reset to
				system — the trigger still shows the current Light or Dark.
				Reset follows the OS again and restores the simple toggle.
				There is no persistent idle label named System.
			</p>
			<p>
				Color, chart, and font tokens live on
				<a href="/theming">Theming</a>.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#fouc-script">FOUC script</a></li>
					<li><a href="#theme-toggle">Theme toggle</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.5rem">
			<h2 id="fouc-script">FOUC script</h2>
			<p>
				Copying the two CSS files does not copy this docs site’s
				<code>site.css</code> or the inline script in <code>src/index.html</code>.
				Paste this in <code>&lt;head&gt;</code> before the stylesheets so the
				first paint already has <code>html.light</code> or <code>html.dark</code>.
			</p>
			<p>
				If <code>themeSource</code> is <code>system</code>, or both
				<code>theme</code> and <code>themeSource</code> are missing,
				the script re-reads <code>prefers-color-scheme</code> (the OS
				may have changed overnight) and writes <code>theme</code> plus
				<code>themeSource=system</code>. If <code>themeSource</code> is
				<code>user</code>, or a legacy 24.3 <code>theme</code> exists
				without a source, it applies the stored class and treats the
				source as <code>user</code>. After this script, this site
				always has a class. It also sets <code>theme-color</code>
				from the class (<code>oklch(1 0 0)</code> /
				<code>oklch(0.145 0 0)</code>).
			</p>
			<pre class="docs-code"><code>{fouc}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.5rem">
			<h2 id="theme-toggle">Theme toggle</h2>
			<p>
				Optional. Same Light ↔ Dark toggle as this site’s control.
				It updates <code>html.dark</code> / <code>html.light</code>,
				<code>localStorage.theme</code>, and
				<code>themeSource</code>, then <code>theme-color</code>
				from the class. While <code>themeSource</code> is
				<code>system</code>, a <code>MediaQuery</code> from
				<code>svelte/reactivity</code> applies OS changes with no
				polling. After a user click, that control becomes a
				<code>.menu</code> dropdown: Light, Dark, and Reset to system.
				The trigger still shows the current Light or Dark. Reset is
				not a persistent idle label named System.
				Reset writes <code>themeSource=system</code>, applies the
				current OS, and restores the simple Light ↔ Dark toggle.
			</p>
			<pre class="docs-code"><code>{toggle}</code></pre>
		</div>
	</div>
</div>
