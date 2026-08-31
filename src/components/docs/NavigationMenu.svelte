<script>
	import { on_toggle, nav_enter } from '../ui/Place.svelte';

	const html = `<nav class="nav-menu" aria-label="Site">
	<button class="nav-menu-trigger" type="button" popovertarget="getting-started" aria-expanded="false">Getting started</button>
	<div id="getting-started" popover class="popover nav-menu-panel" data-side="bottom" data-align="start">
		<div class="nav-menu-grid">
			<a class="nav-menu-item" href="/install">
				<span class="nav-menu-item-title">Install</span>
				<p>Copy two CSS files and paste a snippet.</p>
			</a>
			<a class="nav-menu-item" href="/theming">
				<span class="nav-menu-item-title">Theming</span>
				<p>Color, radius, and the system font stack.</p>
			</a>
		</div>
	</div>
	<button class="nav-menu-trigger" type="button" popovertarget="components" aria-expanded="false">Components</button>
	<div id="components" popover class="popover nav-menu-panel" data-side="bottom" data-align="start">
		<div class="nav-menu-grid">
			<a class="nav-menu-item" href="/components/button">
				<span class="nav-menu-item-title">Button</span>
				<p>Default, outline, ghost, and the rest of the first-wave variants.</p>
			</a>
		</div>
	</div>
	<a class="nav-menu-link" href="/">Docs</a>
</nav>`;

	const imported = `<script>
	import { on_toggle, nav_enter } from './ui/Place.svelte';
<\/script>

<nav class="nav-menu" aria-label="Site">
	<button class="nav-menu-trigger" type="button" popovertarget="getting-started" aria-expanded="false" onmouseenter={nav_enter}>Getting started</button>
	<div id="getting-started" popover class="popover nav-menu-panel" data-side="bottom" data-align="start" ontoggle={on_toggle}>
		<div class="nav-menu-grid">
			<a class="nav-menu-item" href="/install">
				<span class="nav-menu-item-title">Install</span>
				<p>Copy two CSS files and paste a snippet.</p>
			</a>
			<a class="nav-menu-item" href="/theming">
				<span class="nav-menu-item-title">Theming</span>
				<p>Color, radius, and the system font stack.</p>
			</a>
		</div>
	</div>
	<button class="nav-menu-trigger" type="button" popovertarget="components" aria-expanded="false" onmouseenter={nav_enter}>Components</button>
	<div id="components" popover class="popover nav-menu-panel" data-side="bottom" data-align="start" ontoggle={on_toggle}>
		<div class="nav-menu-grid">
			<a class="nav-menu-item" href="/components/button">
				<span class="nav-menu-item-title">Button</span>
				<p>Default, outline, ghost, and the rest of the first-wave variants.</p>
			</a>
		</div>
	</div>
	<a class="nav-menu-link" href="/">Docs</a>
</nav>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Navigation menu</h1>
			<p>
				Site chrome: triggers open a wide popover of links, plus plain
				<code>.nav-menu-link</code> items. Paste the markup first. Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				(see <a href="/components/popover">Popover</a>).
				Opening one closes another (native auto popovers). With a panel
				open, hover moves to the next trigger.
				Not a command palette. Nested submenus are a
				<code>.menu</code> pattern (see
				<a href="/components/dropdown">Dropdown</a>), not a second overlay
				on this mega-menu.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<nav class="nav-menu" aria-label="Site">
					<button class="nav-menu-trigger" type="button" popovertarget="nav-start" aria-expanded="false" onmouseenter={nav_enter}>Getting started</button>
					<div id="nav-start" popover class="popover nav-menu-panel" data-side="bottom" data-align="start" ontoggle={on_toggle}>
						<div class="nav-menu-grid">
							<a class="nav-menu-item" href="/install">
								<span class="nav-menu-item-title">Install</span>
								<p>Copy two CSS files and paste a snippet.</p>
							</a>
							<a class="nav-menu-item" href="/theming">
								<span class="nav-menu-item-title">Theming</span>
								<p>Color, radius, and the system font stack.</p>
							</a>
						</div>
					</div>
					<button class="nav-menu-trigger" type="button" popovertarget="nav-components" aria-expanded="false" onmouseenter={nav_enter}>Components</button>
					<div id="nav-components" popover class="popover nav-menu-panel" data-side="bottom" data-align="start" ontoggle={on_toggle}>
						<div class="nav-menu-grid">
							<a class="nav-menu-item" href="/components/button">
								<span class="nav-menu-item-title">Button</span>
								<p>Default, outline, ghost, and the rest of the first-wave variants.</p>
							</a>
							<a class="nav-menu-item" href="/components/dialog">
								<span class="nav-menu-item-title">Dialog</span>
								<p>Native dialog with a Vega surface and backdrop.</p>
							</a>
							<a class="nav-menu-item" href="/components/dropdown">
								<span class="nav-menu-item-title">Dropdown</span>
								<p>A menu popover with shortcuts and a destructive item.</p>
							</a>
							<a class="nav-menu-item" href="/components/tooltip">
								<span class="nav-menu-item-title">Tooltip</span>
								<p>Hover or focus hint using a manual popover.</p>
							</a>
						</div>
					</div>
					<a class="nav-menu-link" href="/blocks/dashboard">Docs</a>
				</nav>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Markup</h2>
			<pre class="docs-code"><code>{html}</code></pre>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Imported</h2>
			<pre class="docs-code"><code>{imported}</code></pre>
		</div>
	</div>
</div>
