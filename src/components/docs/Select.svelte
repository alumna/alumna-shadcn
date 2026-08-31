<script>
	import { on_menu_toggle, menu_keydown } from '../ui/Place.svelte';

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'blueberry', label: 'Blueberry' },
		{ value: 'grapes', label: 'Grapes', disabled: true },
		{ value: 'pineapple', label: 'Pineapple' }
	];

	let value = $state('');
	const label = $derived(fruits.find((item) => item.value === value)?.label ?? 'Select a fruit');

	function pick(event, next) {
		if (event.currentTarget.getAttribute('aria-disabled') === 'true')
			return;
		value = next;
		event.currentTarget.closest('[popover]')?.hidePopover();
	}

	const native = `<div class="field">
	<label class="label" for="fruit">Fruit</label>
	<select class="select" id="fruit">
		<option value="">Select</option>
		<option>Apple</option>
		<option>Banana</option>
		<option>Orange</option>
	</select>
</div>`;

	const html = `<button class="select-trigger" type="button" popovertarget="fruit-list" aria-haspopup="listbox" aria-expanded="false" data-placeholder="">Select a fruit</button>
<div id="fruit-list" popover class="menu" role="listbox" tabindex="-1" data-match="anchor">
	<button class="menu-item select-option" type="button" role="option" aria-selected="false">
		<span class="menu-check"></span> Apple
	</button>
	<button class="menu-item select-option" type="button" role="option" aria-selected="false">
		<span class="menu-check"></span> Banana
	</button>
</div>`;

	const imported = `<script>
	import { on_menu_toggle, menu_keydown } from './ui/Place.svelte';
	let value = $state('');
	const label = $derived(value || 'Select a fruit');

	function pick(event, next) {
		if (event.currentTarget.getAttribute('aria-disabled') === 'true')
			return;
		value = next;
		event.currentTarget.closest('[popover]')?.hidePopover();
	}
<\/script>

<button
	class="select-trigger"
	type="button"
	popovertarget="fruit-list"
	aria-haspopup="listbox"
	aria-expanded="false"
	data-placeholder={value ? undefined : ''}
>{label}</button>
<div id="fruit-list" popover class="menu" role="listbox" tabindex="-1" data-match="anchor" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
	<button class="menu-item select-option" type="button" role="option" aria-selected={value === 'apple'} onclick={(event) => pick(event, 'apple')}>
		<span class="menu-check"></span> Apple
	</button>
	<button class="menu-item select-option" type="button" role="option" aria-selected={value === 'banana'} onclick={(event) => pick(event, 'banana')}>
		<span class="menu-check"></span> Banana
	</button>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Select</h1>
			<p>
				Native <code>&lt;select class="select"&gt;</code> is the default.
				There is no wrapper. When you need a styled listbox, paste the markup
				first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				(see <a href="/components/popover">Popover</a>)
				and use <code>.select-trigger</code> plus a <code>.menu</code> popover
				(<code>data-match="anchor"</code> matches the trigger width).
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#native">Native</a></li>
					<li><a href="#custom-listbox">Custom listbox</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="native">Native</h2>
			<div class="docs-preview">
				<div class="field" style="max-width: 20rem">
					<label class="label" for="fruit-demo">Fruit</label>
					<select class="select" id="fruit-demo">
						<option value="">Select</option>
						<option>Apple</option>
						<option>Banana</option>
						<option>Orange</option>
					</select>
				</div>
			</div>
			<pre class="docs-code"><code>{native}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="custom-listbox">Custom listbox</h2>
			<div class="docs-preview">
				<button
					id="fruit-trigger"
					class="select-trigger"
					type="button"
					popovertarget="fruit-list"
					aria-haspopup="listbox"
					aria-expanded="false"
					aria-controls="fruit-list"
					data-placeholder={value ? undefined : ''}
				>{label}</button>
				<div
					id="fruit-list"
					popover
					class="menu"
					role="listbox"
					tabindex="-1"
					aria-labelledby="fruit-trigger"
					data-side="bottom"
					data-align="start"
					data-match="anchor"
					ontoggle={on_menu_toggle}
					onkeydown={menu_keydown}
				>
					<div class="menu-label">Fruits</div>
					{#each fruits as fruit}
						<button
							class="menu-item select-option"
							type="button"
							role="option"
							aria-selected={value === fruit.value}
							aria-disabled={fruit.disabled ? 'true' : undefined}
							onclick={(event) => pick(event, fruit.value)}
						>
							<span class="menu-check"></span>
							{fruit.label}
						</button>
					{/each}
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
