<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Introduction</h1>
			<p>
				alumna-shadcn is a CSS-first visual library for Alumna apps.
				It aims to give you a Vega-inspired look — buttons, cards,
				overlays, login and dashboard blocks — without Tailwind,
				TypeScript, or a component registry.
			</p>
			<p>
				HTML with classes is the public API. You paste markup. The
				code is open (MIT). Copy what you need.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.5rem">
			<h2>How it is organized</h2>
			<p>
				Two CSS files, then copy-paste HTML. <code>alumna.css</code>
				is invisible structure. <code>alumna-shadcn.css</code> is
				tokens and skins. Optional thin Svelte wrappers live under
				<code>src/components/ui/</code> when the markup is painful
				to paste twice (spinner SVG, card parts, breadcrumb chevron,
				overlay position in <code>Place.svelte</code>).
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.5rem">
			<h2>How to use it</h2>
			<p>
				Link the two stylesheets, paste a snippet into
				<code>src/components/</code>, and point a route at it (or
				import a wrapper). Browse Components and Blocks in the nav
				for previews. Do not copy <code>site.css</code> — that is
				this docs site’s font only.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.5rem">
			<h2>How it is distributed</h2>
			<p>
				You copy files. It is not an npm package and not
				<code>alumna add</code> — Alumna cannot install CSS that way
				today. The steps are on <a href="/install">Install</a>.
			</p>
		</div>

		<div class="cluster" style="margin-inline-start: auto">
			<a class="button" href="/install">Install →</a>
		</div>
	</div>
</div>
