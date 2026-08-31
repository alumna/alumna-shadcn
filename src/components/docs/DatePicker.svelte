<script>
	import { on_toggle } from '../ui/Place.svelte';

	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const WEEKDAYS = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];

	const now = new Date();
	let view = $state({ year: now.getFullYear(), month: now.getMonth() });
	let selected = $state(null);

	function month_label(year, month) {
		return `${MONTHS[month]} ${year}`;
	}

	function month_days(year, month) {
		const weekday = new Date(year, month, 1).getDay();
		const start = new Date(year, month, 1 - weekday);
		const days = [];
		for (let i = 0; i < 42; i++) {
			const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
			days.push({
				year: date.getFullYear(),
				month: date.getMonth(),
				day: date.getDate(),
				outside: date.getMonth() !== month
			});
		}
		return days;
	}

	function is_today(cell) {
		const today = new Date();
		return cell.year === today.getFullYear() && cell.month === today.getMonth() && cell.day === today.getDate();
	}

	function is_selected(cell) {
		return selected && selected.year === cell.year && selected.month === cell.month && selected.day === cell.day;
	}

	function shift(delta) {
		const next = new Date(view.year, view.month + delta, 1);
		view = { year: next.getFullYear(), month: next.getMonth() };
	}

	function field_label(value) {
		if (!value)
			return 'Pick a date';
		return `${value.day} ${MONTHS[value.month]} ${value.year}`;
	}

	function pick(cell) {
		selected = { year: cell.year, month: cell.month, day: cell.day };
		if (cell.outside)
			view = { year: cell.year, month: cell.month };
		document.getElementById('date-picker-cal')?.hidePopover();
	}

	const html = `<button class="button button-outline date-picker" type="button" popovertarget="when" aria-haspopup="dialog" aria-expanded="false" data-placeholder="">
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M8 2v4"></path>
		<path d="M16 2v4"></path>
		<rect width="18" height="18" x="3" y="4" rx="2"></rect>
		<path d="M3 10h18"></path>
	</svg>
	Pick a date
</button>
<div id="when" popover class="popover date-picker" data-side="bottom" data-align="start">
	<div class="calendar">
		<div class="calendar-caption">
			<button class="button button-outline button-icon button-sm calendar-prev" type="button" aria-label="Previous month"></button>
			<div class="calendar-heading">August 2026</div>
			<button class="button button-outline button-icon button-sm calendar-next" type="button" aria-label="Next month"></button>
		</div>
		<div class="calendar-grid">
			<div class="calendar-weekday">Su</div>
			<button class="calendar-day" type="button">15</button>
		</div>
	</div>
</div>`;

	const imported = `<script>
	import { on_toggle } from './ui/Place.svelte';
	const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
	const WEEKDAYS = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];
	const now = new Date();
	let view = $state({ year: now.getFullYear(), month: now.getMonth() });
	let selected = $state(null);

	function month_label(year, month) {
		return MONTHS[month] + ' ' + year;
	}
	function month_days(year, month) {
		const weekday = new Date(year, month, 1).getDay();
		const start = new Date(year, month, 1 - weekday);
		const days = [];
		for (let i = 0; i < 42; i++) {
			const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
			days.push({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate(), outside: date.getMonth() !== month });
		}
		return days;
	}
	function is_today(cell) {
		const today = new Date();
		return cell.year === today.getFullYear() && cell.month === today.getMonth() && cell.day === today.getDate();
	}
	function is_selected(cell) {
		return selected && selected.year === cell.year && selected.month === cell.month && selected.day === cell.day;
	}
	function shift(delta) {
		const next = new Date(view.year, view.month + delta, 1);
		view = { year: next.getFullYear(), month: next.getMonth() };
	}
	function field_label(value) {
		if (!value) return 'Pick a date';
		return value.day + ' ' + MONTHS[value.month] + ' ' + value.year;
	}
	function pick(cell) {
		selected = { year: cell.year, month: cell.month, day: cell.day };
		if (cell.outside) view = { year: cell.year, month: cell.month };
		document.getElementById('when')?.hidePopover();
	}
<\/script>

<button class="button button-outline date-picker" type="button" popovertarget="when" aria-haspopup="dialog" aria-expanded="false" data-placeholder={selected ? undefined : ''}>
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M8 2v4"></path>
		<path d="M16 2v4"></path>
		<rect width="18" height="18" x="3" y="4" rx="2"></rect>
		<path d="M3 10h18"></path>
	</svg>
	{field_label(selected)}
</button>
<div id="when" popover class="popover date-picker" data-side="bottom" data-align="start" ontoggle={on_toggle}>
	<div class="calendar">
		<div class="calendar-caption">
			<button class="button button-outline button-icon button-sm calendar-prev" type="button" aria-label="Previous month" onclick={() => shift(-1)}>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="m15 18-6-6 6-6"></path>
				</svg>
			</button>
			<div class="calendar-heading" aria-live="polite">{month_label(view.year, view.month)}</div>
			<button class="button button-outline button-icon button-sm calendar-next" type="button" aria-label="Next month" onclick={() => shift(1)}>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="m9 18 6-6-6-6"></path>
				</svg>
			</button>
		</div>
		<div class="calendar-grid">
			{#each WEEKDAYS as day}
				<div class="calendar-weekday">{day}</div>
			{/each}
			{#each month_days(view.year, view.month) as cell}
				<button class="calendar-day" type="button" data-outside={cell.outside ? '' : undefined} data-today={is_today(cell) ? '' : undefined} data-active={is_selected(cell) ? '' : undefined} onclick={() => pick(cell)}>{cell.day}</button>
			{/each}
		</div>
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Date picker</h1>
			<p>
				An outline button is the field. It opens a native
				<code>popover</code> that holds the
				<a href="/components/calendar">Calendar</a> month grid.
				Choosing a day writes an English date
				(<code>15 August 2026</code>) into the field and calls
				<code>hidePopover()</code>.
				Escape and light-dismiss are native popover — there is no
				second overlay.
				Paste the markup first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				and call <code>on_toggle</code> so the panel sits next to the
				field (see <a href="/components/popover">Popover</a>).
				Native <code>Date</code> builds the cells; there is no date
				library. There is no wrapper. Tiny <code>$state</code> on
				this page is enough. Inert — no booking backend.
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
				<button
					class="button button-outline date-picker"
					type="button"
					popovertarget="date-picker-cal"
					aria-haspopup="dialog"
					aria-expanded="false"
					aria-controls="date-picker-cal"
					data-placeholder={selected ? undefined : ''}
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path d="M8 2v4"></path>
						<path d="M16 2v4"></path>
						<rect width="18" height="18" x="3" y="4" rx="2"></rect>
						<path d="M3 10h18"></path>
					</svg>
					{field_label(selected)}
				</button>
				<div
					id="date-picker-cal"
					popover
					class="popover date-picker"
					data-side="bottom"
					data-align="start"
					ontoggle={on_toggle}
				>
					<div class="calendar">
						<div class="calendar-caption">
							<button
								class="button button-outline button-icon button-sm calendar-prev"
								type="button"
								aria-label="Previous month"
								onclick={() => shift(-1)}
							>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path d="m15 18-6-6 6-6"></path>
								</svg>
							</button>
							<div class="calendar-heading" aria-live="polite">{month_label(view.year, view.month)}</div>
							<button
								class="button button-outline button-icon button-sm calendar-next"
								type="button"
								aria-label="Next month"
								onclick={() => shift(1)}
							>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</button>
						</div>
						<div class="calendar-grid">
							{#each WEEKDAYS as day}
								<div class="calendar-weekday">{day}</div>
							{/each}
							{#each month_days(view.year, view.month) as cell}
								<button
									class="calendar-day"
									type="button"
									data-outside={cell.outside ? '' : undefined}
									data-today={is_today(cell) ? '' : undefined}
									data-active={is_selected(cell) ? '' : undefined}
									aria-current={is_today(cell) ? 'date' : undefined}
									onclick={() => pick(cell)}
								>{cell.day}</button>
							{/each}
						</div>
					</div>
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
