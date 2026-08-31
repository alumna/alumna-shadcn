<script>
	const snippet = `<div class="button-group">
	<button class="button button-outline" type="button">One</button>
	<button class="button button-outline" type="button">Two</button>
	<button class="button button-outline" type="button">Three</button>
</div>`;

	const with_input = `<div class="button-group" style="width: 100%">
	<span class="button-group-text"><label class="label" for="url">https://</label></span>
	<div class="input-group">
		<input class="input" id="url" placeholder="example">
	</div>
	<span class="button-group-text">.com</span>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Button group</h1>
			<p>
				<code>.button-group</code> shares borders and radii across sibling
				<code>.button</code>s, <code>.input-group</code>, and
				<code>.button-group-text</code>. Use outline (or mixed) variants.
				There is no wrapper.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#buttons">Buttons</a></li>
					<li><a href="#with-input-group">With input group</a></li>
				</ol>
			</nav>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="buttons">Buttons</h2>
			<div class="docs-preview">
				<div class="button-group">
					<button class="button button-outline" type="button">One</button>
					<button class="button button-outline" type="button">Two</button>
					<button class="button button-outline" type="button">Three</button>
				</div>
			</div>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="with-input-group">With input group</h2>
			<div class="docs-preview">
				<div class="button-group" style="width: 100%; max-width: 24rem">
					<span class="button-group-text"><label class="label" for="bg-url">https://</label></span>
					<div class="input-group">
						<input class="input" id="bg-url" placeholder="example">
					</div>
					<span class="button-group-text">.com</span>
				</div>
			</div>
			<pre class="docs-code"><code>{with_input}</code></pre>
		</div>
	</div>
</div>
