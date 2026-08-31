<script>
	import { barPercents, barStyle, plotSeries, linearScale } from '../ui/chart/scale.svelte';
	import { tipText, hoverPoint, plotStyle, cursorStyle } from '../ui/chart/hover.svelte';
	import { linePath, areaPath } from '../ui/chart/path.svelte';
	import { tickMarks, tickStyle } from '../ui/chart/ticks.svelte';

	const week_a = [
		{ label: 'Direct', value: 72 },
		{ label: 'Search', value: 48 },
		{ label: 'Social', value: 90 },
		{ label: 'Email', value: 36 },
		{ label: 'Referral', value: 64 }
	];
	const week_b = [
		{ label: 'Direct', value: 28 },
		{ label: 'Search', value: 81 },
		{ label: 'Social', value: 44 },
		{ label: 'Email', value: 67 },
		{ label: 'Referral', value: 15 }
	];

	let week = $state('a');
	let series = $state(week_a.map((row) => ({ label: row.label, value: row.value })));
	const sized = $derived(barPercents(series));

	function swap_week() {
		week = week === 'a' ? 'b' : 'a';
		const src = week === 'a' ? week_a : week_b;
		series = src.map((row) => ({ label: row.label, value: row.value }));
	}

	const sessions_a = [
		{ label: 'Mon', value: 18 },
		{ label: 'Tue', value: 32 },
		{ label: 'Wed', value: 24 },
		{ label: 'Thu', value: 41 },
		{ label: 'Fri', value: 28 },
		{ label: 'Sat', value: 19 },
		{ label: 'Sun', value: 12 }
	];
	const sessions_b = [
		{ label: 'Mon', value: 22 },
		{ label: 'Tue', value: 14 },
		{ label: 'Wed', value: 38 },
		{ label: 'Thu', value: 27 },
		{ label: 'Fri', value: 45 },
		{ label: 'Sat', value: 31 },
		{ label: 'Sun', value: 16 }
	];

	const plot_y = [0, 50];
	let session_week = $state('a');
	let curve = $state(false);
	let markers = $state(true);
	let sessions = $state(sessions_a.map((row) => ({ label: row.label, value: row.value })));
	const points = $derived(plotSeries(sessions, { y: plot_y }));
	const line_d = $derived(linePath(points, curve));
	const area_d = $derived(areaPath(points, curve));
	const y_ticks = $derived(tickMarks(plot_y[0], plot_y[1], 5, linearScale(plot_y, [100, 0])));
	const y_grid = $derived(y_ticks.filter((tick) => tick.percent > 0 && tick.percent < 100));
	let line_hover = $state(null);
	let area_hover = $state(null);

	function swap_sessions() {
		session_week = session_week === 'a' ? 'b' : 'a';
		const src = session_week === 'a' ? sessions_a : sessions_b;
		sessions = src.map((row) => ({ label: row.label, value: row.value }));
		line_hover = null;
		area_hover = null;
	}

	function move_line(event) {
		line_hover = hoverPoint(points, event, event.currentTarget);
	}

	function leave_line() {
		line_hover = null;
	}

	function move_area(event) {
		area_hover = hoverPoint(points, event, event.currentTarget);
	}

	function leave_area() {
		area_hover = null;
	}

	function toggle_curve() {
		curve = !curve;
	}

	function toggle_markers() {
		markers = !markers;
	}

	const mix_y = [0, 50];
	let mix_direct = $state([
		{ label: 'Mon', value: 22 },
		{ label: 'Tue', value: 30 },
		{ label: 'Wed', value: 26 },
		{ label: 'Thu', value: 38 },
		{ label: 'Fri', value: 34 },
		{ label: 'Sat', value: 28 },
		{ label: 'Sun', value: 18 }
	]);
	let mix_search = $state([
		{ label: 'Mon', value: 14 },
		{ label: 'Tue', value: 20 },
		{ label: 'Wed', value: 32 },
		{ label: 'Thu', value: 24 },
		{ label: 'Fri', value: 40 },
		{ label: 'Sat', value: 36 },
		{ label: 'Sun', value: 22 }
	]);
	let mix_social = $state([
		{ label: 'Mon', value: 8 },
		{ label: 'Tue', value: 16 },
		{ label: 'Wed', value: 12 },
		{ label: 'Thu', value: 28 },
		{ label: 'Fri', value: 18 },
		{ label: 'Sat', value: 30 },
		{ label: 'Sun', value: 14 }
	]);
	let mix_curve = $state(false);
	let mix_tip = $state(true);
	let mix_hover = $state(null);
	const mix_direct_pts = $derived(plotSeries(mix_direct, { y: mix_y }));
	const mix_search_pts = $derived(plotSeries(mix_search, { y: mix_y }));
	const mix_social_pts = $derived(plotSeries(mix_social, { y: mix_y }));
	const mix_direct_line = $derived(linePath(mix_direct_pts, mix_curve));
	const mix_direct_fill = $derived(areaPath(mix_direct_pts, mix_curve));
	const mix_search_line = $derived(linePath(mix_search_pts, mix_curve));
	const mix_search_fill = $derived(areaPath(mix_search_pts, mix_curve));
	const mix_social_line = $derived(linePath(mix_social_pts, mix_curve));
	const mix_social_fill = $derived(areaPath(mix_social_pts, mix_curve));
	const mix_y_ticks = $derived(tickMarks(mix_y[0], mix_y[1], 5, linearScale(mix_y, [100, 0])));
	const mix_y_grid = $derived(mix_y_ticks.filter((tick) => tick.percent > 0 && tick.percent < 100));
	const mix_pastels = '--chart-1: oklch(0.74 0.10 168); --chart-2: oklch(0.78 0.09 55); --chart-3: oklch(0.72 0.10 278)';

	function toggle_mix_curve() {
		mix_curve = !mix_curve;
	}

	function toggle_mix_tip() {
		mix_tip = !mix_tip;
		if (!mix_tip)
			mix_hover = null;
	}

	function move_mix(event) {
		if (!mix_tip)
			return;
		mix_hover = hoverPoint(mix_direct_pts, event, event.currentTarget);
	}

	function leave_mix() {
		mix_hover = null;
	}

	function mix_series_tip(point) {
		if (!point)
			return '';
		const list = mix_direct_pts;
		let i = -1;
		for (let n = 0; n < list.length; n++) {
			if (list[n].label === point.label) {
				i = n;
				break;
			}
		}
		if (i < 0)
			return tipText(point);
		return 'Direct: ' + mix_direct[i].value + ' · Search: ' + mix_search[i].value + ' · Social: ' + mix_social[i].value;
	}

	const bar_static = `<figure class="chart" aria-label="Visits by channel">
	<div class="chart-bars">
		<button class="chart-bar" type="button" style="--chart-size: 80%" aria-label="Direct: 72">
			<span class="chart-tip" aria-hidden="true">Direct: 72</span>
		</button>
		<button class="chart-bar" type="button" style="--chart-size: 53.33%" aria-label="Search: 48">
			<span class="chart-tip" aria-hidden="true">Search: 48</span>
		</button>
		<button class="chart-bar" type="button" style="--chart-size: 100%" aria-label="Social: 90">
			<span class="chart-tip" aria-hidden="true">Social: 90</span>
		</button>
		<button class="chart-bar" type="button" style="--chart-size: 40%" aria-label="Email: 36">
			<span class="chart-tip" aria-hidden="true">Email: 36</span>
		</button>
		<button class="chart-bar" type="button" style="--chart-size: 71.11%" aria-label="Referral: 64">
			<span class="chart-tip" aria-hidden="true">Referral: 64</span>
		</button>
	</div>
	<ul class="chart-key">
		<li>Direct</li>
		<li>Search</li>
		<li>Social</li>
		<li>Email</li>
		<li>Referral</li>
	</ul>
	<figcaption>Visits by channel, last 7 days</figcaption>
</figure>`;

	const bar_dynamic = `<script>
	import { barPercents, barStyle } from './scale.js';
	import { tipText } from './hover.js';

	let series = $state([
		{ label: 'Direct', value: 72 },
		{ label: 'Search', value: 48 },
		{ label: 'Social', value: 90 },
		{ label: 'Email', value: 36 },
		{ label: 'Referral', value: 64 }
	]);
	const sized = $derived(barPercents(series));
	// Optional token paints that bar with --chart-N and skips nth-child:
	// { label: 'Direct', value: 72, token: '1' }
	// Values already 0–100: barPercents(series, [0, 100])
<\/script>

<figure class="chart" aria-label="Visits by channel">
	<div class="chart-bars">
		{#each sized as item (item.label)}
			<button class="chart-bar" type="button" style={barStyle(item)} aria-label={tipText(item)}>
				<span class="chart-tip" aria-hidden="true">{tipText(item)}</span>
			</button>
		{/each}
	</div>
	<ul class="chart-key">
		{#each sized as item (item.label)}
			<li>{item.label}</li>
		{/each}
	</ul>
	<figcaption>Visits by channel, last 7 days</figcaption>
</figure>`;

	const line_static = `<figure class="chart" aria-label="Weekly sessions">
	<div class="chart-plot">
		<svg class="chart-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			<path class="chart-line-path" d="M0,64L16.67,36L33.33,52L50,18L66.67,44L83.33,62L100,76"></path>
		</svg>
		<div class="chart-marks">
			<span class="chart-mark" style="inset-inline-start: 0%; inset-block-start: 64%"></span>
			<span class="chart-mark" style="inset-inline-start: 16.67%; inset-block-start: 36%"></span>
			<span class="chart-mark" style="inset-inline-start: 33.33%; inset-block-start: 52%"></span>
			<span class="chart-mark" style="inset-inline-start: 50%; inset-block-start: 18%"></span>
			<span class="chart-mark" style="inset-inline-start: 66.67%; inset-block-start: 44%"></span>
			<span class="chart-mark" style="inset-inline-start: 83.33%; inset-block-start: 62%"></span>
			<span class="chart-mark" style="inset-inline-start: 100%; inset-block-start: 76%"></span>
		</div>
	</div>
	<figcaption>Sessions, Monday through Sunday</figcaption>
</figure>`;

	const line_dynamic = `<script>
	import { plotSeries } from './scale.js';
	import { linePath } from './path.js';
	import { hoverPoint, tipText, plotStyle, cursorStyle } from './hover.js';

	let sessions = $state([
		{ label: 'Mon', value: 18 },
		{ label: 'Tue', value: 32 },
		{ label: 'Wed', value: 24 },
		{ label: 'Thu', value: 41 },
		{ label: 'Fri', value: 28 },
		{ label: 'Sat', value: 19 },
		{ label: 'Sun', value: 12 }
	]);
	let curve = $state(false);
	const points = $derived(plotSeries(sessions, { y: [0, 50] }));
	const d = $derived(linePath(points, curve));
	let hover = $state(null);

	function move(event) {
		hover = hoverPoint(points, event, event.currentTarget);
	}
	function leave() {
		hover = null;
	}
<\/script>

<figure class="chart" aria-label="Weekly sessions">
	<div class="chart-plot" role="group" data-markers="on" onmousemove={move} onmouseleave={leave}>
		<svg class="chart-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			<path class="chart-line-path" d={d}></path>
		</svg>
		<div class="chart-marks">
			{#each points as item (item.label)}
				<span class="chart-mark" style={plotStyle(item)}></span>
			{/each}
		</div>
		{#if hover}
			<span class="chart-cursor" style={cursorStyle(hover)}></span>
			<span class="chart-spot" style={plotStyle(hover)}></span>
			<span class="chart-tip" aria-hidden="true" style={plotStyle(hover)}>{tipText(hover)}</span>
		{/if}
	</div>
	<figcaption>Sessions, Monday through Sunday</figcaption>
</figure>`;

	const area_static = `<figure class="chart" aria-label="Weekly sessions" style="--chart-series: var(--chart-1)">
	<div class="chart-axis" data-axis="y">Sessions</div>
	<div class="chart-plot" data-markers="off">
		<svg class="chart-area" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			<path class="chart-area-path" d="M0,64L16.67,36L33.33,52L50,18L66.67,44L83.33,62L100,76L100,100L0,100Z"></path>
			<path class="chart-line-path" d="M0,64L16.67,36L33.33,52L50,18L66.67,44L83.33,62L100,76"></path>
		</svg>
		<div class="chart-grid">
			<div class="chart-grid-line" style="inset-block-start: 80%"></div>
			<div class="chart-grid-line" style="inset-block-start: 60%"></div>
			<div class="chart-grid-line" style="inset-block-start: 40%"></div>
			<div class="chart-grid-line" style="inset-block-start: 20%"></div>
		</div>
		<div class="chart-ticks" data-axis="y">
			<span class="chart-tick" style="inset-block-start: 100%">0</span>
			<span class="chart-tick" style="inset-block-start: 80%">10</span>
			<span class="chart-tick" style="inset-block-start: 60%">20</span>
			<span class="chart-tick" style="inset-block-start: 40%">30</span>
			<span class="chart-tick" style="inset-block-start: 20%">40</span>
			<span class="chart-tick" style="inset-block-start: 0%">50</span>
		</div>
	</div>
	<div class="chart-ticks" data-axis="x">
		<span class="chart-tick" style="inset-inline-start: 0%">Mon</span>
		<span class="chart-tick" style="inset-inline-start: 16.67%">Tue</span>
		<span class="chart-tick" style="inset-inline-start: 33.33%">Wed</span>
		<span class="chart-tick" style="inset-inline-start: 50%">Thu</span>
		<span class="chart-tick" style="inset-inline-start: 66.67%">Fri</span>
		<span class="chart-tick" style="inset-inline-start: 83.33%">Sat</span>
		<span class="chart-tick" style="inset-inline-start: 100%">Sun</span>
	</div>
	<div class="chart-axis" data-axis="x">Weekday</div>
	<figcaption>Sessions, Monday through Sunday</figcaption>
</figure>`;

	const area_dynamic = `<script>
	import { plotSeries, linearScale } from './scale.js';
	import { linePath, areaPath } from './path.js';
	import { hoverPoint, tipText, plotStyle, cursorStyle } from './hover.js';
	import { tickMarks, tickStyle } from './ticks.js';

	let sessions = $state([
		{ label: 'Mon', value: 18 },
		{ label: 'Tue', value: 32 },
		{ label: 'Wed', value: 24 },
		{ label: 'Thu', value: 41 },
		{ label: 'Fri', value: 28 },
		{ label: 'Sat', value: 19 },
		{ label: 'Sun', value: 12 }
	]);
	let curve = $state(false);
	const points = $derived(plotSeries(sessions, { y: [0, 50] }));
	const line_d = $derived(linePath(points, curve));
	const fill = $derived(areaPath(points, curve));
	const y_ticks = $derived(tickMarks(0, 50, 5, linearScale([0, 50], [100, 0])));
	const y_grid = $derived(y_ticks.filter((tick) => tick.percent > 0 && tick.percent < 100));
	let hover = $state(null);

	function move(event) {
		hover = hoverPoint(points, event, event.currentTarget);
	}
	function leave() {
		hover = null;
	}
<\/script>

<figure class="chart" aria-label="Weekly sessions" style="--chart-series: var(--chart-1)">
	<div class="chart-axis" data-axis="y">Sessions</div>
	<div class="chart-plot" role="group" data-markers="off" onmousemove={move} onmouseleave={leave}>
		<svg class="chart-area" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			<path class="chart-area-path" d={fill}></path>
			<path class="chart-line-path" d={line_d}></path>
		</svg>
		<div class="chart-grid">
			{#each y_grid as tick}
				<div class="chart-grid-line" style={tickStyle(tick.percent)}></div>
			{/each}
		</div>
		<div class="chart-ticks" data-axis="y">
			{#each y_ticks as tick}
				<span class="chart-tick" style={tickStyle(tick.percent)}>{tick.value}</span>
			{/each}
		</div>
		{#if hover}
			<span class="chart-cursor" style={cursorStyle(hover)}></span>
			<span class="chart-spot" style={plotStyle(hover)}></span>
			<span class="chart-tip" aria-hidden="true" style={plotStyle(hover)}>{tipText(hover)}</span>
		{/if}
	</div>
	<div class="chart-ticks" data-axis="x">
		{#each points as item (item.label)}
			<span class="chart-tick" style={tickStyle(item.x, 'x')}>{item.label}</span>
		{/each}
	</div>
	<div class="chart-axis" data-axis="x">Weekday</div>
	<figcaption>Sessions, Monday through Sunday</figcaption>
</figure>`;

	const mix_static = `<figure class="chart" aria-label="Weekly visits by channel" style="--chart-1: oklch(0.74 0.10 168); --chart-2: oklch(0.78 0.09 55); --chart-3: oklch(0.72 0.10 278)">
	<div class="chart-plot">
		<svg class="chart-area" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			<defs>
				<linearGradient id="chart-fill-direct" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100">
					<stop offset="0%" stop-color="oklch(0.74 0.10 168)" stop-opacity="0.45"></stop>
					<stop offset="100%" stop-color="oklch(0.74 0.10 168)" stop-opacity="0.06"></stop>
				</linearGradient>
			</defs>
			<g style="--chart-series: var(--chart-1); --chart-fill: url(#chart-fill-direct)">
				<path class="chart-area-path" d="M0,56L16.67,40L33.33,48L50,24L66.67,32L83.33,44L100,64L100,100L0,100Z"></path>
				<path class="chart-line-path" d="M0,56L16.67,40L33.33,48L50,24L66.67,32L83.33,44L100,64"></path>
			</g>
			<g style="--chart-series: var(--chart-2); --chart-fill: color-mix(in oklab, var(--chart-2) 30%, transparent)">
				<path class="chart-area-path" d="M0,72L16.67,60L33.33,36L50,52L66.67,20L83.33,28L100,56L100,100L0,100Z"></path>
				<path class="chart-line-path" d="M0,72L16.67,60L33.33,36L50,52L66.67,20L83.33,28L100,56"></path>
			</g>
			<g style="--chart-series: var(--chart-3); --chart-fill: color-mix(in oklab, var(--chart-3) 30%, transparent)">
				<path class="chart-area-path" d="M0,84L16.67,68L33.33,76L50,44L66.67,64L83.33,40L100,72L100,100L0,100Z"></path>
				<path class="chart-line-path" d="M0,84L16.67,68L33.33,76L50,44L66.67,64L83.33,40L100,72"></path>
			</g>
		</svg>
		<div class="chart-grid">
			<div class="chart-grid-line" style="inset-block-start: 80%"></div>
			<div class="chart-grid-line" style="inset-block-start: 60%"></div>
			<div class="chart-grid-line" style="inset-block-start: 40%"></div>
			<div class="chart-grid-line" style="inset-block-start: 20%"></div>
		</div>
		<div class="chart-ticks" data-axis="y">
			<span class="chart-tick" style="inset-block-start: 100%">0</span>
			<span class="chart-tick" style="inset-block-start: 80%">10</span>
			<span class="chart-tick" style="inset-block-start: 60%">20</span>
			<span class="chart-tick" style="inset-block-start: 40%">30</span>
			<span class="chart-tick" style="inset-block-start: 20%">40</span>
			<span class="chart-tick" style="inset-block-start: 0%">50</span>
		</div>
	</div>
	<div class="chart-ticks" data-axis="x">
		<span class="chart-tick" style="inset-inline-start: 0%">Mon</span>
		<span class="chart-tick" style="inset-inline-start: 16.67%">Tue</span>
		<span class="chart-tick" style="inset-inline-start: 33.33%">Wed</span>
		<span class="chart-tick" style="inset-inline-start: 50%">Thu</span>
		<span class="chart-tick" style="inset-inline-start: 66.67%">Fri</span>
		<span class="chart-tick" style="inset-inline-start: 83.33%">Sat</span>
		<span class="chart-tick" style="inset-inline-start: 100%">Sun</span>
	</div>
	<ul class="chart-key">
		<li>Direct</li>
		<li>Search</li>
		<li>Social</li>
	</ul>
	<figcaption>Visits by channel, Monday through Sunday</figcaption>
</figure>`;

	const mix_dynamic = `<script>
	import { plotSeries, linearScale } from './scale.js';
	import { linePath, areaPath } from './path.js';
	import { hoverPoint, plotStyle, cursorStyle } from './hover.js';
	import { tickMarks, tickStyle } from './ticks.js';

	const y = [0, 50];
	let mix_curve = $state(false);
	let mix_tip = $state(true);
	let direct = $state([
		{ label: 'Mon', value: 22 },
		{ label: 'Tue', value: 30 },
		{ label: 'Wed', value: 26 },
		{ label: 'Thu', value: 38 },
		{ label: 'Fri', value: 34 },
		{ label: 'Sat', value: 28 },
		{ label: 'Sun', value: 18 }
	]);
	let search = $state([
		{ label: 'Mon', value: 14 },
		{ label: 'Tue', value: 20 },
		{ label: 'Wed', value: 32 },
		{ label: 'Thu', value: 24 },
		{ label: 'Fri', value: 40 },
		{ label: 'Sat', value: 36 },
		{ label: 'Sun', value: 22 }
	]);
	let social = $state([
		{ label: 'Mon', value: 8 },
		{ label: 'Tue', value: 16 },
		{ label: 'Wed', value: 12 },
		{ label: 'Thu', value: 28 },
		{ label: 'Fri', value: 18 },
		{ label: 'Sat', value: 30 },
		{ label: 'Sun', value: 14 }
	]);
	const direct_pts = $derived(plotSeries(direct, { y }));
	const search_pts = $derived(plotSeries(search, { y }));
	const social_pts = $derived(plotSeries(social, { y }));
	const direct_line = $derived(linePath(direct_pts, mix_curve));
	const direct_fill = $derived(areaPath(direct_pts, mix_curve));
	const search_line = $derived(linePath(search_pts, mix_curve));
	const search_fill = $derived(areaPath(search_pts, mix_curve));
	const social_line = $derived(linePath(social_pts, mix_curve));
	const social_fill = $derived(areaPath(social_pts, mix_curve));
	const y_ticks = $derived(tickMarks(y[0], y[1], 5, linearScale(y, [100, 0])));
	const y_grid = $derived(y_ticks.filter((tick) => tick.percent > 0 && tick.percent < 100));
	let hover = $state(null);

	function toggle_mix_curve() {
		mix_curve = !mix_curve;
	}
	function toggle_mix_tip() {
		mix_tip = !mix_tip;
		if (!mix_tip)
			hover = null;
	}
	function move(event) {
		if (!mix_tip)
			return;
		hover = hoverPoint(direct_pts, event, event.currentTarget);
	}
	function leave() {
		hover = null;
	}
	function mixTipText(point) {
		if (!point)
			return '';
		let i = -1;
		for (let n = 0; n < direct_pts.length; n++) {
			if (direct_pts[n].label === point.label) {
				i = n;
				break;
			}
		}
		if (i < 0)
			return '';
		return 'Direct: ' + direct[i].value + ' · Search: ' + search[i].value + ' · Social: ' + social[i].value;
	}
<\/script>

<div class="cluster">
	<button class="button button-outline button-sm" type="button" onclick={toggle_mix_curve}>
		{mix_curve ? 'Straight segments' : 'Curve'}
	</button>
	<button class="button button-outline button-sm" type="button" onclick={toggle_mix_tip}>
		{mix_tip ? 'Hide tooltip' : 'Show tooltip'}
	</button>
</div>
<figure class="chart" aria-label="Weekly visits by channel" style="--chart-1: oklch(0.74 0.10 168); --chart-2: oklch(0.78 0.09 55); --chart-3: oklch(0.72 0.10 278)">
	<div class="chart-plot" role="group" onmousemove={move} onmouseleave={leave}>
		<svg class="chart-area" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			<defs>
				<linearGradient id="chart-fill-direct" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100">
					<stop offset="0%" stop-color="oklch(0.74 0.10 168)" stop-opacity="0.45"></stop>
					<stop offset="100%" stop-color="oklch(0.74 0.10 168)" stop-opacity="0.06"></stop>
				</linearGradient>
			</defs>
			<g style="--chart-series: var(--chart-1); --chart-fill: url(#chart-fill-direct)">
				<path class="chart-area-path" d={direct_fill}></path>
				<path class="chart-line-path" d={direct_line}></path>
			</g>
			<g style="--chart-series: var(--chart-2); --chart-fill: color-mix(in oklab, var(--chart-2) 30%, transparent)">
				<path class="chart-area-path" d={search_fill}></path>
				<path class="chart-line-path" d={search_line}></path>
			</g>
			<g style="--chart-series: var(--chart-3); --chart-fill: color-mix(in oklab, var(--chart-3) 30%, transparent)">
				<path class="chart-area-path" d={social_fill}></path>
				<path class="chart-line-path" d={social_line}></path>
			</g>
		</svg>
		<div class="chart-grid">
			{#each y_grid as tick}
				<div class="chart-grid-line" style={tickStyle(tick.percent)}></div>
			{/each}
		</div>
		<div class="chart-ticks" data-axis="y">
			{#each y_ticks as tick}
				<span class="chart-tick" style={tickStyle(tick.percent)}>{tick.value}</span>
			{/each}
		</div>
		{#if mix_tip && hover}
			<span class="chart-cursor" style={cursorStyle(hover)}></span>
			<span class="chart-spot" style={plotStyle(hover)}></span>
			<span class="chart-tip" aria-hidden="true" style={plotStyle(hover)}>{mixTipText(hover)}</span>
		{/if}
	</div>
	<div class="chart-ticks" data-axis="x">
		{#each direct_pts as item (item.label)}
			<span class="chart-tick" style={tickStyle(item.x, 'x')}>{item.label}</span>
		{/each}
	</div>
	<ul class="chart-key">
		<li>Direct</li>
		<li>Search</li>
		<li>Social</li>
	</ul>
	<figcaption>Visits by channel, Monday through Sunday</figcaption>
</figure>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Chart</h1>
			<p>
				<code>&lt;figure class="chart"&gt;</code> with a
				<code>&lt;figcaption&gt;</code> and an accessible name.
				Three types: bar, line, and area. Curve is a path option on
				line and area, not a fourth type. A three-series area is still
				area — three fills on one plot.
				Colors are <code>--chart-1</code> through <code>--chart-5</code>.
				There is no wrapper.
			</p>
			<p>
				Each type has a static HTML paste (no data binding) and a
				complete dynamic example: a JavaScript array /
				<code>$state</code> plus the HTML that consumes it.
				Copy
				<a href="src/components/ui/chart/scale.js"><code>src/components/ui/chart/scale.js</code></a>,
				<a href="src/components/ui/chart/hover.js"><code>src/components/ui/chart/hover.js</code></a>,
				<a href="src/components/ui/chart/path.js"><code>src/components/ui/chart/path.js</code></a>,
				and
				<a href="src/components/ui/chart/ticks.js"><code>src/components/ui/chart/ticks.js</code></a>.
				Alumna does not compile relative <code>.js</code> — paste those
				functions into a <code>&lt;script module&gt;</code> file, or copy the
				matching
				<a href="src/components/ui/chart/scale.svelte"><code>scale.svelte</code></a>,
				<a href="src/components/ui/chart/hover.svelte"><code>hover.svelte</code></a>,
				<a href="src/components/ui/chart/path.svelte"><code>path.svelte</code></a>,
				and
				<a href="src/components/ui/chart/ticks.svelte"><code>ticks.svelte</code></a>
				(same API). This page imports the <code>.svelte</code> files.
				Snippets name the helpers; they do not paste their source.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li>
						<a href="#bar">Bar</a>
						<ol>
							<li><a href="#bar-static">Static</a></li>
							<li><a href="#bar-dynamic">Dynamic</a></li>
						</ol>
					</li>
					<li>
						<a href="#line">Line</a>
						<ol>
							<li><a href="#line-static">Static</a></li>
							<li><a href="#line-dynamic">Dynamic</a></li>
						</ol>
					</li>
					<li>
						<a href="#area">Area</a>
						<ol>
							<li><a href="#area-static">Static</a></li>
							<li><a href="#area-dynamic">Dynamic</a></li>
						</ol>
					</li>
					<li>
						<a href="#three-series">Three-series area</a>
						<ol>
							<li><a href="#three-series-static">Static</a></li>
							<li><a href="#three-series-dynamic">Dynamic</a></li>
						</ol>
					</li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="bar">Bar</h2>
			<p>
				Five series so every token shows. The live figure is bound to
				<code>$state</code> data — switch weeks and the bars update.
				Hover or focus a bar for the value.
				<code>barPercents</code> writes <code>--chart-size</code>;
				<code>tipText</code> fills
				<code>.chart-tip</code> (native <code>title</code> is not enough).
			</p>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<div class="cluster">
						<button class="button button-outline button-sm" type="button" onclick={swap_week}>
							{week === 'a' ? 'Show other week' : 'Show first week'}
						</button>
					</div>
					<figure class="chart" aria-label="Visits by channel" data-sample={week}>
						<div class="chart-bars">
							{#each sized as item (item.label)}
								<button
									class="chart-bar"
									type="button"
									style={barStyle(item)}
									aria-label={tipText(item)}
								>
									<span class="chart-tip" aria-hidden="true">{tipText(item)}</span>
								</button>
							{/each}
						</div>
						<ul class="chart-key">
							{#each sized as item (item.label)}
								<li>{item.label}</li>
							{/each}
						</ul>
						<figcaption>Visits by channel, last 7 days</figcaption>
					</figure>
					<p class="muted">{sized.map((item) => item.label + ' ' + item.value).join(' · ')}</p>
				</div>
			</div>
			<h3 id="bar-static">Static</h3>
			<p>
				Hardcoded <code>--chart-size</code> percents. No
				<code>{'{#each}'}</code> — paste the markup and wire your own
				logic.
			</p>
			<pre class="docs-code"><code>{bar_static}</code></pre>
			<h3 id="bar-dynamic">Dynamic</h3>
			<p>
				The live figure above is this <code>$state</code> array.
				Pass it into <code>barPercents</code>. Default domain is 0 to
				the series max (Social at 90 becomes 100% height). Optional
				<code>token</code> sets <code>background: var(--chart-N)</code>.
			</p>
			<pre class="docs-code"><code>{bar_dynamic}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="line">Line</h2>
			<p>
				Rebuild the polyline in pancake data space:
				<code>viewBox="0 0 100 100"</code>
				<code>preserveAspectRatio="none"</code>
				on <code>.chart-line</code> inside <code>.chart-plot</code>.
				<code>plotSeries</code> maps <code>{'{ label, value }'}</code> into that
				space; <code>linePath</code> writes <code>d</code>
				(<code>M</code>/<code>L</code>, or Catmull-Rom cubics when
				<code>curve</code> is true). Stroke is
				<code>--chart-series</code> (defaults to <code>--chart-3</code>)
				with <code>vector-effect: non-scaling-stroke</code>.
				HTML <code>.chart-mark</code> dots do not squash.
				Hover snaps to the nearest point by x.
			</p>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<div class="cluster">
						<button class="button button-outline button-sm" type="button" onclick={swap_sessions}>
							{session_week === 'a' ? 'Show other week' : 'Show first week'}
						</button>
						<button class="button button-outline button-sm" type="button" onclick={toggle_curve}>
							{curve ? 'Straight segments' : 'Curve'}
						</button>
						<button class="button button-outline button-sm" type="button" onclick={toggle_markers}>
							{markers ? 'Hide markers' : 'Show markers'}
						</button>
					</div>
					<figure class="chart" aria-label="Weekly sessions" data-sample={session_week} data-curve={curve ? 'on' : 'off'}>
						<div
							class="chart-plot"
							role="group"
							data-markers={markers ? 'on' : 'off'}
							onmousemove={move_line}
							onmouseleave={leave_line}
						>
							<svg class="chart-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
								<path class="chart-line-path" d={line_d}></path>
							</svg>
							<div class="chart-marks">
								{#each points as item (item.label)}
									<span class="chart-mark" style={plotStyle(item)}></span>
								{/each}
							</div>
							{#if line_hover}
								<span class="chart-cursor" style={cursorStyle(line_hover)}></span>
								<span class="chart-spot" style={plotStyle(line_hover)}></span>
								<span class="chart-tip" aria-hidden="true" style={plotStyle(line_hover)}>{tipText(line_hover)}</span>
							{/if}
						</div>
						<figcaption>Sessions, Monday through Sunday</figcaption>
					</figure>
					<p class="muted">{points.map((item) => item.label + ' ' + item.value).join(' · ')}</p>
				</div>
			</div>
			<h3 id="line-static">Static</h3>
			<p>
				Hardcoded path <code>d</code> and mark insets. Plot frame is
				<code>.chart-plot</code>. No data binding.
			</p>
			<pre class="docs-code"><code>{line_static}</code></pre>
			<h3 id="line-dynamic">Dynamic</h3>
			<p>
				The live figure above is this <code>$state</code> array.
				<code>plotSeries</code> projects it; <code>linePath</code>
				writes <code>d</code> (<code>curve</code> true → spline).
				<code>hoverPoint</code> is nearest-x, not a 2D search.
			</p>
			<pre class="docs-code"><code>{line_dynamic}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="area">Area</h2>
			<p>
				Same scales, path option, and nearest-x hover as the line.
				<code>areaPath</code> closes to a floor at <code>y=100</code>.
				Fill mixes <code>--chart-series</code>. This figure sets
				<code>--chart-series: var(--chart-1)</code>.
				Optional axis titles are <code>.chart-axis</code> with
				<code>data-axis="x"</code> or <code>"y"</code>.
				Grid lines use <code>--chart-grid</code> (defaults to
				<code>--border</code>). Tick numbers live in an HTML overlay
				so they do not stretch with the viewBox.
			</p>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<div class="cluster">
						<button class="button button-outline button-sm" type="button" onclick={swap_sessions}>
							{session_week === 'a' ? 'Show other week' : 'Show first week'}
						</button>
						<button class="button button-outline button-sm" type="button" onclick={toggle_curve}>
							{curve ? 'Straight segments' : 'Curve'}
						</button>
					</div>
					<figure class="chart" aria-label="Weekly sessions" style="--chart-series: var(--chart-1)" data-sample={session_week} data-curve={curve ? 'on' : 'off'}>
						<div class="chart-axis" data-axis="y">Sessions</div>
						<div
							class="chart-plot"
							role="group"
							data-markers="off"
							onmousemove={move_area}
							onmouseleave={leave_area}
						>
							<svg class="chart-area" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
								<path class="chart-area-path" d={area_d}></path>
								<path class="chart-line-path" d={line_d}></path>
							</svg>
							<div class="chart-grid">
								{#each y_grid as tick}
									<div class="chart-grid-line" style={tickStyle(tick.percent)}></div>
								{/each}
							</div>
							<div class="chart-ticks" data-axis="y">
								{#each y_ticks as tick}
									<span class="chart-tick" style={tickStyle(tick.percent)}>{tick.value}</span>
								{/each}
							</div>
							{#if area_hover}
								<span class="chart-cursor" style={cursorStyle(area_hover)}></span>
								<span class="chart-spot" style={plotStyle(area_hover)}></span>
								<span class="chart-tip" aria-hidden="true" style={plotStyle(area_hover)}>{tipText(area_hover)}</span>
							{/if}
						</div>
						<div class="chart-ticks" data-axis="x">
							{#each points as item (item.label)}
								<span class="chart-tick" style={tickStyle(item.x, 'x')}>{item.label}</span>
							{/each}
						</div>
						<div class="chart-axis" data-axis="x">Weekday</div>
						<figcaption>Sessions, Monday through Sunday</figcaption>
					</figure>
					<p class="muted">{points.map((item) => item.label + ' ' + item.value).join(' · ')}</p>
				</div>
			</div>
			<h3 id="area-static">Static</h3>
			<p>
				Hardcoded fill, stroke, grid, and ticks. Same
				<code>.chart-plot</code> frame. No data binding.
			</p>
			<pre class="docs-code"><code>{area_static}</code></pre>
			<h3 id="area-dynamic">Dynamic</h3>
			<p>
				The live figure above is this <code>$state</code> array
				(same list as the line). <code>areaPath</code> closes the
				line; <code>tickMarks</code> feeds the HTML grid.
				<code>--chart-series</code> / <code>--chart-grid</code> /
				<code>data-markers</code> are CSS, not a chart library.
			</p>
			<pre class="docs-code"><code>{area_dynamic}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="three-series">Three-series area</h2>
			<p>
				Three <code>areaPath</code> series share one
				<code>.chart-plot</code> and the same y domain.
				Strokes are mint, apricot, and periwinkle
				(<code>--chart-1</code> through <code>--chart-3</code> on this
				figure). Each fill is that stroke at lower opacity so overlaps
				stay readable. Direct uses an SVG
				<code>&lt;linearGradient&gt;</code> of the same mint, more
				transparent toward the floor. Set
				<code>--chart-fill</code> on a group or path when the default
				<code>color-mix</code> is not enough.
				Curve is the same path option as the area example, on
				<code>mix_curve</code> so it does not move the line and area
				figures. Hover snaps to a weekday and lists Direct, Search,
				and Social.
			</p>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<div class="cluster">
						<button class="button button-outline button-sm" type="button" onclick={toggle_mix_curve}>
							{mix_curve ? 'Straight segments' : 'Curve'}
						</button>
						<button class="button button-outline button-sm" type="button" onclick={toggle_mix_tip}>
							{mix_tip ? 'Hide tooltip' : 'Show tooltip'}
						</button>
					</div>
					<figure class="chart" id="three-series-chart" aria-label="Weekly visits by channel" style={mix_pastels} data-curve={mix_curve ? 'on' : 'off'} data-tip={mix_tip ? 'on' : 'off'}>
						<div
							class="chart-plot"
							role="group"
							data-markers="off"
							onmousemove={move_mix}
							onmouseleave={leave_mix}
						>
							<svg class="chart-area" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
								<defs>
									<linearGradient id="chart-fill-direct" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100">
										<stop offset="0%" stop-color="oklch(0.74 0.10 168)" stop-opacity="0.45"></stop>
										<stop offset="100%" stop-color="oklch(0.74 0.10 168)" stop-opacity="0.06"></stop>
									</linearGradient>
								</defs>
								<g style="--chart-series: var(--chart-1); --chart-fill: url(#chart-fill-direct)">
									<path class="chart-area-path" d={mix_direct_fill}></path>
									<path class="chart-line-path" d={mix_direct_line}></path>
								</g>
								<g style="--chart-series: var(--chart-2); --chart-fill: color-mix(in oklab, var(--chart-2) 30%, transparent)">
									<path class="chart-area-path" d={mix_search_fill}></path>
									<path class="chart-line-path" d={mix_search_line}></path>
								</g>
								<g style="--chart-series: var(--chart-3); --chart-fill: color-mix(in oklab, var(--chart-3) 30%, transparent)">
									<path class="chart-area-path" d={mix_social_fill}></path>
									<path class="chart-line-path" d={mix_social_line}></path>
								</g>
							</svg>
							<div class="chart-grid">
								{#each mix_y_grid as tick}
									<div class="chart-grid-line" style={tickStyle(tick.percent)}></div>
								{/each}
							</div>
							<div class="chart-ticks" data-axis="y">
								{#each mix_y_ticks as tick}
									<span class="chart-tick" style={tickStyle(tick.percent)}>{tick.value}</span>
								{/each}
							</div>
							{#if mix_tip && mix_hover}
								<span class="chart-cursor" style={cursorStyle(mix_hover)}></span>
								<span class="chart-spot" style={plotStyle(mix_hover)}></span>
								<span class="chart-tip" aria-hidden="true" style={plotStyle(mix_hover)}>{mix_series_tip(mix_hover)}</span>
							{/if}
						</div>
						<div class="chart-ticks" data-axis="x">
							{#each mix_direct_pts as item (item.label)}
								<span class="chart-tick" style={tickStyle(item.x, 'x')}>{item.label}</span>
							{/each}
						</div>
						<ul class="chart-key">
							<li>Direct</li>
							<li>Search</li>
							<li>Social</li>
						</ul>
						<figcaption>Visits by channel, Monday through Sunday</figcaption>
					</figure>
					<p class="muted">
						Direct {mix_direct.map((row) => row.value).join(' · ')}
						· Search {mix_search.map((row) => row.value).join(' · ')}
						· Social {mix_social.map((row) => row.value).join(' · ')}
					</p>
				</div>
			</div>
			<h3 id="three-series-static">Static</h3>
			<p>
				Hardcoded paths, pastel tokens, and one gradient id. No
				<code>{'{#each}'}</code>. Plot frame is
				<code>.chart-plot</code>.
			</p>
			<pre class="docs-code"><code>{mix_static}</code></pre>
			<h3 id="three-series-dynamic">Dynamic</h3>
			<p>
				The live figure above is these three <code>$state</code>
				arrays. Same y domain on every
				<code>plotSeries</code> call so the series share a scale.
				<code>mix_curve</code> feeds every
				<code>areaPath</code> / <code>linePath</code>.
				<code>mix_tip</code> gates nearest-x hover (shared weekday
				across Direct, Search, and Social).
				<code>--chart-fill</code> paints the gradient on Direct and a
				translucent mix on the others.
			</p>
			<pre class="docs-code"><code>{mix_dynamic}</code></pre>
		</div>
	</div>
</div>
