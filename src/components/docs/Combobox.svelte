<script>
	import { on_toggle } from '../ui/Place.svelte';

	const fruits = [
		'Apple',
		'Banana',
		'Blueberry',
		'Cherry',
		'Grapes',
		'Mango',
		'Orange',
		'Pineapple'
	];

	let field;
	let list;
	let query = $state('');
	let active = $state(0);
	let hover_ok = $state(false);

	const filtered = $derived(
		fruits.filter((item) => item.toLowerCase().includes(query.trim().toLowerCase()))
	);

	function slug(item) {
		return item.toLowerCase();
	}

	function open_list() {
		if (!list || list.matches(':popover-open'))
			return;
		try {
			list.showPopover({ source: field });
		}
		catch {
			list.showPopover();
		}
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

	function pick(item) {
		if (!item)
			return;
		query = item;
		active = 0;
		list?.hidePopover();
	}

	function on_key(event) {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			hover_ok = false;
			if (!list?.matches(':popover-open')) {
				open_list();
				active = 0;
			}
			else
				move(1);
		}
		else if (event.key === 'ArrowUp') {
			event.preventDefault();
			hover_ok = false;
			if (!list?.matches(':popover-open')) {
				open_list();
				active = filtered.length ? filtered.length - 1 : 0;
			}
			else
				move(-1);
		}
		else if (event.key === 'Enter') {
			event.preventDefault();
			if (list?.matches(':popover-open'))
				pick(filtered[active]);
		}
		else if (event.key === 'Escape')
			list?.hidePopover();
	}

	function hover(i) {
		if (!hover_ok)
			return;
		active = i;
	}

	const html = `<div class="field">
	<label class="label" for="fruit">Fruit</label>
	<input class="input" id="fruit" type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="fruit-list" aria-haspopup="listbox" popovertarget="fruit-list" placeholder="Search fruit…" autocomplete="off">
</div>
<div id="fruit-list" popover class="menu" role="listbox" tabindex="-1" data-side="bottom" data-align="start" data-match="anchor">
	<button class="menu-item select-option" type="button" role="option" tabindex="-1">
		<span class="menu-check"></span> Apple
	</button>
	<button class="menu-item select-option" type="button" role="option" tabindex="-1">
		<span class="menu-check"></span> Banana
	</button>
</div>`;

	const imported = `<script>
	import { on_toggle } from './ui/Place.svelte';
	const fruits = [ 'Apple', 'Banana', 'Blueberry', 'Cherry', 'Grapes', 'Mango', 'Orange', 'Pineapple' ];
	let field;
	let list;
	let query = $state('');
	let active = $state(0);
	let hover_ok = $state(false);
	const filtered = $derived(fruits.filter((item) => item.toLowerCase().includes(query.trim().toLowerCase())));

	function open_list() {
		if (!list || list.matches(':popover-open')) return;
		try { list.showPopover({ source: field }); }
		catch { list.showPopover(); }
	}
	function move(delta) {
		if (!filtered.length) return;
		const next = active + delta;
		if (next < 0) active = filtered.length - 1;
		else if (next >= filtered.length) active = 0;
		else active = next;
	}
	function pick(item) {
		if (!item) return;
		query = item;
		active = 0;
		list?.hidePopover();
	}
	function on_key(event) {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			hover_ok = false;
			if (!list?.matches(':popover-open')) { open_list(); active = 0; }
			else move(1);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			hover_ok = false;
			if (!list?.matches(':popover-open')) { open_list(); active = filtered.length ? filtered.length - 1 : 0; }
			else move(-1);
		} else if (event.key === 'Enter') {
			event.preventDefault();
			if (list?.matches(':popover-open')) pick(filtered[active]);
		} else if (event.key === 'Escape') list?.hidePopover();
	}
	function hover(i) {
		if (!hover_ok) return;
		active = i;
	}
<\/script>

<div class="field">
	<label class="label" for="fruit">Fruit</label>
	<input class="input" id="fruit" type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="fruit-list" aria-haspopup="listbox" aria-activedescendant={filtered[active] ? 'fruit-opt-' + filtered[active].toLowerCase() : undefined} popovertarget="fruit-list" placeholder="Search fruit…" autocomplete="off" bind:this={field} bind:value={query} onfocus={open_list} onclick={open_list} oninput={() => { active = 0; open_list(); }} onkeydown={on_key}>
</div>
<div id="fruit-list" popover class="menu" role="listbox" tabindex="-1" data-side="bottom" data-align="start" data-match="anchor" bind:this={list} ontoggle={on_toggle} onpointermove={() => hover_ok = true}>
	{#each filtered as item, i}
		<button class="menu-item select-option" type="button" role="option" tabindex="-1" id={'fruit-opt-' + item.toLowerCase()} aria-selected={query === item} data-active={i === active ? '' : undefined} onmousedown={(event) => event.preventDefault()} onpointerenter={() => hover(i)} onclick={() => pick(item)}>
			<span class="menu-check"></span>
			{item}
		</button>
	{/each}
	{#if query.trim() && !filtered.length}
		<p class="menu-empty">No matches</p>
	{/if}
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Combobox</h1>
			<p>
				A labeled <code>&lt;input class="input"&gt;</code> plus a
				<code>.menu</code> listbox popover. There is no wrapper and no
				combobox package. Native <code>popovertarget</code> is for
				buttons (see <a href="/components/date-picker">Date picker</a>),
				so this page opens the list with <code>showPopover()</code> on
				focus, click, and input, and closes with <code>hidePopover()</code> on
				pick. Escape and light-dismiss are native popover.
				Filter is a simple includes match on a static fruit list; an
				empty query shows every sample. “No matches” appears when the
				query hits nothing. Arrow keys move <code>data-active</code>;
				Enter picks and closes.
				Paste the markup first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				(see <a href="/components/popover">Popover</a>)
				and call <code>on_toggle</code> so the list sits under the field.
				<code>data-match="anchor"</code> matches the field width.
				The list reuses <a href="/components/select">Select</a>’s
				<code>.menu-item</code> / <code>.select-option</code> markup.
				We use <code>on_toggle</code>, not <code>on_menu_toggle</code>,
				so the caret stays in the field. Tiny <code>$state</code> on
				this page is enough.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#preview">Preview</a></li>
					<li><a href="#markup">Markup</a></li>
					<li><a href="#imported">Imported</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="preview">Preview</h2>
			<div class="docs-preview">
				<div class="field" style="max-width: 20rem">
					<label class="label" for="combo-fruit-demo">Fruit</label>
					<input
						class="input"
						id="combo-fruit-demo"
						type="text"
						role="combobox"
						aria-autocomplete="list"
						aria-expanded="false"
						aria-controls="combo-list-demo"
						aria-haspopup="listbox"
						aria-activedescendant={filtered[active] ? 'combo-opt-demo-' + slug(filtered[active]) : undefined}
						popovertarget="combo-list-demo"
						placeholder="Search fruit…"
						autocomplete="off"
						bind:this={field}
						bind:value={query}
						onfocus={open_list}
						onclick={open_list}
						oninput={() => { active = 0; open_list(); }}
						onkeydown={on_key}
					>
				</div>
				<div
					id="combo-list-demo"
					popover
					class="menu"
					role="listbox"
					tabindex="-1"
					aria-labelledby="combo-fruit-demo"
					data-side="bottom"
					data-align="start"
					data-match="anchor"
					bind:this={list}
					ontoggle={on_toggle}
					onpointermove={() => hover_ok = true}
				>
					{#each filtered as item, i}
						<button
							class="menu-item select-option"
							type="button"
							role="option"
							tabindex="-1"
							id={'combo-opt-demo-' + slug(item)}
							aria-selected={query === item}
							data-active={i === active ? '' : undefined}
							onmousedown={(event) => event.preventDefault()}
							onpointerenter={() => hover(i)}
							onclick={() => pick(item)}
						>
							<span class="menu-check"></span>
							{item}
						</button>
					{/each}
					{#if query.trim() && !filtered.length}
						<p class="menu-empty">No matches</p>
					{/if}
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="markup">Markup</h2>
			<pre class="docs-code"><code>{html}</code></pre>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="imported">Imported</h2>
			<pre class="docs-code"><code>{imported}</code></pre>
		</div>
	</div>
</div>
