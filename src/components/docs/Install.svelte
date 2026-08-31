<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Install</h1>
			<p>
				Copy two CSS files. Link them in that order. Then paste markup.
			</p>
		</div>

		<ol class="docs-steps">
			<li>Copy <code>alumna.css</code> from <a href="https://github.com/alumna/alumna-css">alumna-css</a> into <code>src/static/css/</code>.</li>
			<li>Copy <code>alumna-shadcn.css</code> from this project into <code>src/static/css/</code>.</li>
			<li>Link both from <code>src/index.html</code>, in that order:</li>
		</ol>
		<pre class="docs-code"><code>&lt;link rel="stylesheet" href="/css/alumna.css"&gt;
&lt;link rel="stylesheet" href="/css/alumna-shadcn.css"&gt;</code></pre>
		<p>
			Do not copy <code>site.css</code>. That file is only this docs site’s font.
			To use your own typeface, add <code>@font-face</code> in your CSS and list
			that family before the system fallbacks — see the snippet in the README.
		</p>
		<p>
			Light / Dark (first visit follows the OS as
			<code>themeSource=system</code>; a click persists as
			<code>user</code>; the control then becomes a Light / Dark /
			Reset to system menu until you reset), the FOUC inline
			script, and a copy-paste toggle live on
			<a href="/dark-light">Dark/Light Modes</a>. Color, chart, and font swatches
			live on <a href="/theming">Theming</a>. Authors who copy only the two CSS
			files do not get that script unless they paste it.
		</p>
		<p>
			Then paste markup into <code>src/components/</code> and point a route at it
			(or import it from a page). Optional thin Svelte wrappers live under
			<code>src/components/ui/</code> (Spinner, Card parts, breadcrumb chevron)
			when the markup is worth reusing. Overlay position lives in
			<code>src/components/ui/Place.svelte</code> (native <code>popover</code>).
		</p>

		<div class="cluster" style="margin-inline-start: auto">
			<a class="button" href="/components">Components →</a>
		</div>
	</div>
</div>
