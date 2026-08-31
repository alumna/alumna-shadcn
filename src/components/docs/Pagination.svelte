<script>
	const snippet = `<nav class="pagination" aria-label="Pagination">
	<button class="button button-outline button-sm" type="button">Previous</button>
	<button class="button button-sm" type="button" aria-current="page">1</button>
	<button class="button button-outline button-sm" type="button">2</button>
	<button class="button button-outline button-sm" type="button">3</button>
	<button class="button button-outline button-sm" type="button">Next</button>
</nav>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Pagination</h1>
			<p>
				<code>&lt;nav class="pagination"&gt;</code> of small buttons.
				<code>aria-current="page"</code> on the current page. Use
				<code>&lt;a class="button"&gt;</code> when the pages are real URLs.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<nav class="pagination" aria-label="Pagination">
					<button class="button button-outline button-sm" type="button">Previous</button>
					<button class="button button-sm" type="button" aria-current="page">1</button>
					<button class="button button-outline button-sm" type="button">2</button>
					<button class="button button-outline button-sm" type="button">3</button>
					<button class="button button-outline button-sm" type="button">Next</button>
				</nav>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
