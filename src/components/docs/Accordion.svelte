<script>
	const multiple = `<div class="accordion">
	<details class="accordion-item" open>
		<summary class="accordion-trigger">Is it accessible?</summary>
		<div class="accordion-content">Yes. It uses native details and summary.</div>
	</details>
	<details class="accordion-item" open>
		<summary class="accordion-trigger">Can several stay open?</summary>
		<div class="accordion-content">Yes. With no name, each item is independent.</div>
	</details>
	<details class="accordion-item">
		<summary class="accordion-trigger">Is it styled?</summary>
		<div class="accordion-content">Yes. Vega chrome on top of the disclosure.</div>
	</details>
</div>`;

	const single = `<script>
	function exclusive(event) {
		const item = event.currentTarget;
		if (!item.open || !item.name) return;
		const root = item.closest('.accordion');
		for (const other of root.querySelectorAll('details[name="' + CSS.escape(item.name) + '"]')) {
			if (other !== item) other.open = false;
		}
	}
<\/script>

<div class="accordion">
	<details class="accordion-item" name="faq" open ontoggle={exclusive}>
		<summary class="accordion-trigger">One at a time?</summary>
		<div class="accordion-content">
			Give every item the same name. The browser closes the previous one.
			The toggle handler covers browsers that ignore name.
		</div>
	</details>
	<details class="accordion-item" name="faq" ontoggle={exclusive}>
		<summary class="accordion-trigger">Does it animate?</summary>
		<div class="accordion-content">
			Chevron always. Height uses ::details-content where the browser allows it.
		</div>
	</details>
</div>`;

	function exclusive(event) {
		const item = event.currentTarget;
		if (!item.open || !item.name)
			return;
		const root = item.closest('.accordion');
		for (const other of root.querySelectorAll('details[name="' + CSS.escape(item.name) + '"]')) {
			if (other !== item)
				other.open = false;
		}
	}
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Accordion</h1>
			<p>
				Native <code>&lt;details&gt;</code> / <code>&lt;summary&gt;</code>.
				Leave items unnamed to allow several open. Give them the same
				<code>name</code> to keep only one open (the previous panel closes).
				Height animates with <code>::details-content</code> when the browser supports it.
				There is no wrapper. Exclusive open is the <code>name</code> attribute plus the
				short <code>toggle</code> handler in the snippet.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#several-open">Several open</a></li>
					<li><a href="#one-at-a-time">One at a time</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="several-open">Several open</h2>
			<div class="docs-preview">
				<div class="accordion" style="max-width: 24rem">
					<details class="accordion-item" open>
						<summary class="accordion-trigger">Is it accessible?</summary>
						<div class="accordion-content">Yes. It uses native details and summary.</div>
					</details>
					<details class="accordion-item" open>
						<summary class="accordion-trigger">Can several stay open?</summary>
						<div class="accordion-content">Yes. With no name, each item is independent.</div>
					</details>
					<details class="accordion-item">
						<summary class="accordion-trigger">Is it styled?</summary>
						<div class="accordion-content">Yes. Vega chrome on top of the disclosure.</div>
					</details>
				</div>
			</div>
			<pre class="docs-code"><code>{multiple}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="one-at-a-time">One at a time</h2>
			<div class="docs-preview">
				<div class="accordion" style="max-width: 24rem">
					<details class="accordion-item" name="docs-faq" open ontoggle={exclusive}>
						<summary class="accordion-trigger">One at a time?</summary>
						<div class="accordion-content">
							Give every item the same <code>name</code>. The browser closes the previous one.
							A few lines of <code>toggle</code> code cover older browsers.
						</div>
					</details>
					<details class="accordion-item" name="docs-faq" ontoggle={exclusive}>
						<summary class="accordion-trigger">Does it animate?</summary>
						<div class="accordion-content">
							The chevron always rotates. Panel height uses <code>::details-content</code>
							where the browser allows it.
						</div>
					</details>
					<details class="accordion-item" name="docs-faq" ontoggle={exclusive}>
						<summary class="accordion-trigger">Can I close the last one?</summary>
						<div class="accordion-content">
							Yes. Clicking the open summary closes it, so none need stay open.
						</div>
					</details>
				</div>
			</div>
			<pre class="docs-code"><code>{single}</code></pre>
		</div>
	</div>
</div>
