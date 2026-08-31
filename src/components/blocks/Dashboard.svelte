<script>
	// Keep in sync with the Full tab string in src/components/docs/Dashboard.svelte. Alumna cannot import this file as text.
	import { on_menu_toggle, menu_keydown, choose_item, tip_enter, tip_leave, hide_on_escape } from '../ui/Place.svelte';

	let open = $state(false);
	let collapsed = $state(false);
	let team = $state(0);
	let rail_tip;
	let rail_label = $state('');

	const teams = [
		{ name: 'Acme Inc.', plan: 'Enterprise' },
		{ name: 'Acme Corp.', plan: 'Startup' },
		{ name: 'Acme Ltd.', plan: 'Free' },
	];

	function toggle() {
		open = !open;
	}

	function fold() {
		collapsed = !collapsed;
	}

	function close() {
		open = false;
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
</script>

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

{#snippet chevrons()}
	<svg class="sidebar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="m7 15 5 5 5-5"></path>
		<path d="m7 9 5-5 5 5"></path>
	</svg>
{/snippet}

<style>
    :global(.docs-main > .box):has(.shell) {
        max-width: 90rem;
    }
</style>

<div class="shell" data-open={open ? 'true' : undefined} data-collapsed={collapsed ? 'true' : undefined}>
	<button class="shell-backdrop" type="button" tabindex="-1" onclick={close} aria-label="Close menu"></button>

	<aside class="sidebar" id="dash-sidebar">
		<div class="sidebar-header">
			<button
				class="sidebar-link"
				type="button"
				popovertarget="dash-team"
				aria-haspopup="menu"
				aria-expanded="false"
				aria-label={collapsed ? teams[team].name : undefined}
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
				id="dash-team"
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
							aria-label={collapsed ? 'Playground' : undefined}
							data-tip="Playground"
							onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
							onmouseleave={(event) => rail_leave(event)}
							onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
							onblur={(event) => rail_leave(event, 0)}
							onkeydown={(event) => hide_on_escape(event, rail_tip)}
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<polyline points="4 17 10 11 4 5"></polyline>
								<line x1="12" x2="20" y1="19" y2="19"></line>
							</svg>
							<span>Playground</span>
							<svg class="sidebar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path d="m9 6 6 6-6 6"></path>
							</svg>
						</summary>
						<div class="sidebar-sub">
							<a class="sidebar-link" href="/blocks/dashboard">History</a>
							<a class="sidebar-link" href="/blocks/dashboard">Starred</a>
							<a class="sidebar-link" href="/blocks/dashboard">Settings</a>
						</div>
					</details>
					<a
						class="sidebar-link"
						href="/blocks/dashboard"
						data-active
						aria-label={collapsed ? 'Dashboard' : undefined}
						data-tip="Dashboard"
						onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
						onmouseleave={(event) => rail_leave(event)}
						onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
						onblur={(event) => rail_leave(event, 0)}
						onkeydown={(event) => hide_on_escape(event, rail_tip)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<rect x="3" y="3" width="7" height="9" rx="1"></rect>
							<rect x="14" y="3" width="7" height="5" rx="1"></rect>
							<rect x="14" y="12" width="7" height="9" rx="1"></rect>
							<rect x="3" y="16" width="7" height="5" rx="1"></rect>
						</svg>
						<span>Dashboard</span>
					</a>
					<a
						class="sidebar-link"
						href="/blocks/dashboard"
						aria-label={collapsed ? 'Projects' : undefined}
						data-tip="Projects"
						onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
						onmouseleave={(event) => rail_leave(event)}
						onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
						onblur={(event) => rail_leave(event, 0)}
						onkeydown={(event) => hide_on_escape(event, rail_tip)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M4 7h16M4 12h16M4 17h10"></path>
						</svg>
						<span>Projects</span>
						<span class="badge badge-secondary">8</span>
					</a>
					<a
						class="sidebar-link"
						href="/blocks/dashboard"
						aria-label={collapsed ? 'Team' : undefined}
						data-tip="Team"
						onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
						onmouseleave={(event) => rail_leave(event)}
						onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
						onblur={(event) => rail_leave(event, 0)}
						onkeydown={(event) => hide_on_escape(event, rail_tip)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<circle cx="12" cy="8" r="3"></circle>
							<path d="M5 20c1.5-4 4.5-6 7-6s5.5 2 7 6"></path>
						</svg>
						<span>Team</span>
					</a>
				</nav>
			</div>
			<div class="sidebar-group">
				<div class="sidebar-label">Account</div>
				<nav class="sidebar-menu" aria-label="Account">
					<a
						class="sidebar-link"
						href="/blocks/dashboard"
						aria-label={collapsed ? 'Settings' : undefined}
						data-tip="Settings"
						onmouseenter={(event) => rail_enter(event, event.currentTarget.dataset.tip)}
						onmouseleave={(event) => rail_leave(event)}
						onfocus={(event) => rail_enter(event, event.currentTarget.dataset.tip, 0)}
						onblur={(event) => rail_leave(event, 0)}
						onkeydown={(event) => hide_on_escape(event, rail_tip)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<circle cx="12" cy="12" r="3"></circle>
							<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
						</svg>
						<span>Settings</span>
					</a>
				</nav>
			</div>
		</div>
		<div class="sidebar-footer">
			<button
				class="sidebar-link"
				type="button"
				popovertarget="dash-user"
				aria-haspopup="menu"
				aria-expanded="false"
				aria-label={collapsed ? 'Ada Lovelace' : undefined}
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
				id="dash-user"
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
				<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<circle cx="12" cy="8" r="3"></circle>
						<path d="M5 20c1.5-4 4.5-6 7-6s5.5 2 7 6"></path>
					</svg>
					Account
				</button>
				<button class="menu-item" type="button" role="menuitem" onclick={choose_item}>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<rect x="3" y="6" width="18" height="12" rx="2"></rect>
						<path d="M3 10h18"></path>
					</svg>
					Billing
				</button>
				<hr class="menu-sep">
				<button class="menu-item" type="button" role="menuitem" data-variant="destructive" onclick={choose_item}>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
						<polyline points="16 17 21 12 16 7"></polyline>
						<line x1="21" x2="9" y1="12" y2="12"></line>
					</svg>
					Log out
				</button>
			</div>
		</div>
	</aside>

	<div class="shell-main">
		<header class="topbar">
			<button
				class="button button-ghost button-icon shell-fold"
				type="button"
				aria-pressed={collapsed}
				aria-controls="dash-sidebar"
				onclick={fold}
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<rect x="3" y="3" width="18" height="18" rx="2"></rect>
					<path d="M9 3v18"></path>
				</svg>
				<span class="sr-only">{collapsed ? 'Expand sidebar' : 'Collapse sidebar'}</span>
			</button>
			<button
				class="button button-ghost button-icon shell-menu"
				type="button"
				aria-expanded={open}
				aria-controls="dash-sidebar"
				onclick={toggle}
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M4 7h16M4 12h16M4 17h16"></path>
				</svg>
				<span class="sr-only">Open menu</span>
			</button>
			<hr class="separator separator-vertical" style="height: 1rem">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li><a href="/blocks/dashboard">Build Your Application</a></li>
					<li class="breadcrumb-sep" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="m9 6 6 6-6 6"></path>
						</svg>
					</li>
					<li aria-current="page">Dashboard</li>
				</ol>
			</nav>
		</header>

		<div class="shell-body">
			<div class="stack" style="--stack-gap: 1rem">
				<div class="section" style="--gap: 1rem">
					<div class="col col-1-3">
						<div class="card">
							<div class="card-header">
								<div class="card-description">Total Revenue</div>
								<div class="card-title" style="font-size: var(--text-2xl); font-weight: 600; font-variant-numeric: tabular-nums">$1,250.00</div>
								<div class="card-action"><span class="badge badge-outline">+12.5%</span></div>
							</div>
							<div class="card-footer" style="color: var(--muted-foreground)">Visitors for the last 6 months</div>
						</div>
					</div>
					<div class="col col-1-3">
						<div class="card">
							<div class="card-header">
								<div class="card-description">New Customers</div>
								<div class="card-title" style="font-size: var(--text-2xl); font-weight: 600; font-variant-numeric: tabular-nums">1,234</div>
								<div class="card-action"><span class="badge badge-outline">−20%</span></div>
							</div>
							<div class="card-footer" style="color: var(--muted-foreground)">Acquisition needs attention</div>
						</div>
					</div>
					<div class="col col-1-3">
						<div class="card">
							<div class="card-header">
								<div class="card-description">Active Accounts</div>
								<div class="card-title" style="font-size: var(--text-2xl); font-weight: 600; font-variant-numeric: tabular-nums">45,678</div>
								<div class="card-action"><span class="badge badge-outline">+12.5%</span></div>
							</div>
							<div class="card-footer" style="color: var(--muted-foreground)">Engagement exceed targets</div>
						</div>
					</div>
				</div>

				<div class="table-wrap">
					<table class="table">
						<caption>Recent invoices</caption>
						<thead>
							<tr>
								<th scope="col">Invoice</th>
								<th scope="col">Status</th>
								<th scope="col">Method</th>
								<th scope="col">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>INV-001</td>
								<td><span class="badge badge-secondary">Paid</span></td>
								<td>Card</td>
								<td>$250.00</td>
							</tr>
							<tr>
								<td>INV-002</td>
								<td><span class="badge badge-outline">Pending</span></td>
								<td>PayPal</td>
								<td>$150.00</td>
							</tr>
							<tr>
								<td>INV-003</td>
								<td><span class="badge badge-destructive">Overdue</span></td>
								<td>Bank</td>
								<td>$350.00</td>
							</tr>
							<tr>
								<td>INV-004</td>
								<td><span class="badge badge-secondary">Paid</span></td>
								<td>Card</td>
								<td>$450.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<div id="dash-rail-tip" bind:this={rail_tip} popover="manual" class="tooltip" data-side="end" data-align="middle">{rail_label}</div>
</div>
