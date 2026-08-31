<script>
	const slash = `<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
		<li><a href="/">Home</a></li>
		<li class="breadcrumb-sep" aria-hidden="true">/</li>
		<li><a href="/">Library</a></li>
		<li class="breadcrumb-sep" aria-hidden="true">/</li>
		<li aria-current="page">Data</li>
	</ol>
</nav>`;

	const chevron = `<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
		<li><a href="/">Build Your Application</a></li>
		<li class="breadcrumb-sep" aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="m9 6 6 6-6 6"></path>
			</svg>
		</li>
		<li aria-current="page">Dashboard</li>
	</ol>
</nav>`;

	const imported = `<script>
	import BreadcrumbSep from './ui/BreadcrumbSep.svelte';
<\/script>

<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
		<li><a href="/">Build Your Application</a></li>
		<BreadcrumbSep />
		<li aria-current="page">Dashboard</li>
	</ol>
</nav>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Breadcrumb</h1>
			<p>
				<code>&lt;nav aria-label="breadcrumb"&gt;</code> around an
				<code>ol.breadcrumb</code>. Current page uses <code>aria-current="page"</code>
				and is not a link. The separator is <code>.breadcrumb-sep</code> — a slash, or the
				chevron used in the dashboard block. Paste the markup first. The chevron SVG is
				the piece worth wrapping — copy
				<a href="src/components/ui/BreadcrumbSep.svelte"><code>src/components/ui/BreadcrumbSep.svelte</code></a>.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#slash">Slash</a></li>
					<li><a href="#chevron">Chevron</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="slash">Slash</h2>
			<div class="docs-preview">
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li><a href="/components/breadcrumb">Home</a></li>
						<li class="breadcrumb-sep" aria-hidden="true">/</li>
						<li><a href="/components/breadcrumb">Library</a></li>
						<li class="breadcrumb-sep" aria-hidden="true">/</li>
						<li aria-current="page">Data</li>
					</ol>
				</nav>
			</div>
			<pre class="docs-code"><code>{slash}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="chevron">Chevron</h2>
			<p>
				Same mark as the dashboard header. The preview is plain HTML.
			</p>
			<div class="docs-preview">
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li><a href="/blocks/dashboard">Build Your Application</a></li>
						<li class="breadcrumb-sep" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="m9 6 6 6-6 6"></path>
							</svg>
						</li>
						<li aria-current="page">Dashboard</li>
					</ol>
				</nav>
			</div>
			<pre class="docs-code"><code>{chevron}</code></pre>
			<p>
				Same chevron as an import from
				<a href="src/components/ui/BreadcrumbSep.svelte"><code>src/components/ui/BreadcrumbSep.svelte</code></a>:
			</p>
			<pre class="docs-code"><code>{imported}</code></pre>
		</div>
	</div>
</div>
