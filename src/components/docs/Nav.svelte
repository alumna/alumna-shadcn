<script>
	import { route } from 'alumna';
	import { MediaQuery } from 'svelte/reactivity';
	import { on_menu_toggle, menu_keydown, choose_item } from '../ui/Place.svelte';

	const components = [
		{ href: '/components/accordion', label: 'Accordion' },
		{ href: '/components/alert', label: 'Alert' },
		{ href: '/components/avatar', label: 'Avatar' },
		{ href: '/components/badge', label: 'Badge' },
		{ href: '/components/breadcrumb', label: 'Breadcrumb' },
		{ href: '/components/button', label: 'Button' },
		{ href: '/components/button-group', label: 'Button group' },
		{ href: '/components/card', label: 'Card' },
		{ href: '/components/calendar', label: 'Calendar' },
		{ href: '/components/carousel', label: 'Carousel' },
		{ href: '/components/checkbox', label: 'Checkbox' },
		{ href: '/components/combobox', label: 'Combobox' },
		{ href: '/components/command', label: 'Command' },
		{ href: '/components/context-menu', label: 'Context menu' },
		{ href: '/components/data-table', label: 'Data table' },
		{ href: '/components/date-picker', label: 'Date picker' },
		{ href: '/components/dialog', label: 'Dialog' },
		{ href: '/components/dropdown', label: 'Dropdown' },
		{ href: '/components/empty', label: 'Empty' },
		{ href: '/components/field', label: 'Field' },
		{ href: '/components/hover-card', label: 'Hover card' },
		{ href: '/components/input', label: 'Input' },
		{ href: '/components/input-group', label: 'Input group' },
		{ href: '/components/input-otp', label: 'Input OTP' },
		{ href: '/components/item', label: 'Item' },
		{ href: '/components/kbd', label: 'Kbd' },
		{ href: '/components/label', label: 'Label' },
		{ href: '/components/menubar', label: 'Menubar' },
		{ href: '/components/navigation-menu', label: 'Navigation menu' },
		{ href: '/components/pagination', label: 'Pagination' },
		{ href: '/components/popover', label: 'Popover' },
		{ href: '/components/progress', label: 'Progress' },
		{ href: '/components/radio', label: 'Radio' },
		{ href: '/components/select', label: 'Select' },
		{ href: '/components/separator', label: 'Separator' },
		{ href: '/components/sheet', label: 'Sheet' },
		{ href: '/components/sidebar', label: 'Sidebar' },
		{ href: '/components/skeleton', label: 'Skeleton' },
		{ href: '/components/slider', label: 'Slider' },
		{ href: '/components/spinner', label: 'Spinner' },
		{ href: '/components/stack', label: 'Stack' },
		{ href: '/components/switch', label: 'Switch' },
		{ href: '/components/table', label: 'Table' },
		{ href: '/components/tabs', label: 'Tabs' },
		{ href: '/components/textarea', label: 'Textarea' },
		{ href: '/components/toast', label: 'Toast' },
		{ href: '/components/toc', label: 'Toc' },
		{ href: '/components/toggle', label: 'Toggle' },
		{ href: '/components/toggle-group', label: 'Toggle group' },
		{ href: '/components/tooltip', label: 'Tooltip' },
		{ href: '/components/typography', label: 'Typography' }
	];

	const THEME_LIGHT = 'oklch(1 0 0)';
	const THEME_DARK = 'oklch(0.145 0 0)';
	const THEME_LABEL = { light: 'Light', dark: 'Dark' };
	const prefers_dark = new MediaQuery('prefers-color-scheme: dark');

	let path = $derived(route.path);

	function current(href) {
		if (href === '/theming' && (path === '/theming' || path === '/tokens'))
			return 'page';
		return path === href ? 'page' : undefined;
	}

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
</script>

<div class="stack" style="--stack-gap: 1.5rem">
	<div class="cluster" style="--cluster-gap: 0.75rem">
		<a href="/" class="docs-brand" aria-current={current('/')}>alumna-shadcn</a>
		<div class="docs-theme">
			{#if source === 'system'}
				<button
					class="docs-toggle"
					type="button"
					onclick={toggle_theme}
					aria-label="Theme: {THEME_LABEL[mode]}"
				>
					{#if mode === 'dark'}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M21 14.3A9 9 0 1 1 9.7 3 7 7 0 0 0 21 14.3z"></path>
						</svg>
					{:else}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<circle cx="12" cy="12" r="4"></circle>
							<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
						</svg>
					{/if}
					{THEME_LABEL[mode]}
				</button>
			{:else}
				<button
					class="docs-toggle"
					type="button"
					popovertarget="docs-theme-menu"
					aria-haspopup="menu"
					aria-expanded="false"
					aria-label="Theme: {THEME_LABEL[mode]}"
				>
					{#if mode === 'dark'}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M21 14.3A9 9 0 1 1 9.7 3 7 7 0 0 0 21 14.3z"></path>
						</svg>
					{:else}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<circle cx="12" cy="12" r="4"></circle>
							<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
						</svg>
					{/if}
					{THEME_LABEL[mode]}
				</button>
				<div
					id="docs-theme-menu"
					popover
					class="menu"
					role="menu"
					tabindex="-1"
					data-side="bottom"
					data-align="end"
					style="min-width: 10rem"
					ontoggle={on_menu_toggle}
					onkeydown={menu_keydown}
				>
					<button
						class="menu-item"
						type="button"
						role="menuitemradio"
						aria-checked={mode === 'light'}
						onclick={(event) => choose_mode(event, 'light')}
					>
						<span class="menu-check"></span>
						Light
					</button>
					<button
						class="menu-item"
						type="button"
						role="menuitemradio"
						aria-checked={mode === 'dark'}
						onclick={(event) => choose_mode(event, 'dark')}
					>
						<span class="menu-check"></span>
						Dark
					</button>
					<button
						class="menu-item"
						type="button"
						role="menuitem"
						data-inset
						onclick={choose_reset}
					>
						Reset to system
					</button>
				</div>
			{/if}
		</div>
	</div>

	<nav class="stack" style="--stack-gap: 0.25rem" aria-label="Docs">
		<p class="docs-nav-label">Guides</p>
		<a href="/" aria-current={current('/')}>Introduction</a>
		<a href="/install" aria-current={current('/install')}>Install</a>
		<a href="/theming" aria-current={current('/theming')}>Theming</a>
		<a href="/dark-light" aria-current={current('/dark-light')}>Dark/Light Modes</a>
	</nav>

	<nav class="stack" style="--stack-gap: 0.25rem" aria-label="Components">
		<a href="/components" class="docs-nav-label" aria-current={current('/components')}>Components</a>
		{#each components as item}
			<a href={item.href} aria-current={current(item.href)}>{item.label}</a>
		{/each}
	</nav>

	<nav class="stack" style="--stack-gap: 0.25rem" aria-label="Blocks">
		<p class="docs-nav-label">Blocks</p>
		<a href="/blocks/login" aria-current={current('/blocks/login')}>Login</a>
		<a href="/blocks/login-simple" aria-current={current('/blocks/login-simple')}>Login simple</a>
		<a href="/blocks/login-02" aria-current={current('/blocks/login-02')}>Login split</a>
		<a href="/blocks/signup" aria-current={current('/blocks/signup')}>Signup</a>
		<a href="/blocks/otp" aria-current={current('/blocks/otp')}>OTP</a>
		<a href="/blocks/dashboard" aria-current={current('/blocks/dashboard')}>Dashboard</a>
	</nav>

	<nav class="stack" style="--stack-gap: 0.25rem" aria-label="Charts">
		<p class="docs-nav-label">Charts</p>
		<a href="/components/chart" aria-current={current('/components/chart')}>Chart Components</a>
		<a href="/blocks/charts" aria-current={current('/blocks/charts')}>Chart Blocks</a>
	</nav>
</div>
