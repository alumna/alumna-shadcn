<script>
	import { route } from 'alumna';
	import { on_toggle, nav_enter } from '../ui/Place.svelte';
	import { watch_docs_code } from '../docs/CodeWell.svelte';

	let { nav, content } = $props();
	let main = $state(null);
	let rail = $state(null);
	let parked;
	let stop = () => {};
	let unobserve = () => {};
	let stop_spy = () => {};

	function page_toc(root) {
		if (!root)
			return null;
		for (const item of root.querySelectorAll('nav.toc')) {
			if (!item.closest('.docs-preview, .block-view-preview'))
				return item;
		}
		return null;
	}

	function ensure_title(toc) {
		if (toc.querySelector(':scope > .toc-title'))
			return null;
		const title = document.createElement('p');
		title.className = 'toc-title';
		title.textContent = 'On This Page';
		toc.insertBefore(title, toc.firstChild);
		return title;
	}

	function spy_toc(root, toc) {
		const links = [...toc.querySelectorAll('a[href^="#"]')];
		const pairs = [];
		for (const link of links) {
			const id = decodeURIComponent((link.hash || '').slice(1));
			if (!id)
				continue;
			const heading = root.querySelector('#' + CSS.escape(id));
			if (heading)
				pairs.push({ heading, link });
		}
		if (!pairs.length)
			return () => {};

		function set_current(link) {
			for (const item of links)
				item.removeAttribute('aria-current');
			if (link)
				link.setAttribute('aria-current', 'true');
		}

		function apply() {
			const top = root.getBoundingClientRect().top;
			let current = pairs[0].link;
			for (const { heading, link } of pairs) {
				if (heading.getBoundingClientRect().top - top <= 16)
					current = link;
			}
			set_current(current);
		}

		const observer = new IntersectionObserver(apply, {
			root,
			rootMargin: '0px 0px -70% 0px',
			threshold: 0
		});

		for (const { heading } of pairs)
			observer.observe(heading);

		function on_click(event) {
			const link = event.target.closest('a[href^="#"]');
			if (!link || !toc.contains(link))
				return;
			set_current(link);
		}

		toc.addEventListener('click', on_click);
		root.addEventListener('scroll', apply, { passive: true });
		apply();

		return () => {
			observer.disconnect();
			root.removeEventListener('scroll', apply);
			toc.removeEventListener('click', on_click);
		};
	}

	function restore_toc() {
		stop_spy();
		stop_spy = () => {};
		if (!parked)
			return;
		const { toc, parent, next, title } = parked;
		parked = null;
		if (title)
			title.remove();
		if (toc && toc.parentNode === rail) {
			if (parent && parent.isConnected) {
				if (next && next.parentNode === parent)
					parent.insertBefore(toc, next);
				else
					parent.appendChild(toc);
			} else {
				toc.remove();
			}
		}
		rail.replaceChildren();
	}

	function park_toc() {
		if (!main || !rail)
			return;
		const toc = page_toc(main);
		if (toc) {
			if (parked && parked.toc === toc && toc.parentNode === rail)
				return;
			restore_toc();
			if (toc.parentNode !== rail)
				rail.replaceChildren();
			parked = { toc, parent: toc.parentNode, next: toc.nextSibling, title: null };
			rail.appendChild(toc);
			parked.title = ensure_title(toc);
			stop_spy();
			stop_spy = spy_toc(main, toc);
			return;
		}
		if (parked && parked.toc.parentNode === rail && parked.parent && parked.parent.isConnected)
			return;
		restore_toc();
		rail.replaceChildren();
	}

	$effect.pre(() => {
		void route.path;
		unobserve();
		unobserve = () => {};
		restore_toc();
		stop();
		stop = () => {};
	});

	$effect(() => {
		void route.path;
		if (!main)
			return;
		stop = watch_docs_code(main);
		const observer = new MutationObserver(park_toc);
		observer.observe(main, { childList: true, subtree: true });
		unobserve = () => observer.disconnect();
		park_toc();
		return () => {
			unobserve();
			unobserve = () => {};
			stop();
			stop = () => {};
			restore_toc();
		};
	});

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

	const blocks = [
		{ href: '/blocks/login', label: 'Login' },
		{ href: '/blocks/login-simple', label: 'Login simple' },
		{ href: '/blocks/login-02', label: 'Login split' },
		{ href: '/blocks/signup', label: 'Signup' },
		{ href: '/blocks/otp', label: 'OTP' },
		{ href: '/blocks/dashboard', label: 'Dashboard' }
	];

	const charts = [
		{ href: '/components/chart', label: 'Chart Components' },
		{ href: '/blocks/charts', label: 'Chart Blocks' }
	];

	function hide_on_link(event) {
		if (event.target.closest('a'))
			event.currentTarget.hidePopover();
	}
</script>

<div class="docs-shell">
	<header class="docs-top">
		<nav class="nav-menu" aria-label="Site">
			<a class="nav-menu-link" href="/">Introduction</a>
			<a class="nav-menu-link" href="/install">Install</a>
			<a class="nav-menu-link" href="/theming">Theming</a>
			<a class="nav-menu-link" href="/dark-light">Dark/Light Modes</a>
			<button class="nav-menu-trigger" type="button" popovertarget="docs-top-components" aria-expanded="false" onmouseenter={nav_enter}>Components</button>
			<div
				id="docs-top-components"
				popover
				class="popover nav-menu-panel"
				data-side="bottom"
				data-align="start"
				ontoggle={on_toggle}
				onclick={hide_on_link}
			>
				<div class="nav-menu-grid">
					{#each components as item}
						<a class="nav-menu-item" href={item.href}>
							<span class="nav-menu-item-title">{item.label}</span>
						</a>
					{/each}
				</div>
			</div>
			<button class="nav-menu-trigger" type="button" popovertarget="docs-top-blocks" aria-expanded="false" onmouseenter={nav_enter}>Blocks</button>
			<div
				id="docs-top-blocks"
				popover
				class="popover nav-menu-panel"
				data-side="bottom"
				data-align="start"
				ontoggle={on_toggle}
				onclick={hide_on_link}
			>
				<div class="nav-menu-grid" data-cols="2">
					{#each blocks as item}
						<a class="nav-menu-item" href={item.href}>
							<span class="nav-menu-item-title">{item.label}</span>
						</a>
					{/each}
				</div>
			</div>
			<button class="nav-menu-trigger" type="button" popovertarget="docs-top-charts" aria-expanded="false" onmouseenter={nav_enter}>Charts</button>
			<div
				id="docs-top-charts"
				popover
				class="popover nav-menu-panel"
				data-side="bottom"
				data-align="start"
				ontoggle={on_toggle}
				onclick={hide_on_link}
			>
			{#each charts as item}
				<a class="nav-menu-item" href={item.href}>
					<span class="nav-menu-item-title">{item.label}</span>
				</a>
			{/each}
			</div>
		</nav>
		<a
			class="nav-menu-link docs-github"
			href="https://github.com/alumna/alumna-shadcn"
			target="_blank"
			rel="noreferrer"
		>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
			</svg>
			Github
		</a>
	</header>
	<div class="docs-body">
		<aside class="docs-nav">{@render nav?.()}</aside>
		<main class="docs-main" bind:this={main}>{@render content?.()}</main>
		<aside class="docs-toc" bind:this={rail}></aside>
	</div>
</div>
