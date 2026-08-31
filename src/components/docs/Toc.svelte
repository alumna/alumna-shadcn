<script>
	const two = `<nav class="toc" aria-label="On this page">
	<ol>
		<li>
			<a href="#two-levels" aria-current="true">Two levels</a>
			<ol>
				<li><a href="#two-levels-markup">Markup</a></li>
			</ol>
		</li>
		<li>
			<a href="#three-levels">Three levels</a>
			<ol>
				<li><a href="#three-levels-nested">Nested lists</a></li>
			</ol>
		</li>
	</ol>
</nav>`;

	const three = `<nav class="toc" aria-label="On this page">
	<ol>
		<li>
			<a href="#three-levels">Three levels</a>
			<ol>
				<li>
					<a href="#three-levels-nested">Nested lists</a>
					<ol>
						<li><a href="#three-levels-current">Current section</a></li>
					</ol>
				</li>
			</ol>
		</li>
		<li>
			<a href="#two-levels">Two levels</a>
			<ol>
				<li><a href="#two-levels-markup">Markup</a></li>
			</ol>
		</li>
	</ol>
</nav>`;

	const titled = `<nav class="toc" aria-label="On this page">
	<p class="toc-title">On This Page</p>
	<ol>
		<li><a href="#toc-title">Title</a></li>
		<li><a href="#current-section">Current section</a></li>
	</ol>
</nav>`;

	const spy = `function spy_toc(root, toc) {
	const links = [...toc.querySelectorAll('a[href^="#"]')];
	const pairs = [];
	for (const link of links) {
		const id = decodeURIComponent((link.hash || '').slice(1));
		if (!id)
			continue;
		const heading = root.querySelector('#' + CSS.escape(id));
		if (heading)
			pairs.push({ heading, link });
	}
	if (!pairs.length)
		return () => {};

	function set_current(link) {
		for (const item of links)
			item.removeAttribute('aria-current');
		if (link)
			link.setAttribute('aria-current', 'true');
	}

	function apply() {
		const top = root.getBoundingClientRect().top;
		let current = pairs[0].link;
		for (const { heading, link } of pairs) {
			if (heading.getBoundingClientRect().top - top <= 16)
				current = link;
		}
		set_current(current);
	}

	const observer = new IntersectionObserver(apply, {
		root,
		rootMargin: '0px 0px -70% 0px',
		threshold: 0
	});

	for (const { heading } of pairs)
		observer.observe(heading);

	function on_click(event) {
		const link = event.target.closest('a[href^="#"]');
		if (!link || !toc.contains(link))
			return;
		set_current(link);
	}

	toc.addEventListener('click', on_click);
	root.addEventListener('scroll', apply, { passive: true });
	apply();

	return () => {
		observer.disconnect();
		root.removeEventListener('scroll', apply);
		toc.removeEventListener('click', on_click);
	};
}

const toc = document.querySelector('nav.toc');
const root = document.querySelector('.docs-main');
const stop = spy_toc(root, toc);
// On route change: stop();`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Toc</h1>
			<p>
				<code>&lt;nav class="toc" aria-label="On this page"&gt;</code> around a
				nested <code>ol</code> or <code>ul</code>. Links are
				<code>#</code> ids on headings. Nested lists indent with
				padding, not a class named left. There is no wrapper.
				Optional <code>&lt;p class="toc-title"&gt;</code> above the list
				(not an <code>h2</code>). Title and links are
				<code>0.8rem</code>. No script: authors may set
				<code>aria-current="true"</code> on the matching link, or copy
				the spy snippet below.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li>
						<a href="#two-levels">Two levels</a>
						<ol>
							<li><a href="#two-levels-markup">Markup</a></li>
						</ol>
					</li>
					<li>
						<a href="#three-levels">Three levels</a>
						<ol>
							<li><a href="#three-levels-nested">Nested lists</a></li>
						</ol>
					</li>
					<li><a href="#toc-title">Title</a></li>
					<li><a href="#current-section">Current section</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="two-levels">Two levels</h2>
			<p>Max depth 2. A nested list under each top item.</p>
			<div class="docs-preview">
				<nav class="toc" aria-label="On this page">
					<ol>
						<li>
							<a href="#two-levels" aria-current="true">Two levels</a>
							<ol>
								<li><a href="#two-levels-markup">Markup</a></li>
							</ol>
						</li>
						<li>
							<a href="#three-levels">Three levels</a>
							<ol>
								<li><a href="#three-levels-nested">Nested lists</a></li>
							</ol>
						</li>
					</ol>
				</nav>
			</div>
			<pre class="docs-code"><code>{two}</code></pre>
			<h3 id="two-levels-markup">Markup</h3>
			<p>Paste the nested list. There is no wrapper.</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="three-levels">Three levels</h2>
			<p>Max depth 3. A separate tree, not one mega-list in the first example.</p>
			<div class="docs-preview">
				<nav class="toc" aria-label="On this page">
					<ol>
						<li>
							<a href="#three-levels">Three levels</a>
							<ol>
								<li>
									<a href="#three-levels-nested">Nested lists</a>
									<ol>
										<li><a href="#three-levels-current">Current section</a></li>
									</ol>
								</li>
							</ol>
						</li>
						<li>
							<a href="#two-levels">Two levels</a>
							<ol>
								<li><a href="#two-levels-markup">Markup</a></li>
							</ol>
						</li>
					</ol>
				</nav>
			</div>
			<pre class="docs-code"><code>{three}</code></pre>
			<h3 id="three-levels-nested">Nested lists</h3>
			<p>A second nested <code>ol</code>. Indent is <code>padding-inline-start</code>.</p>
			<h4 id="three-levels-current">Current section</h4>
			<p>
				Optional <code>aria-current="true"</code> on the matching link.
				The primitive does not highlight on scroll.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="toc-title">Title</h2>
			<p>
				Optional <code>p.toc-title</code> as the first child of
				<code>nav.toc</code>. Not an <code>h2</code>, and not a class
				named left, right, or center. The gap under the title is larger
				than <code>li + li</code> spacing. This docs site prepends
				“On This Page” when it parks a page TOC that has no title.
				Preview TOCs on this page stay in the article.
			</p>
			<div class="docs-preview">
				<nav class="toc" aria-label="On this page">
					<p class="toc-title">On This Page</p>
					<ol>
						<li><a href="#toc-title">Title</a></li>
						<li><a href="#current-section">Current section</a></li>
					</ol>
				</nav>
			</div>
			<pre class="docs-code"><code>{titled}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="current-section">Current section</h2>
			<p>
				The primitive is still copy-paste HTML. To highlight the
				heading in view, observe the scroll pane (here
				<code>.docs-main</code>) against the TOC <code>href</code>s and
				set <code>aria-current="true"</code> on the matching link —
				nested <code>h3</code> links too. Disconnect the observer on
				route change. Do not use a class named underline; the current
				mark is already styled. This docs site runs that spy on parked
				TOCs.
			</p>
			<pre class="docs-code"><code>{spy}</code></pre>
		</div>
	</div>
</div>
