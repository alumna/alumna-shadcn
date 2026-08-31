<script>
	import Charts from '../blocks/Charts.svelte';
	import BlockView from './BlockView.svelte';

	const snippet = `<!-- Copy src/components/blocks/Charts.svelte. Figures are inert. -->
<div class="charts">
	<div class="card">
		<div class="card-header">
			<div class="card-title">Visits by channel</div>
			<div class="card-description">Last 7 days</div>
		</div>
		<div class="card-content">
			<figure class="chart" aria-label="Visits by channel">
				<div class="chart-bars">
					<div class="chart-bar" style="--chart-size: 72%"></div>
					<div class="chart-bar" style="--chart-size: 48%"></div>
					<div class="chart-bar" style="--chart-size: 90%"></div>
					<div class="chart-bar" style="--chart-size: 36%"></div>
					<div class="chart-bar" style="--chart-size: 64%"></div>
				</div>
				<ul class="chart-key">
					<li>Direct</li>
					<li>Search</li>
					<li>Social</li>
					<li>Email</li>
					<li>Referral</li>
				</ul>
				<figcaption>Visits by channel, last 7 days</figcaption>
			</figure>
		</div>
	</div>
	<div class="card">
		<div class="card-header">
			<div class="card-title">Weekly sessions</div>
			<div class="card-description">Monday through Sunday</div>
		</div>
		<div class="card-content">
			<figure class="chart" aria-label="Weekly sessions">
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
			</figure>
		</div>
	</div>
	<div class="card">
		<div class="card-header">
			<div class="card-title">Sessions with axes</div>
			<div class="card-description">Monday through Sunday</div>
		</div>
		<div class="card-content">
			<figure class="chart" aria-label="Weekly sessions" style="--chart-series: var(--chart-1)">
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
			</figure>
		</div>
	</div>
	<div class="card">
		<div class="card-header">
			<div class="card-title">Weekly visits by channel</div>
			<div class="card-description">Direct, Search, and Social</div>
		</div>
		<div class="card-content">
			<figure class="chart" aria-label="Weekly visits by channel" style="--chart-1: oklch(0.74 0.10 168); --chart-2: oklch(0.78 0.09 55); --chart-3: oklch(0.72 0.10 278)">
				<div class="chart-plot">
					<svg class="chart-area" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
						<defs>
							<linearGradient id="charts-fill-direct" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100">
								<stop offset="0%" stop-color="oklch(0.74 0.10 168)" stop-opacity="0.45"></stop>
								<stop offset="100%" stop-color="oklch(0.74 0.10 168)" stop-opacity="0.06"></stop>
							</linearGradient>
						</defs>
						<g style="--chart-series: var(--chart-1); --chart-fill: url(#charts-fill-direct)">
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
			</figure>
		</div>
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Charts</h1>
			<p>
				Four cards on the page, each wrapping a
				<a href="/components/chart">Chart</a>
				of a different type: bar, line, area, and a
				three-series area. Composes Chart and
				<a href="/components/card">Card</a>.
				Figures are inert (no live data). Same
				<code>/blocks/charts</code> route — not mixed into Dashboard.
				<code>src/components/blocks/Charts.svelte</code>.
			</p>
		</div>
		<BlockView>
			{#snippet preview()}
				<Charts />
			{/snippet}
			{#snippet code()}{snippet}{/snippet}
		</BlockView>
	</div>
</div>
