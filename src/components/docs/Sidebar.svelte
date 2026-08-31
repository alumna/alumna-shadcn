<script>
	import { on_menu_toggle, menu_keydown, choose_item, tip_enter, tip_leave, hide_on_escape } from '../ui/Place.svelte';

	let collapsed = $state(false);
	let team = $state(0);
	let rail_tip;
	let rail_label = $state('');

	const teams = [
		{ name: 'Acme Inc.', plan: 'Enterprise' },
		{ name: 'Acme Corp.', plan: 'Startup' },
		{ name: 'Acme Ltd.', plan: 'Free' },
	];

	function fold() {
		collapsed = !collapsed;
	}

	function pick_team(event, index) {
		team = index;
		choose_item(event);
	}

	function rail_enter(event, label, wait) {
		if (!rail_tip)
			return;
		const shell = event.currentTarget.closest('.shell');
		if (!shell?.hasAttribute('data-collapsed'))
			return;
		if (window.matchMedia('(max-width: 40rem)').matches)
			return;
		rail_label = label;
		tip_enter(event, rail_tip, wait);
	}

	function rail_leave(event, wait) {
		if (!rail_tip)
			return;
		tip_leave(event, rail_tip, wait);
	}

	function hide_rail() {
		rail_tip?.hidePopover();
	}

	const snippet = `<div class="shell">
	<aside class="sidebar">
		<div class="sidebar-header">
			<button class="sidebar-link" type="button" popovertarget="team" aria-haspopup="menu">
				<span class="login-mark" aria-hidden="true"><!-- mark --></span>
				<span class="stack">Acme Inc. / Enterprise</span>
			</button>
			<div id="team" popover class="menu" role="menu" data-side="end"><!-- teams --></div>
		</div>
		<div class="sidebar-content">
			<input class="input" type="search" placeholder="Search…" aria-label="Search">
			<div class="sidebar-group">
				<div class="sidebar-label">Platform</div>
				<nav class="sidebar-menu" aria-label="Platform">
					<details open>
						<summary class="sidebar-link">
							<!-- icon -->
							<span>Playground</span>
							<svg class="sidebar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path d="m9 6 6 6-6 6"></path>
							</svg>
						</summary>
						<div class="sidebar-sub">
							<a class="sidebar-link" href="/">History</a>
							<a class="sidebar-link" href="/">Starred</a>
						</div>
					</details>
					<a class="sidebar-link" href="/" data-active>
						<!-- icon -->
						<span>Dashboard</span>
						<span class="badge badge-secondary">8</span>
					</a>
				</nav>
			</div>
		</div>
		<div class="sidebar-footer">
			<button class="sidebar-link" type="button" popovertarget="user" aria-haspopup="menu">
				<span class="avatar">AL</span>
				<span class="stack">Ada Lovelace</span>
			</button>
			<div id="user" popover class="menu" role="menu" data-side="end"><!-- Account, Billing, Log out --></div>
		</div>
	</aside>
	<div class="shell-main">
		<header class="topbar">
			<button class="button button-ghost button-icon shell-fold" type="button">…</button>
			<button class="button button-ghost button-icon shell-menu" type="button">…</button>
			…
		</header>
		<div class="shell-body">…</div>
	</div>
</div>

<!-- Desktop icon-collapse: data-collapsed on .shell. Labels hide; icons remain.
	 Hover icon rows for a .tooltip (Place.svelte). Team + user are .menu popovers.
	 Mobile overlay is unchanged (data-open). See the Dashboard block. -->`;
</script>

{#snippet chevron()}
	<svg class="sidebar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="m9 6 6 6-6 6"></path>
	</svg>
{/snippet}

{#snippet chevrons()}
	<svg class="sidebar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="m7 15 5 5 5-5"></path>
		<path d="m7 9 5-5 5 5"></path>
	</svg>
{/snippet}

{#snippet icon_grid()}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<rect x="3" y="3" width="7" height="9" rx="1"></rect>
		<rect x="14" y="3" width="7" height="5" rx="1"></rect>
		<rect x="14" y="12" width="7" height="9" rx="1"></rect>
		<rect x="3" y="16" width="7" height="5" rx="1"></rect>
	</svg>
{/snippet}

{#snippet icon_list()}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M4 7h16M4 12h16M4 17h10"></path>
	</svg>
{/snippet}

{#snippet icon_term()}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<polyline points="4 17 10 11 4 5"></polyline>
		<line x1="12" x2="20" y1="19" y2="19"></line>
	</svg>
{/snippet}

{#snippet icon_panel()}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<rect x="3" y="3" width="18" height="18" rx="2"></rect>
		<path d="M9 3v18"></path>
	</svg>
{/snippet}

{#snippet mark_bars()}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M7 3v7M12 3v13M17 3v7"></path>
	</svg>
{/snippet}

{#snippet mark_wave()}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M3 12h2l2-7 4 14 3-7h5"></path>
	</svg>
{/snippet}

{#snippet mark_grid()}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<rect x="4" y="4" width="7" height="7" rx="1"></rect>
		<rect x="13" y="4" width="7" height="7" rx="1"></rect>
		<rect x="4" y="13" width="7" height="7" rx="1"></rect>
		<rect x="13" y="13" width="7" height="7" rx="1"></rect>
	</svg>
{/snippet}

{#snippet team_mark(which)}
	{#if which === 0}
		{@render mark_bars()}
	{:else if which === 1}
		{@render mark_wave()}
	{:else}
		{@render mark_grid()}
	{/if}
{/snippet}

{#snippet demo_aside(prefix, folded)}
	<div class="sidebar-header">
		<button
			class="sidebar-link"
			type="button"
			popovertarget={prefix + '-team'}
			aria-haspopup="menu"
			aria-expanded="false"
			aria-label={folded ? teams[team].name : undefined}
			data-tip={teams[team].name}
			onclick={hide_rail}
			onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
			onmouseleave={(event) => rail_leave(event)}
			onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
			onblur={(event) => rail_leave(event, 0)}
			onkeydown={(event) => hide_on_escape(event, rail_tip)}
		>
			<span class="login-mark" aria-hidden="true">
				{@render team_mark(team)}
			</span>
			<span class="stack" style="--stack-gap: 0; min-width: 0; flex: 1">
				<span style="font-weight: 500">{teams[team].name}</span>
				<span style="font-size: var(--text-xs); color: var(--muted-foreground)">{teams[team].plan}</span>
			</span>
			{@render chevrons()}
		</button>
		<div
			id={prefix + '-team'}
			popover
			class="menu"
			role="menu"
			tabindex="-1"
			data-side="end"
			data-align="start"
			style="min-width: 14rem"
			ontoggle={on_menu_toggle}
			onkeydown={menu_keydown}
		>
			<div class="menu-label">Teams</div>
			{#each teams as item, i}
				<button class="menu-item" type="button" role="menuitem" onclick={(event) => pick_team(event, i)}>
					<span class="login-mark" aria-hidden="true">{@render team_mark(i)}</span>
					{item.name}
					<span class="menu-shortcut">⌘{i + 1}</span>
				</button>
			{/each}
			<hr class="menu-sep">
			<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M12 5v14M5 12h14"></path>
				</svg>
				Add team
			</button>
		</div>
	</div>
	<div class="sidebar-content">
		<input class="input" type="search" placeholder="Search…" aria-label="Search" autocomplete="off">
		<div class="sidebar-group">
			<div class="sidebar-label">Platform</div>
			<nav class="sidebar-menu" aria-label="Platform">
				<details open>
					<summary
						class="sidebar-link"
						aria-label={folded ? 'Playground' : undefined}
						data-tip="Playground"
						onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
						onmouseleave={(event) => rail_leave(event)}
						onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
						onblur={(event) => rail_leave(event, 0)}
						onkeydown={(event) => hide_on_escape(event, rail_tip)}
					>
						{@render icon_term()}
						<span>Playground</span>
						{@render chevron()}
					</summary>
					<div class="sidebar-sub">
						<a class="sidebar-link" href="/components/sidebar">History</a>
						<a class="sidebar-link" href="/components/sidebar">Starred</a>
					</div>
				</details>
				<a
					class="sidebar-link"
					href="/components/sidebar"
					data-active
					aria-label={folded ? 'Dashboard' : undefined}
					data-tip="Dashboard"
					onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
					onmouseleave={(event) => rail_leave(event)}
					onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
					onblur={(event) => rail_leave(event, 0)}
					onkeydown={(event) => hide_on_escape(event, rail_tip)}
				>
					{@render icon_grid()}
					<span>Dashboard</span>
					<span class="badge badge-secondary">8</span>
				</a>
				<a
					class="sidebar-link"
					href="/components/sidebar"
					aria-label={folded ? 'Projects' : undefined}
					data-tip="Projects"
					onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
					onmouseleave={(event) => rail_leave(event)}
					onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
					onblur={(event) => rail_leave(event, 0)}
					onkeydown={(event) => hide_on_escape(event, rail_tip)}
				>
					{@render icon_list()}
					<span>Projects</span>
				</a>
			</nav>
		</div>
	</div>
	<div class="sidebar-footer">
		<button
			class="sidebar-link"
			type="button"
			popovertarget={prefix + '-user'}
			aria-haspopup="menu"
			aria-expanded="false"
			aria-label={folded ? 'Ada Lovelace' : undefined}
			data-tip="Ada Lovelace"
			onclick={hide_rail}
			onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
			onmouseleave={(event) => rail_leave(event)}
			onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
			onblur={(event) => rail_leave(event, 0)}
			onkeydown={(event) => hide_on_escape(event, rail_tip)}
		>
			<span class="avatar">AL</span>
			<span class="stack" style="--stack-gap: 0; min-width: 0; flex: 1">
				<span style="font-size: var(--text-sm); font-weight: 500">Ada Lovelace</span>
				<span style="font-size: var(--text-xs); color: var(--muted-foreground)">ada@acme.test</span>
			</span>
			{@render chevrons()}
		</button>
		<div
			id={prefix + '-user'}
			popover
			class="menu"
			role="menu"
			tabindex="-1"
			data-side="end"
			data-align="end"
			style="min-width: 14rem"
			ontoggle={on_menu_toggle}
			onkeydown={menu_keydown}
		>
			<div class="cluster" style="--cluster-gap: 0.5rem; padding: 0.375rem 0.5rem">
				<span class="avatar">AL</span>
				<span class="stack" style="--stack-gap: 0; min-width: 0">
					<span style="font-size: var(--text-sm); font-weight: 500">Ada Lovelace</span>
					<span style="font-size: var(--text-xs); color: var(--muted-foreground)">ada@acme.test</span>
				</span>
			</div>
			<hr class="menu-sep">
			<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Account</button>
			<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>Billing</button>
			<hr class="menu-sep">
			<button class="menu-item" type="button" role="menuitem" data-variant="destructive" onclick={choose_item}>Log out</button>
		</div>
	</div>
{/snippet}

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Sidebar</h1>
			<p>
				App shell: <code>.shell</code>, <code>.sidebar</code>,
				<code>.shell-main</code>, <code>.topbar</code>, <code>.shell-body</code>.
				Always open on desktop. <code>data-collapsed</code> on
				<code>.shell</code> shrinks the rail to
				<code>--sidebar-width-icon</code> (icons stay, labels hide).
				That collapse is desktop only. Below 40rem,
				<code>data-open</code> on <code>.shell</code> slides the sidebar over a
				backdrop — icon-collapse does not apply. There is no wrapper.
				Header is a team <a href="/components/dropdown">dropdown</a>;
				footer is a user dropdown. Collapsed icon rows use a
				<a href="/components/tooltip">tooltip</a> via
				<a href="src/components/ui/Place.svelte"><code>Place.svelte</code></a>.
				Hover <code>…</code> row actions are omitted so collapsed tooltips
				keep the hover target. Mobile overlay:
				<a href="/blocks/dashboard">Dashboard</a>.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#default">Default</a></li>
					<li><a href="#collapsed">Collapsed</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="default">Default</h2>
			<div class="docs-preview">
				<div class="shell" data-collapsed={collapsed ? 'true' : undefined}>
					<aside class="sidebar" id="sidebar-demo">
						{@render demo_aside('sidebar-demo', collapsed)}
					</aside>
					<div class="shell-main">
						<header class="topbar">
							<button
								class="button button-ghost button-icon shell-fold"
								type="button"
								aria-pressed={collapsed}
								aria-controls="sidebar-demo"
								onclick={fold}
							>
								{@render icon_panel()}
								<span class="sr-only">{collapsed ? 'Expand sidebar' : 'Collapse sidebar'}</span>
							</button>
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li aria-current="page">Dashboard</li>
								</ol>
							</nav>
						</header>
						<div class="shell-body">
							<div class="skeleton" style="height: 6rem; width: 100%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="collapsed">Collapsed</h2>
			<div class="docs-preview">
				<div class="shell" data-collapsed="true">
					<aside class="sidebar" id="sidebar-demo-collapsed">
						{@render demo_aside('sidebar-rail', true)}
					</aside>
					<div class="shell-main">
						<header class="topbar">
							<button
								class="button button-ghost button-icon shell-fold"
								type="button"
								aria-pressed="true"
								aria-controls="sidebar-demo-collapsed"
							>
								{@render icon_panel()}
								<span class="sr-only">Expand sidebar</span>
							</button>
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li aria-current="page">Dashboard</li>
								</ol>
							</nav>
						</header>
						<div class="shell-body">
							<div class="skeleton" style="height: 6rem; width: 100%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>

<div id="sidebar-rail-tip" bind:this={rail_tip} popover="manual" class="tooltip" data-side="end" data-align="middle">{rail_label}</div>
