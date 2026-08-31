<script>
	let track;

	function step(dir) {
		track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
	}

	const snippet = `<script>
	let track;
	function step(dir) {
		track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
	}
<\/script>

<div class="carousel">
	<div class="carousel-track" bind:this={track} role="region" aria-label="Example slides">
		<div class="carousel-slide">
			<p>Slide 1 of 3</p>
			<p>Native overflow and CSS scroll-snap.</p>
		</div>
		<div class="carousel-slide">
			<p>Slide 2 of 3</p>
			<p>Prev and next call scrollBy.</p>
		</div>
		<div class="carousel-slide">
			<p>Slide 3 of 3</p>
			<p>One full slide at a time.</p>
		</div>
	</div>
	<button class="button button-outline button-icon carousel-prev" type="button" aria-label="Previous slide" onclick={() => step(-1)}>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
			<path d="m15 18-6-6 6-6"></path>
		</svg>
	</button>
	<button class="button button-outline button-icon carousel-next" type="button" aria-label="Next slide" onclick={() => step(1)}>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
			<path d="m9 18 6-6-6-6"></path>
		</svg>
	</button>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Carousel</h1>
			<p>
				<code>.carousel</code>, <code>.carousel-track</code>,
				<code>.carousel-slide</code>, then <code>.carousel-prev</code> /
				<code>.carousel-next</code> on outline icon buttons. The track is
				<code>overflow-x: auto</code> with <code>scroll-snap-type: x mandatory</code>.
				There is no wrapper. A few lines of <code>scrollBy</code> on the page
				(slide width) are enough — pasting that twice is painful, so the
				helper lives next to the markup.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="carousel">
					<div
						class="carousel-track"
						bind:this={track}
						role="region"
						aria-label="Example slides"
					>
						<div class="carousel-slide">
							<p>Slide 1 of 3</p>
							<p>Native overflow and CSS scroll-snap.</p>
						</div>
						<div class="carousel-slide">
							<p>Slide 2 of 3</p>
							<p>Prev and next call scrollBy.</p>
						</div>
						<div class="carousel-slide">
							<p>Slide 3 of 3</p>
							<p>One full slide at a time.</p>
						</div>
					</div>
					<button
						class="button button-outline button-icon carousel-prev"
						type="button"
						aria-label="Previous slide"
						onclick={() => step(-1)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="m15 18-6-6 6-6"></path>
						</svg>
					</button>
					<button
						class="button button-outline button-icon carousel-next"
						type="button"
						aria-label="Next slide"
						onclick={() => step(1)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="m9 18 6-6-6-6"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
