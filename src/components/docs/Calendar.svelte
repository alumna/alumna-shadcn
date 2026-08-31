<script>
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
	let range_view = $state({ year: now.getFullYear(), month: now.getMonth() });
	let range_start = $state(null);
	let range_end = $state(null);
	let dual_view = $state({ year: now.getFullYear(), month: now.getMonth() });
	let dual_start = $state(null);
	let dual_end = $state(null);
	let range_hover = $state(null);
	let dual_hover = $state(null);

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

	function pick(cell) {
		selected = { year: cell.year, month: cell.month, day: cell.day };
		if (cell.outside)
			view = { year: cell.year, month: cell.month };
	}

	function selected_label(value) {
		if (!value)
			return 'No day selected.';
		return `Selected: ${value.day} ${MONTHS[value.month]} ${value.year}`;
	}

	function day_time(value) {
		return Date.UTC(value.year, value.month, value.day);
	}

	function same_day(a, b) {
		return a && b && a.year === b.year && a.month === b.month && a.day === b.day;
	}

	function is_in_range(cell, start, end) {
		if (!start || !end)
			return false;
		const time = day_time(cell);
		return time > day_time(start) && time < day_time(end);
	}

	function range_span(start, end, hover) {
		if (!start)
			return { start: null, end: null };
		if (end)
			return { start, end };
		if (!hover || same_day(hover, start))
			return { start, end: start };
		if (day_time(hover) < day_time(start))
			return { start: hover, end: start };
		return { start, end: hover };
	}

	function paints_in_range(cell, start, end, hover) {
		if (cell.outside)
			return false;
		const span = range_span(start, end, hover);
		return is_in_range(cell, span.start, span.end);
	}

	function paints_range_start(cell, start, end, hover) {
		if (cell.outside)
			return false;
		return same_day(range_span(start, end, hover).start, cell);
	}

	function paints_range_end(cell, start, end, hover) {
		if (cell.outside)
			return false;
		return same_day(range_span(start, end, hover).end, cell);
	}

	function as_day(cell) {
		return { year: cell.year, month: cell.month, day: cell.day };
	}

	function following_month(view) {
		const next = new Date(view.year, view.month + 1, 1);
		return { year: next.getFullYear(), month: next.getMonth() };
	}

	function range_shift(delta) {
		const next = new Date(range_view.year, range_view.month + delta, 1);
		range_view = { year: next.getFullYear(), month: next.getMonth() };
	}

	function pick_range(cell) {
		const day = as_day(cell);
		if (!range_start || range_end) {
			range_start = day;
			range_end = null;
			range_hover = day;
		} else if (day_time(day) < day_time(range_start)) {
			range_end = range_start;
			range_start = day;
			range_hover = null;
		} else {
			range_end = day;
			range_hover = null;
		}
		if (cell.outside)
			range_view = { year: cell.year, month: cell.month };
	}

	function preview_range(cell) {
		if (range_end || !range_start)
			return;
		range_hover = as_day(cell);
	}

	function leave_range() {
		range_hover = null;
	}

	function range_label(start, end) {
		if (!start)
			return 'No range selected.';
		if (!end)
			return `Start: ${start.day} ${MONTHS[start.month]} ${start.year}. Pick an end day.`;
		return `Selected: ${start.day} ${MONTHS[start.month]} ${start.year} – ${end.day} ${MONTHS[end.month]} ${end.year}`;
	}

	function dual_shift(delta) {
		const next = new Date(dual_view.year, dual_view.month + delta, 1);
		dual_view = { year: next.getFullYear(), month: next.getMonth() };
	}

	function pick_dual(cell) {
		const day = as_day(cell);
		if (!dual_start || dual_end) {
			dual_start = day;
			dual_end = null;
			dual_hover = day;
		} else if (day_time(day) < day_time(dual_start)) {
			dual_end = dual_start;
			dual_start = day;
			dual_hover = null;
		} else {
			dual_end = day;
			dual_hover = null;
		}
		dual_view = { year: dual_start.year, month: dual_start.month };
	}

	function preview_dual(cell) {
		if (dual_end || !dual_start)
			return;
		dual_hover = as_day(cell);
	}

	function leave_dual() {
		dual_hover = null;
	}

	const grid = `<script>
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
	function pick(cell) {
		selected = { year: cell.year, month: cell.month, day: cell.day };
		if (cell.outside) view = { year: cell.year, month: cell.month };
	}
<\/script>

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
</div>`;

	const range = `<script>
	const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
	const WEEKDAYS = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];
	const now = new Date();
	let view = $state({ year: now.getFullYear(), month: now.getMonth() });
	let range_start = $state(null);
	let range_end = $state(null);
	let range_hover = $state(null);

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
	function day_time(value) {
		return Date.UTC(value.year, value.month, value.day);
	}
	function same_day(a, b) {
		return a && b && a.year === b.year && a.month === b.month && a.day === b.day;
	}
	function range_span(start, end, hover) {
		if (!start) return { start: null, end: null };
		if (end) return { start, end };
		if (!hover || same_day(hover, start)) return { start, end: start };
		if (day_time(hover) < day_time(start)) return { start: hover, end: start };
		return { start, end: hover };
	}
	function paints_in_range(cell, start, end, hover) {
		if (cell.outside) return false;
		const span = range_span(start, end, hover);
		if (!span.start || !span.end) return false;
		const time = day_time(cell);
		return time > day_time(span.start) && time < day_time(span.end);
	}
	function paints_range_start(cell, start, end, hover) {
		if (cell.outside) return false;
		return same_day(range_span(start, end, hover).start, cell);
	}
	function paints_range_end(cell, start, end, hover) {
		if (cell.outside) return false;
		return same_day(range_span(start, end, hover).end, cell);
	}
	function shift(delta) {
		const next = new Date(view.year, view.month + delta, 1);
		view = { year: next.getFullYear(), month: next.getMonth() };
	}
	function pick_range(cell) {
		const day = { year: cell.year, month: cell.month, day: cell.day };
		if (!range_start || range_end) {
			range_start = day;
			range_end = null;
			range_hover = day;
		} else if (day_time(day) < day_time(range_start)) {
			range_end = range_start;
			range_start = day;
			range_hover = null;
		} else {
			range_end = day;
			range_hover = null;
		}
		if (cell.outside) view = { year: cell.year, month: cell.month };
	}
	function preview_range(cell) {
		if (range_end || !range_start) return;
		range_hover = { year: cell.year, month: cell.month, day: cell.day };
	}
<\/script>

<div class="calendar" onmouseleave={() => range_hover = null}>
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
			<button class="calendar-day" type="button" data-outside={cell.outside ? '' : undefined} data-range={paints_in_range(cell, range_start, range_end, range_hover) ? '' : undefined} data-range-start={paints_range_start(cell, range_start, range_end, range_hover) ? '' : undefined} data-range-end={paints_range_end(cell, range_start, range_end, range_hover) ? '' : undefined} onmouseenter={() => preview_range(cell)} onclick={() => pick_range(cell)}>{cell.day}</button>
		{/each}
	</div>
</div>`;

	const range_dual = `<script>
	const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
	const WEEKDAYS = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];
	const now = new Date();
	let view = $state({ year: now.getFullYear(), month: now.getMonth() });
	let range_start = $state(null);
	let range_end = $state(null);
	let range_hover = $state(null);

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
	function following_month(view) {
		const next = new Date(view.year, view.month + 1, 1);
		return { year: next.getFullYear(), month: next.getMonth() };
	}
	function day_time(value) {
		return Date.UTC(value.year, value.month, value.day);
	}
	function same_day(a, b) {
		return a && b && a.year === b.year && a.month === b.month && a.day === b.day;
	}
	function range_span(start, end, hover) {
		if (!start) return { start: null, end: null };
		if (end) return { start, end };
		if (!hover || same_day(hover, start)) return { start, end: start };
		if (day_time(hover) < day_time(start)) return { start: hover, end: start };
		return { start, end: hover };
	}
	function paints_in_range(cell, start, end, hover) {
		if (cell.outside) return false;
		const span = range_span(start, end, hover);
		if (!span.start || !span.end) return false;
		const time = day_time(cell);
		return time > day_time(span.start) && time < day_time(span.end);
	}
	function paints_range_start(cell, start, end, hover) {
		if (cell.outside) return false;
		return same_day(range_span(start, end, hover).start, cell);
	}
	function paints_range_end(cell, start, end, hover) {
		if (cell.outside) return false;
		return same_day(range_span(start, end, hover).end, cell);
	}
	function shift(delta) {
		const next = new Date(view.year, view.month + delta, 1);
		view = { year: next.getFullYear(), month: next.getMonth() };
	}
	function pick_range(cell) {
		if (cell.outside) return;
		const day = { year: cell.year, month: cell.month, day: cell.day };
		if (!range_start || range_end) {
			range_start = day;
			range_end = null;
			range_hover = day;
		} else if (day_time(day) < day_time(range_start)) {
			range_end = range_start;
			range_start = day;
			range_hover = null;
		} else {
			range_end = day;
			range_hover = null;
		}
		view = { year: range_start.year, month: range_start.month };
	}
	function preview_range(cell) {
		if (cell.outside || range_end || !range_start) return;
		range_hover = { year: cell.year, month: cell.month, day: cell.day };
	}
<\/script>

<div class="cluster" style="--cluster-gap: 0.75rem; align-items: start" onmouseleave={() => range_hover = null}>
	<div class="calendar">
		<div class="calendar-caption">
			<button class="button button-outline button-icon button-sm calendar-prev" type="button" aria-label="Previous month" onclick={() => shift(-1)}>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="m15 18-6-6 6-6"></path>
				</svg>
			</button>
			<div class="calendar-heading" aria-live="polite">{month_label(view.year, view.month)}</div>
			<div class="calendar-caption-pad" aria-hidden="true"></div>
		</div>
		<div class="calendar-grid">
			{#each WEEKDAYS as day}
				<div class="calendar-weekday">{day}</div>
			{/each}
			{#each month_days(view.year, view.month) as cell}
				{#if cell.outside}
					<div class="calendar-pad" aria-hidden="true"></div>
				{:else}
					<button class="calendar-day" type="button" data-range={paints_in_range(cell, range_start, range_end, range_hover) ? '' : undefined} data-range-start={paints_range_start(cell, range_start, range_end, range_hover) ? '' : undefined} data-range-end={paints_range_end(cell, range_start, range_end, range_hover) ? '' : undefined} onmouseenter={() => preview_range(cell)} onclick={() => pick_range(cell)}>{cell.day}</button>
				{/if}
			{/each}
		</div>
	</div>
	<div class="calendar">
		<div class="calendar-caption">
			<div class="calendar-caption-pad" aria-hidden="true"></div>
			<div class="calendar-heading" aria-live="polite">{month_label(following_month(view).year, following_month(view).month)}</div>
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
			{#each month_days(following_month(view).year, following_month(view).month) as cell}
				{#if cell.outside}
					<div class="calendar-pad" aria-hidden="true"></div>
				{:else}
					<button class="calendar-day" type="button" data-range={paints_in_range(cell, range_start, range_end, range_hover) ? '' : undefined} data-range-start={paints_range_start(cell, range_start, range_end, range_hover) ? '' : undefined} data-range-end={paints_range_end(cell, range_start, range_end, range_hover) ? '' : undefined} onmouseenter={() => preview_range(cell)} onclick={() => pick_range(cell)}>{cell.day}</button>
				{/if}
			{/each}
		</div>
	</div>
</div>`;

	const native = `<div class="field">
	<label class="label" for="when">Date</label>
	<input class="input" id="when" type="date">
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Calendar</h1>
			<p>
				<code>.calendar</code> is a month grid of day buttons.
				Caption plus <code>.calendar-prev</code> /
				<code>.calendar-next</code> on outline icon buttons — not
				classes named left or right. Selected day is
				<code>data-active</code>.
				A range uses the same classes: first click is start, second
				is end (swapped if the second day is earlier). After start
				is chosen, moving the pointer previews the range with the
				same <code>data-*</code> (reversed if the pointer is before
				start). In-range days are
				<code>data-range</code>; ends are
				<code>data-range-start</code> and <code>data-range-end</code>.
				Same-day start and end are both attributes on one cell.
				Month labels are English (January … December).
				Native <code>Date</code> builds the cells; there is no date
				library. A dual-month range is two grids in a
				<code>.cluster</code>. Outside days are inert
				<code>.calendar-pad</code> cells (no number, not a button).
				The second month is always the next month; previous is only
				on the first grid, next only on the second. The first grid
				stays on the start month once a start is picked. There is
				no wrapper. Tiny <code>$state</code> on this page is
				enough. Inert — no booking backend.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#month-grid">Month grid</a></li>
					<li>
						<a href="#range">Range</a>
						<ol>
							<li><a href="#range-single">Single Calendar</a></li>
							<li><a href="#range-dual">Two Calendars</a></li>
						</ol>
					</li>
					<li><a href="#native-date">Native date</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="month-grid">Month grid</h2>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
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
					<p class="field-description">{selected_label(selected)}</p>
				</div>
			</div>
			<pre class="docs-code"><code>{grid}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="range">Range</h2>
			<p>
				Same <code>.calendar</code> grid. First click sets start;
				second click sets end. If the second day is before the
				start, the two swap. A third click begins a new range.
				After start and before end, <code>mouseenter</code> on a day
				paints a temporary range from start to that day (or the
				reverse). The preview uses the same <code>data-range*</code>
				as a completed range and stops when the end is picked.
				In-range days get a muted background track; start and end
				are rounded on the start and end edges. Same-day start and
				end is fully rounded. There is no date library.
			</p>
			<h3 id="range-single">Single Calendar</h3>
			<p>
				One month. Days from the adjacent months stay visible and
				clickable — picking one navigates to that month.
			</p>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<div class="calendar" onmouseleave={leave_range}>
						<div class="calendar-caption">
							<button
								class="button button-outline button-icon button-sm calendar-prev"
								type="button"
								aria-label="Previous month"
								onclick={() => range_shift(-1)}
							>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path d="m15 18-6-6 6-6"></path>
								</svg>
							</button>
							<div class="calendar-heading" aria-live="polite">{month_label(range_view.year, range_view.month)}</div>
							<button
								class="button button-outline button-icon button-sm calendar-next"
								type="button"
								aria-label="Next month"
								onclick={() => range_shift(1)}
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
							{#each month_days(range_view.year, range_view.month) as cell}
								<button
									class="calendar-day"
									type="button"
									data-outside={cell.outside ? '' : undefined}
									data-today={is_today(cell) ? '' : undefined}
									data-range={paints_in_range(cell, range_start, range_end, range_hover) ? '' : undefined}
									data-range-start={paints_range_start(cell, range_start, range_end, range_hover) ? '' : undefined}
									data-range-end={paints_range_end(cell, range_start, range_end, range_hover) ? '' : undefined}
									aria-current={is_today(cell) ? 'date' : undefined}
									onmouseenter={() => preview_range(cell)}
									onclick={() => pick_range(cell)}
								>{cell.day}</button>
							{/each}
						</div>
					</div>
					<p class="field-description">{range_label(range_start, range_end)}</p>
				</div>
			</div>
			<pre class="docs-code"><code>{range}</code></pre>
			<h3 id="range-dual">Two Calendars</h3>
			<p>
				Two <code>.calendar</code> grids side by side in a
				<code>.cluster</code> (flex wrap — not classes named left or
				right). Same clicks as Range: first day is start, second is
				end, reverse swap if the second day is earlier. After start
				and before end, hovering a day on either grid previews the
				range across both. Sibling-month numbers are not shown —
				those cells are <code>.calendar-pad</code> (inert, no
				<code>data-range*</code>). The second month is always the
				next month. Previous is only on the first grid; next is
				only on the second. Once a start is picked, the first grid
				stays on that month. In-range fill uses
				<code>data-range</code> across both grids.
			</p>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<div class="cluster" style="--cluster-gap: 0.75rem; align-items: start" onmouseleave={leave_dual}>
						{#each [ { year: dual_view.year, month: dual_view.month, prev: true }, { ...following_month(dual_view), prev: false } ] as month (month.year + '-' + month.month)}
							<div class="calendar">
								<div class="calendar-caption">
									{#if month.prev}
										<button
											class="button button-outline button-icon button-sm calendar-prev"
											type="button"
											aria-label="Previous month"
											onclick={() => dual_shift(-1)}
										>
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
												<path d="m15 18-6-6 6-6"></path>
											</svg>
										</button>
									{:else}
										<div class="calendar-caption-pad" aria-hidden="true"></div>
									{/if}
									<div class="calendar-heading" aria-live="polite">{month_label(month.year, month.month)}</div>
									{#if month.prev}
										<div class="calendar-caption-pad" aria-hidden="true"></div>
									{:else}
										<button
											class="button button-outline button-icon button-sm calendar-next"
											type="button"
											aria-label="Next month"
											onclick={() => dual_shift(1)}
										>
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
												<path d="m9 18 6-6-6-6"></path>
											</svg>
										</button>
									{/if}
								</div>
								<div class="calendar-grid">
									{#each WEEKDAYS as day}
										<div class="calendar-weekday">{day}</div>
									{/each}
									{#each month_days(month.year, month.month) as cell}
										{#if cell.outside}
											<div class="calendar-pad" aria-hidden="true"></div>
										{:else}
											<button
												class="calendar-day"
												type="button"
												data-today={is_today(cell) ? '' : undefined}
												data-range={paints_in_range(cell, dual_start, dual_end, dual_hover) ? '' : undefined}
												data-range-start={paints_range_start(cell, dual_start, dual_end, dual_hover) ? '' : undefined}
												data-range-end={paints_range_end(cell, dual_start, dual_end, dual_hover) ? '' : undefined}
												aria-current={is_today(cell) ? 'date' : undefined}
												onmouseenter={() => preview_dual(cell)}
												onclick={() => pick_dual(cell)}
											>{cell.day}</button>
										{/if}
									{/each}
								</div>
							</div>
						{/each}
					</div>
					<p class="field-description">{range_label(dual_start, dual_end)}</p>
				</div>
			</div>
			<pre class="docs-code"><code>{range_dual}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="native-date">Native date</h2>
			<p>
				A sibling to the month grid: native
				<code>&lt;input type="date"&gt;</code> with Vega
				<code>.input</code>. Pair with a label. There is no wrapper.
			</p>
			<div class="docs-preview">
				<div class="field" style="max-width: 20rem">
					<label class="label" for="calendar-native">Date</label>
					<input class="input" id="calendar-native" type="date">
				</div>
			</div>
			<pre class="docs-code"><code>{native}</code></pre>
		</div>
	</div>
</div>
