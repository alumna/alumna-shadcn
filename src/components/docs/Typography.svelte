<script>
	const headings = `<h1>Product update</h1>
<h2>What shipped</h2>
<h3>Typography tokens</h3>
<h4>System stack</h4>`;

	const body = `<p>Body copy inherits <code>--foreground</code> from <code>body</code> and the system stack on <code>html, :host</code>.</p>
<p class="muted">Muted supporting copy. Same token as card descriptions and table captions.</p>`;

	const link_card = `<div class="card" style="max-width: 24rem">
	<div class="card-header">
		<div class="card-title">Invoice INV-001</div>
		<div class="card-description">Due 12 March 2026</div>
	</div>
	<div class="card-content">
		<a class="button button-link" href="/components/table">View the table</a>
	</div>
</div>`;

	const inline_code = `<p>Copy <code>alumna-shadcn.css</code> next to <code>alumna.css</code>.</p>`;

	const caption = `<div class="table-wrap">
	<table class="table">
		<caption>Two invoices this week</caption>
		<thead>
			<tr>
				<th scope="col">Invoice</th>
				<th scope="col">Amount</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>INV-001</td>
				<td>$250.00</td>
			</tr>
			<tr>
				<td>INV-002</td>
				<td>$150.00</td>
			</tr>
		</tbody>
	</table>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Typography</h1>
			<p>
				Samples of type, not a class zoo. The library sets the system UI
				stack on <code>html, :host</code> and ships
				<code>--text-xs</code> through <code>--text-2xl</code>.
				There is no heading scale and no <code>@font-face</code> in
				<code>alumna-shadcn.css</code>. Ubuntu Sans on this site lives in
				<code>site.css</code> only. Heading sizes for docs titles
				(<code>.docs-main h1</code>) are site-only — do not copy them.
				There is no wrapper.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#headings">Headings</a></li>
					<li><a href="#body-and-muted">Body and muted</a></li>
					<li><a href="#link-in-a-card">Link in a card</a></li>
					<li><a href="#inline-code">Inline code</a></li>
					<li><a href="#table-caption">Table caption</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="headings">Headings</h2>
			<p>
				Raw <code>h1</code>–<code>h4</code>. This preview picks up this
				docs site’s <code>.docs-main</code> heading sizes from
				<code>site.css</code>. In an app, apply
				<code>--text-2xl</code> … <code>--text-sm</code> if you want Vega
				sizes.
			</p>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<h1>Product update</h1>
					<h2>What shipped</h2>
					<h3>Typography tokens</h3>
					<h4>System stack</h4>
				</div>
			</div>
			<pre class="docs-code"><code>{headings}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="body-and-muted">Body and muted</h2>
			<p>
				Body inherits <code>--foreground</code>.
				<code>.muted</code> is <code>color: var(--muted-foreground)</code>
				— the same token as <code>.card-description</code>,
				<code>.field-description</code>, and <code>.table caption</code>.
			</p>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<p style="color: var(--foreground)">Body copy inherits <code>--foreground</code> from <code>body</code> and the system stack on <code>html, :host</code>.</p>
					<p class="muted">Muted supporting copy. Same token as card descriptions and table captions.</p>
				</div>
			</div>
			<pre class="docs-code"><code>{body}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="link-in-a-card">Link in a card</h2>
			<p>
				A text link inside <code>.card</code>.
				<code>.button.button-link</code> is the library treatment
				(generic <code>a</code> is reset by alumna.css).
			</p>
			<div class="docs-preview">
				<div class="card" style="max-width: 24rem">
					<div class="card-header">
						<div class="card-title">Invoice INV-001</div>
						<div class="card-description">Due 12 March 2026</div>
					</div>
					<div class="card-content">
						<a class="button button-link" href="/components/table">View the table</a>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{link_card}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="inline-code">Inline code</h2>
			<p>
				Native <code>&lt;code&gt;</code>. The chip on this page is
				<code>.docs-main code</code> in <code>site.css</code> — authors
				who copy the two library files do not get that chip.
			</p>
			<div class="docs-preview">
				<p style="color: var(--foreground)">Copy <code>alumna-shadcn.css</code> next to <code>alumna.css</code>.</p>
			</div>
			<pre class="docs-code"><code>{inline_code}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="table-caption">Table caption</h2>
			<p>
				<code>.table caption</code> is already
				<code>--text-sm</code> and <code>--muted-foreground</code>.
			</p>
			<div class="docs-preview">
				<div class="table-wrap">
					<table class="table">
						<caption>Two invoices this week</caption>
						<thead>
							<tr>
								<th scope="col">Invoice</th>
								<th scope="col">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>INV-001</td>
								<td>$250.00</td>
							</tr>
							<tr>
								<td>INV-002</td>
								<td>$150.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<pre class="docs-code"><code>{caption}</code></pre>
		</div>
	</div>
</div>
