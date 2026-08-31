<script>
	function mark(inner) {
		return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
	}

	const glyphs = {
		search: mark('<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3-3"></path>'),
		calendar: mark('<rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path>'),
		smile: mark('<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01M15 9h.01"></path>'),
		calculator: mark('<rect width="16" height="20" x="4" y="2" rx="2"></rect><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path>'),
		user: mark('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'),
		card: mark('<rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path>'),
		gear: mark('<circle cx="12" cy="12" r="3"></circle><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>')
	};

	const samples = [
		{ label: 'Calendar', group: 'Suggestions', icon: 'calendar' },
		{ label: 'Search emoji', group: 'Suggestions', icon: 'smile' },
		{ label: 'Calculator', group: 'Suggestions', icon: 'calculator' },
		{ label: 'Profile', group: 'Settings', icon: 'user', shortcut: 'P' },
		{ label: 'Billing', group: 'Settings', icon: 'card', shortcut: 'B' },
		{ label: 'Settings', group: 'Settings', icon: 'gear', shortcut: 'S' }
	];

	let dialog;
	let query = $state('');
	let active = $state(0);
	let ran = $state('');
	let hover_ok = $state(false);

	const filtered = $derived(
		samples.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()))
	);

	function group_items(list) {
		const out = [];
		let index = 0;
		for (const item of list) {
			const title = item.group || '';
			const last = out[out.length - 1];
			if (!last || last.title !== title)
				out.push({ title, items: [] });
			out[out.length - 1].items.push({ item, index });
			index += 1;
		}
		return out;
	}

	const groups = $derived(group_items(filtered));

	function open() {
		query = '';
		active = 0;
		hover_ok = false;
		dialog.showModal();
	}

	function on_backdrop(event) {
		if (event.target === dialog)
			dialog.close();
	}

	function move(delta) {
		if (!filtered.length)
			return;
		const next = active + delta;
		if (next < 0)
			active = filtered.length - 1;
		else if (next >= filtered.length)
			active = 0;
		else
			active = next;
	}

	function run(item) {
		if (!item)
			return;
		ran = item.label;
		dialog.close();
	}

	function on_key(event) {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			hover_ok = false;
			move(1);
		}
		else if (event.key === 'ArrowUp') {
			event.preventDefault();
			hover_ok = false;
			move(-1);
		}
		else if (event.key === 'Enter') {
			event.preventDefault();
			run(filtered[active]);
		}
		else if (event.isComposing || event.repeat || event.altKey)
			return;
		else if ((event.metaKey || event.ctrlKey) && event.key.length === 1) {
			const letter = event.key.toUpperCase();
			const hit = filtered.find((item) => item.shortcut === letter);
			if (!hit)
				return;
			event.preventDefault();
			run(hit);
		}
	}

	function hover(i) {
		if (!hover_ok)
			return;
		active = i;
	}

	$effect(() => {
		void active;
		if (!dialog?.open)
			return;
		dialog.querySelector('.command-item[data-active]')?.scrollIntoView({ block: 'nearest' });
	});

	const snippet = `<script>
	function mark(inner) {
		return \`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\${inner}</svg>\`;
	}
	const glyphs = {
		search: mark('<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3-3"></path>'),
		calendar: mark('<rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path>'),
		smile: mark('<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01M15 9h.01"></path>'),
		calculator: mark('<rect width="16" height="20" x="4" y="2" rx="2"></rect><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path>'),
		user: mark('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'),
		card: mark('<rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path>'),
		gear: mark('<circle cx="12" cy="12" r="3"></circle><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>')
	};
	const samples = [
		{ label: 'Calendar', group: 'Suggestions', icon: 'calendar' },
		{ label: 'Search emoji', group: 'Suggestions', icon: 'smile' },
		{ label: 'Calculator', group: 'Suggestions', icon: 'calculator' },
		{ label: 'Profile', group: 'Settings', icon: 'user', shortcut: 'P' },
		{ label: 'Billing', group: 'Settings', icon: 'card', shortcut: 'B' },
		{ label: 'Settings', group: 'Settings', icon: 'gear', shortcut: 'S' }
	];
	let dialog;
	let query = $state('');
	let active = $state(0);
	let ran = $state('');
	let hover_ok = $state(false);
	const filtered = $derived(samples.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase())));

	function group_items(list) {
		const out = [];
		let index = 0;
		for (const item of list) {
			const title = item.group || '';
			const last = out[out.length - 1];
			if (!last || last.title !== title) out.push({ title, items: [] });
			out[out.length - 1].items.push({ item, index });
			index += 1;
		}
		return out;
	}
	const groups = $derived(group_items(filtered));

	function open() {
		query = '';
		active = 0;
		hover_ok = false;
		dialog.showModal();
	}
	function on_backdrop(event) {
		if (event.target === dialog) dialog.close();
	}
	function move(delta) {
		if (!filtered.length) return;
		const next = active + delta;
		if (next < 0) active = filtered.length - 1;
		else if (next >= filtered.length) active = 0;
		else active = next;
	}
	function run(item) {
		if (!item) return;
		ran = item.label;
		dialog.close();
	}
	function on_key(event) {
		if (event.key === 'ArrowDown') { event.preventDefault(); hover_ok = false; move(1); }
		else if (event.key === 'ArrowUp') { event.preventDefault(); hover_ok = false; move(-1); }
		else if (event.key === 'Enter') { event.preventDefault(); run(filtered[active]); }
		else if (event.isComposing || event.repeat || event.altKey) return;
		else if ((event.metaKey || event.ctrlKey) && event.key.length === 1) {
			const hit = filtered.find((item) => item.shortcut === event.key.toUpperCase());
			if (!hit) return;
			event.preventDefault();
			run(hit);
		}
	}
	function hover(i) {
		if (!hover_ok) return;
		active = i;
	}
<\/script>

<button class="button" type="button" onclick={open}>Open command</button>
<p class="field-description">{ran ? \`Ran \${ran}.\` : 'No command yet.'}</p>

<dialog class="command" bind:this={dialog} aria-labelledby="command-title" onclick={on_backdrop} onkeydown={on_key}>
	<div class="sr-only" id="command-title">Command palette</div>
	<label class="sr-only" for="command-q">Search commands</label>
	<div class="command-search">
		{@html glyphs.search}
		<input class="input" id="command-q" type="text" placeholder="Type a command…" autocomplete="off" bind:value={query} oninput={() => active = 0}>
	</div>
	<div class="command-list" role="listbox" tabindex="-1" onpointermove={() => hover_ok = true}>
		{#each groups as group, gi}
			{#if gi > 0}
				<div class="command-separator" role="separator"></div>
			{/if}
			<div class="command-group" role="group" aria-label={group.title || undefined}>
				{#if group.title}
					<div class="command-group-title">{group.title}</div>
				{/if}
				{#each group.items as entry}
					<button class="command-item" type="button" role="option" tabindex="-1" aria-selected={entry.index === active} data-active={entry.index === active ? '' : undefined} onpointerenter={() => hover(entry.index)} onclick={() => run(entry.item)}>
						{#if entry.item.icon}{@html glyphs[entry.item.icon]}{/if}
						<span>{entry.item.label}</span>
						{#if entry.item.shortcut}<span class="kbd-group"><kbd class="kbd">⌘</kbd><kbd class="kbd">{entry.item.shortcut}</kbd></span>{/if}
					</button>
				{/each}
			</div>
		{/each}
		{#if query.trim() && !filtered.length}
			<p class="command-empty">No matches</p>
		{/if}
	</div>
</dialog>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Command</h1>
			<p>
				Native <code>&lt;dialog class="command"&gt;</code>. Open with
				<code>showModal()</code>, close with <code>close()</code>, Escape,
				or a click on the backdrop (<code>event.target === dialog</code>).
				Search sits in <code>.command-search</code>: muted fill, a 1px
				border, and a magnifying-glass SVG — not a naked
				<code>.input</code> with a full-width rule under it. Inner padding
				is <code>0.25rem</code>. Optional <code>.command-group</code> with
				a title; a <code>.command-separator</code> only between groups,
				inset from the edges. A row may start with an icon and end with
				a <code>.kbd-group</code> chord (Command or Ctrl plus a letter).
				While the dialog is open, that combo runs the row; a bare letter
				types into the filter. Shortcuts are optional — only these
				examples use them. Filter is a simple includes match on the row
				label; an empty query shows every sample. Arrow keys move
				<code>data-active</code> on a row; Enter runs it. There is no
				wrapper and no cmdk. Tiny <code>$state</code> on this page is
				enough.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#preview">Preview</a></li>
					<li><a href="#markup">Markup</a></li>
				</ol>
			</nav>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="preview">Preview</h2>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<button class="button" type="button" onclick={open}>Open command</button>
					<p class="field-description">{ran ? `Ran ${ran}.` : 'No command yet.'}</p>
				</div>
				<dialog class="command" bind:this={dialog} aria-labelledby="command-title-demo" onclick={on_backdrop} onkeydown={on_key}>
					<div class="sr-only" id="command-title-demo">Command palette</div>
					<label class="sr-only" for="command-q-demo">Search commands</label>
					<div class="command-search">
						{@html glyphs.search}
						<input
							class="input"
							id="command-q-demo"
							type="text"
							placeholder="Type a command…"
							autocomplete="off"
							bind:value={query}
							oninput={() => active = 0}
						>
					</div>
					<div class="command-list" role="listbox" tabindex="-1" onpointermove={() => hover_ok = true}>
						{#each groups as group, gi}
							{#if gi > 0}
								<div class="command-separator" role="separator"></div>
							{/if}
							<div class="command-group" role="group" aria-label={group.title || undefined}>
								{#if group.title}
									<div class="command-group-title">{group.title}</div>
								{/if}
								{#each group.items as entry}
									<button
										class="command-item"
										type="button"
										role="option"
										tabindex="-1"
										aria-selected={entry.index === active}
										data-active={entry.index === active ? '' : undefined}
										onpointerenter={() => hover(entry.index)}
										onclick={() => run(entry.item)}
									>
										{#if entry.item.icon}
											{@html glyphs[entry.item.icon]}
										{/if}
										<span>{entry.item.label}</span>
										{#if entry.item.shortcut}
											<span class="kbd-group">
												<kbd class="kbd">⌘</kbd>
												<kbd class="kbd">{entry.item.shortcut}</kbd>
											</span>
										{/if}
									</button>
								{/each}
							</div>
						{/each}
						{#if query.trim() && !filtered.length}
							<p class="command-empty">No matches</p>
						{/if}
					</div>
				</dialog>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="markup">Markup</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
