<script>
	const minimal_neutral = `/* Minimal Neutral — Light. Load after alumna-shadcn.css. */
:root {
	color-scheme: light;

	--background: oklch(1 0 0);
	--foreground: oklch(0.145 0 0);
	--card: oklch(0.995 0 0);
	--card-foreground: oklch(0.145 0 0);
	--popover: oklch(1 0 0);
	--popover-foreground: oklch(0.145 0 0);
	--primary: oklch(0.205 0 0);
	--primary-foreground: oklch(0.985 0 0);
	--secondary: oklch(0.87 0 0);
	--secondary-foreground: oklch(0.145 0 0);
	--muted: oklch(0.95 0 0);
	--muted-foreground: oklch(0.556 0 0);
	--accent: oklch(0.95 0 0);
	--accent-foreground: oklch(0.205 0 0);
	--destructive: oklch(0.577 0.245 27.325);
	--border: oklch(0.95 0 0);
	--input: oklch(0.97 0 0);
	--ring: oklch(0.708 0 0);
	--chart-1: oklch(0.81 0.1 252);
	--chart-2: oklch(0.62 0.19 260);
	--chart-3: oklch(0.55 0.22 263);
	--chart-4: oklch(0.49 0.22 264);
	--chart-5: oklch(0.42 0.18 266);

	--sidebar: oklch(0.985 0 0);
	--sidebar-foreground: oklch(0.145 0 0);
	--sidebar-primary: oklch(0.205 0 0);
	--sidebar-primary-foreground: oklch(0.985 0 0);
	--sidebar-accent: oklch(0.97 0 0);
	--sidebar-accent-foreground: oklch(0.205 0 0);
	--sidebar-border: oklch(0.922 0 0);
	--sidebar-ring: oklch(0.708 0 0);

	--radius: 1rem;
}

html.light {
	color-scheme: light;
}

/* Minimal Neutral — Dark. FOUC / toggle: html.dark */
html.dark {
	color-scheme: dark;

	--background: oklch(0.205 0 0);
	--foreground: oklch(0.985 0 0);
	--card: oklch(0.165 0 0);
	--card-foreground: oklch(0.985 0 0);
	--popover: oklch(0.205 0 0);
	--popover-foreground: oklch(0.985 0 0);
	--primary: oklch(0.922 0 0);
	--primary-foreground: oklch(0.205 0 0);
	--secondary: oklch(0.269 0 0);
	--secondary-foreground: oklch(0.985 0 0);
	--muted: oklch(0.269 0 0);
	--muted-foreground: oklch(0.708 0 0);
	--accent: oklch(0.371 0 0);
	--accent-foreground: oklch(0.985 0 0);
	--destructive: oklch(0.704 0.191 22.216);
	--border: oklch(0.269 0 0);
	--input: oklch(0.269 0 0);
	--ring: oklch(0.556 0 0);
	--chart-1: oklch(0.81 0.1 252);
	--chart-2: oklch(0.62 0.19 260);
	--chart-3: oklch(0.55 0.22 263);
	--chart-4: oklch(0.49 0.22 264);
	--chart-5: oklch(0.42 0.18 266);

	--sidebar: oklch(0.269 0 0);
	--sidebar-foreground: oklch(0.985 0 0);
	--sidebar-primary: oklch(0.488 0.243 264.376);
	--sidebar-primary-foreground: oklch(0.985 0 0);
	--sidebar-accent: oklch(0.269 0 0);
	--sidebar-accent-foreground: oklch(0.985 0 0);
	--sidebar-border: oklch(0.275 0 0);
	--sidebar-ring: oklch(0.439 0 0);

	--control-fill: color-mix(in oklab, var(--input) 30%, transparent);
	--invalid-shadow: 0 0 0 3px color-mix(in oklab, var(--destructive) 40%, transparent);
}

/* Minimal Neutral — Dark when html has no class (OS follow) */
@media (prefers-color-scheme: dark) {
	html:not(.light) {
		color-scheme: dark;

		--background: oklch(0.205 0 0);
		--foreground: oklch(0.985 0 0);
		--card: oklch(0.165 0 0);
		--card-foreground: oklch(0.985 0 0);
		--popover: oklch(0.205 0 0);
		--popover-foreground: oklch(0.985 0 0);
		--primary: oklch(0.922 0 0);
		--primary-foreground: oklch(0.205 0 0);
		--secondary: oklch(0.269 0 0);
		--secondary-foreground: oklch(0.985 0 0);
		--muted: oklch(0.269 0 0);
		--muted-foreground: oklch(0.708 0 0);
		--accent: oklch(0.371 0 0);
		--accent-foreground: oklch(0.985 0 0);
		--destructive: oklch(0.704 0.191 22.216);
		--border: oklch(0.269 0 0);
		--input: oklch(0.269 0 0);
		--ring: oklch(0.556 0 0);
		--chart-1: oklch(0.81 0.1 252);
		--chart-2: oklch(0.62 0.19 260);
		--chart-3: oklch(0.55 0.22 263);
		--chart-4: oklch(0.49 0.22 264);
		--chart-5: oklch(0.42 0.18 266);

		--sidebar: oklch(0.269 0 0);
		--sidebar-foreground: oklch(0.985 0 0);
		--sidebar-primary: oklch(0.488 0.243 264.376);
		--sidebar-primary-foreground: oklch(0.985 0 0);
		--sidebar-accent: oklch(0.269 0 0);
		--sidebar-accent-foreground: oklch(0.985 0 0);
		--sidebar-border: oklch(0.275 0 0);
		--sidebar-ring: oklch(0.439 0 0);

		--control-fill: color-mix(in oklab, var(--input) 30%, transparent);
		--invalid-shadow: 0 0 0 3px color-mix(in oklab, var(--destructive) 40%, transparent);
	}
}`;

	const professional = `/* Professional — Light. Load after alumna-shadcn.css. */
:root {
	color-scheme: light;

	--background: oklch(1 0 0);
	--foreground: oklch(0.1371 0.036 258.5258);
	--card: oklch(1 0 0);
	--card-foreground: oklch(0.1371 0.036 258.5258);
	--popover: oklch(1 0 0);
	--popover-foreground: oklch(0.1371 0.036 258.5258);
	--primary: oklch(0.546 0.2153 262.8719);
	--primary-foreground: oklch(0.9838 0.0035 247.8583);
	--secondary: oklch(0.9684 0.0068 247.8951);
	--secondary-foreground: oklch(0.2079 0.0399 265.7275);
	--muted: oklch(0.9684 0.0068 247.8951);
	--muted-foreground: oklch(0.5547 0.0407 257.4404);
	--accent: oklch(0.9684 0.0068 247.8951);
	--accent-foreground: oklch(0.2079 0.0399 265.7275);
	--destructive: oklch(0.6368 0.2078 25.3259);
	--border: oklch(0.929 0.0126 255.5317);
	--input: oklch(0.929 0.0126 255.5317);
	--ring: oklch(0.546 0.2153 262.8719);
	--chart-1: oklch(0.546 0.2153 262.8719);
	--chart-2: oklch(0.7211 0.1415 253.1015);
	--chart-3: oklch(0.6325 0.1843 258.636);
	--chart-4: oklch(0.8117 0.097 249.0979);
	--chart-5: oklch(0.8829 0.0573 251.9139);

	--sidebar: oklch(0.9838 0.0035 247.8583);
	--sidebar-foreground: oklch(0.2079 0.0399 265.7275);
	--sidebar-primary: oklch(0.546 0.2153 262.8719);
	--sidebar-primary-foreground: oklch(1 0 0);
	--sidebar-accent: oklch(0.929 0.0126 255.5317);
	--sidebar-accent-foreground: oklch(0.546 0.2153 262.8719);
	--sidebar-border: oklch(0.929 0.0126 255.5317);
	--sidebar-ring: oklch(0.546 0.2153 262.8719);

	--radius: 0.375rem;
}

html.light {
	color-scheme: light;
}

/* Professional — Dark. FOUC / toggle: html.dark */
html.dark {
	color-scheme: dark;

	--background: oklch(0.1371 0.036 258.5258);
	--foreground: oklch(0.9838 0.0035 247.8583);
	--card: oklch(0.1371 0.036 258.5258);
	--card-foreground: oklch(0.9838 0.0035 247.8583);
	--popover: oklch(0.1371 0.036 258.5258);
	--popover-foreground: oklch(0.9838 0.0035 247.8583);
	--primary: oklch(0.6232 0.1879 259.7964);
	--primary-foreground: oklch(0.2079 0.0399 265.7275);
	--secondary: oklch(0.28 0.0369 259.974);
	--secondary-foreground: oklch(0.9838 0.0035 247.8583);
	--muted: oklch(0.28 0.0369 259.974);
	--muted-foreground: oklch(0.7107 0.0351 256.7877);
	--accent: oklch(0.28 0.0369 259.974);
	--accent-foreground: oklch(0.9838 0.0035 247.8583);
	--destructive: oklch(0.704 0.191 25.3259);
	--border: oklch(0.28 0.0369 259.974);
	--input: oklch(0.28 0.0369 259.974);
	--ring: oklch(0.4878 0.217 264.3876);
	--chart-1: oklch(0.4878 0.217 264.3876);
	--chart-2: oklch(0.5449 0.2154 262.7414);
	--chart-3: oklch(0.6776 0.1481 238.1044);
	--chart-4: oklch(0.3752 0.0394 256.8467);
	--chart-5: oklch(0.4691 0.1926 264.5776);

	--sidebar: oklch(0.1371 0.036 258.5258);
	--sidebar-foreground: oklch(0.9838 0.0035 247.8583);
	--sidebar-primary: oklch(0.6232 0.1879 259.7964);
	--sidebar-primary-foreground: oklch(0.1371 0.036 258.5258);
	--sidebar-accent: oklch(0.28 0.0369 259.974);
	--sidebar-accent-foreground: oklch(0.9838 0.0035 247.8583);
	--sidebar-border: oklch(0.28 0.0369 259.974);
	--sidebar-ring: oklch(0.4878 0.217 264.3876);

	--control-fill: color-mix(in oklab, var(--input) 30%, transparent);
	--invalid-shadow: 0 0 0 3px color-mix(in oklab, var(--destructive) 40%, transparent);
}

/* Professional — Dark when html has no class (OS follow) */
@media (prefers-color-scheme: dark) {
	html:not(.light) {
		color-scheme: dark;

		--background: oklch(0.1371 0.036 258.5258);
		--foreground: oklch(0.9838 0.0035 247.8583);
		--card: oklch(0.1371 0.036 258.5258);
		--card-foreground: oklch(0.9838 0.0035 247.8583);
		--popover: oklch(0.1371 0.036 258.5258);
		--popover-foreground: oklch(0.9838 0.0035 247.8583);
		--primary: oklch(0.6232 0.1879 259.7964);
		--primary-foreground: oklch(0.2079 0.0399 265.7275);
		--secondary: oklch(0.28 0.0369 259.974);
		--secondary-foreground: oklch(0.9838 0.0035 247.8583);
		--muted: oklch(0.28 0.0369 259.974);
		--muted-foreground: oklch(0.7107 0.0351 256.7877);
		--accent: oklch(0.28 0.0369 259.974);
		--accent-foreground: oklch(0.9838 0.0035 247.8583);
		--destructive: oklch(0.704 0.191 25.3259);
		--border: oklch(0.28 0.0369 259.974);
		--input: oklch(0.28 0.0369 259.974);
		--ring: oklch(0.4878 0.217 264.3876);
		--chart-1: oklch(0.4878 0.217 264.3876);
		--chart-2: oklch(0.5449 0.2154 262.7414);
		--chart-3: oklch(0.6776 0.1481 238.1044);
		--chart-4: oklch(0.3752 0.0394 256.8467);
		--chart-5: oklch(0.4691 0.1926 264.5776);

		--sidebar: oklch(0.1371 0.036 258.5258);
		--sidebar-foreground: oklch(0.9838 0.0035 247.8583);
		--sidebar-primary: oklch(0.6232 0.1879 259.7964);
		--sidebar-primary-foreground: oklch(0.1371 0.036 258.5258);
		--sidebar-accent: oklch(0.28 0.0369 259.974);
		--sidebar-accent-foreground: oklch(0.9838 0.0035 247.8583);
		--sidebar-border: oklch(0.28 0.0369 259.974);
		--sidebar-ring: oklch(0.4878 0.217 264.3876);

		--control-fill: color-mix(in oklab, var(--input) 30%, transparent);
		--invalid-shadow: 0 0 0 3px color-mix(in oklab, var(--destructive) 40%, transparent);
	}
}`;

	const tiesen = `/* Tiesen — Light. Load after alumna-shadcn.css. */
:root {
	color-scheme: light;

	--background: oklch(0.9851 0 0);
	--foreground: oklch(0 0 0);
	--card: oklch(1 0 267.51);
	--card-foreground: oklch(0.2103 0 267.51);
	--popover: oklch(1 0 0);
	--popover-foreground: oklch(0 0 0);
	--primary: oklch(0.5144 0.1605 267.44);
	--primary-foreground: oklch(0.97 0.014 254.604);
	--secondary: oklch(0.94 0 0);
	--secondary-foreground: oklch(0.25 0 0);
	--muted: oklch(0.97 0 0);
	--muted-foreground: oklch(0.44 0 0);
	--accent: oklch(0.9214 0.0248 257.65);
	--accent-foreground: oklch(0.2571 0.1161 272.24);
	--destructive: oklch(0.58 0.22 27);
	--border: oklch(0.92 0 0);
	--input: oklch(0.94 0 0);
	--ring: oklch(0.5144 0.1605 267.44);
	--chart-1: oklch(0.9214 0.0248 257.65);
	--chart-2: oklch(0.7597 0.0804 267.01);
	--chart-3: oklch(0.6083 0.1247 272.72);
	--chart-4: oklch(0.5144 0.1605 267.44);
	--chart-5: oklch(0.2571 0.1161 272.24);

	--sidebar: oklch(1 0 267.51);
	--sidebar-foreground: oklch(0 0 0);
	--sidebar-primary: oklch(0.5144 0.1605 267.44);
	--sidebar-primary-foreground: oklch(0.97 0.014 254.604);
	--sidebar-accent: oklch(0.9214 0.0248 257.65);
	--sidebar-accent-foreground: oklch(0.2571 0.1161 272.24);
	--sidebar-border: oklch(0.92 0 0);
	--sidebar-ring: oklch(0.5144 0.1605 267.44);

	--radius: 0.5rem;
}

html.light {
	color-scheme: light;
}

/* Tiesen — Dark. FOUC / toggle: html.dark */
html.dark {
	color-scheme: dark;

	--background: oklch(0 0 0);
	--foreground: oklch(1 0 0);
	--card: oklch(0.2103 0 267.51);
	--card-foreground: oklch(0.9461 0 0);
	--popover: oklch(0.2103 0 267.51);
	--popover-foreground: oklch(1 0 0);
	--primary: oklch(0.6144 0.1605 267.44);
	--primary-foreground: oklch(0.97 0.014 254.604);
	--secondary: oklch(0.25 0 0);
	--secondary-foreground: oklch(0.94 0 0);
	--muted: oklch(0.23 0 0);
	--muted-foreground: oklch(0.72 0 0);
	--accent: oklch(0.32 0 0);
	--accent-foreground: oklch(0.9214 0.0248 257.65);
	--destructive: oklch(0.704 0.191 22.216);
	--border: oklch(0.26 0 0);
	--input: oklch(0.32 0 0);
	--ring: oklch(0.5144 0.1605 267.44);
	--chart-1: oklch(0.9214 0.0248 257.65);
	--chart-2: oklch(0.7597 0.0804 267.01);
	--chart-3: oklch(0.6083 0.1247 272.72);
	--chart-4: oklch(0.5144 0.1605 267.44);
	--chart-5: oklch(0.2571 0.1161 272.24);

	--sidebar: oklch(0 0 0);
	--sidebar-foreground: oklch(1 0 0);
	--sidebar-primary: oklch(0.6144 0.1605 267.44);
	--sidebar-primary-foreground: oklch(0.97 0.014 254.604);
	--sidebar-accent: oklch(0.32 0 0);
	--sidebar-accent-foreground: oklch(0.9214 0.0248 257.65);
	--sidebar-border: oklch(0.26 0 0);
	--sidebar-ring: oklch(0.5144 0.1605 267.44);

	--control-fill: color-mix(in oklab, var(--input) 30%, transparent);
	--invalid-shadow: 0 0 0 3px color-mix(in oklab, var(--destructive) 40%, transparent);
}

/* Tiesen — Dark when html has no class (OS follow) */
@media (prefers-color-scheme: dark) {
	html:not(.light) {
		color-scheme: dark;

		--background: oklch(0 0 0);
		--foreground: oklch(1 0 0);
		--card: oklch(0.2103 0 267.51);
		--card-foreground: oklch(0.9461 0 0);
		--popover: oklch(0.2103 0 267.51);
		--popover-foreground: oklch(1 0 0);
		--primary: oklch(0.6144 0.1605 267.44);
		--primary-foreground: oklch(0.97 0.014 254.604);
		--secondary: oklch(0.25 0 0);
		--secondary-foreground: oklch(0.94 0 0);
		--muted: oklch(0.23 0 0);
		--muted-foreground: oklch(0.72 0 0);
		--accent: oklch(0.32 0 0);
		--accent-foreground: oklch(0.9214 0.0248 257.65);
		--destructive: oklch(0.704 0.191 22.216);
		--border: oklch(0.26 0 0);
		--input: oklch(0.32 0 0);
		--ring: oklch(0.5144 0.1605 267.44);
		--chart-1: oklch(0.9214 0.0248 257.65);
		--chart-2: oklch(0.7597 0.0804 267.01);
		--chart-3: oklch(0.6083 0.1247 272.72);
		--chart-4: oklch(0.5144 0.1605 267.44);
		--chart-5: oklch(0.2571 0.1161 272.24);

		--sidebar: oklch(0 0 0);
		--sidebar-foreground: oklch(1 0 0);
		--sidebar-primary: oklch(0.6144 0.1605 267.44);
		--sidebar-primary-foreground: oklch(0.97 0.014 254.604);
		--sidebar-accent: oklch(0.32 0 0);
		--sidebar-accent-foreground: oklch(0.9214 0.0248 257.65);
		--sidebar-border: oklch(0.26 0 0);
		--sidebar-ring: oklch(0.5144 0.1605 267.44);

		--control-fill: color-mix(in oklab, var(--input) 30%, transparent);
		--invalid-shadow: 0 0 0 3px color-mix(in oklab, var(--destructive) 40%, transparent);
	}
}`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Theming</h1>
			<p>
				Unprefixed shadcn names. Light is <code>:root</code>.
				<code>html.dark</code> / <code>html.light</code> override.
				With no class, the sheet follows <code>prefers-color-scheme</code>
				(authors who never run the FOUC script).
			</p>
			<p>
				Dark/Light FOUC and the theme toggle live on
				<a href="/dark-light">Dark/Light Modes</a>.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#color">Color</a></li>
					<li><a href="#chart">Chart</a></li>
					<li><a href="#font">Font</a></li>
					<li><a href="#aspect-ratio">Aspect ratio</a></li>
					<li>
						<a href="#complete-themes">Complete themes</a>
						<ol>
							<li><a href="#minimal-neutral">Minimal Neutral</a></li>
							<li><a href="#professional">Professional</a></li>
							<li><a href="#tiesen">Tiesen</a></li>
						</ol>
					</li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="color">Color</h2>
			<div class="cluster">
				<div class="docs-swatch" style="background: var(--background); color: var(--foreground); box-shadow: var(--ring-hairline)">background</div>
				<div class="docs-swatch" style="background: var(--primary); color: var(--primary-foreground)">primary</div>
				<div class="docs-swatch" style="background: var(--secondary); color: var(--secondary-foreground)">secondary</div>
				<div class="docs-swatch" style="background: var(--muted); color: var(--muted-foreground)">muted</div>
				<div class="docs-swatch docs-swatch-destructive">destructive</div>
				<div class="docs-swatch" style="background: var(--sidebar); color: var(--sidebar-foreground); box-shadow: var(--ring-hairline)">sidebar</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="chart">Chart</h2>
			<p>
				<code>--chart-1</code> … <code>--chart-5</code> are tokens only.
				The chart on <a href="/components/chart"><code>/components/chart</code></a> uses them.
			</p>
			<div class="cluster">
				<div class="docs-swatch" style="background: var(--chart-1); color: oklch(0.145 0 0)">chart-1</div>
				<div class="docs-swatch" style="background: var(--chart-2); color: oklch(0.985 0 0)">chart-2</div>
				<div class="docs-swatch" style="background: var(--chart-3); color: oklch(0.985 0 0)">chart-3</div>
				<div class="docs-swatch" style="background: var(--chart-4); color: oklch(0.985 0 0)">chart-4</div>
				<div class="docs-swatch" style="background: var(--chart-5); color: oklch(0.985 0 0)">chart-5</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.5rem">
			<h2 id="font">Font</h2>
			<p>
				Library CSS uses the system UI stack. Do not copy <code>site.css</code>
				(Ubuntu Sans is only this docs site). Put your family in front of the
				fallbacks in your own CSS.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.5rem">
			<h2 id="aspect-ratio">Aspect ratio</h2>
			<p>
				<code>aspect-ratio</code> is a CSS property, not a component.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.5rem">
			<h2 id="complete-themes">Complete themes</h2>
			<p>
				A complete color theme is a Light sheet plus a Dark sheet of the
				same unprefixed CSS variables this library already uses. Load your
				overrides after <code>alumna-shadcn.css</code>. Do not rename
				tokens. This is copy-paste CSS, not a theme builder.
			</p>
			<p>
				This docs site’s FOUC script always adds a class
				(<code>html.light</code> or <code>html.dark</code>). Put Light
				tokens on <code>:root</code>. Pair them with Dark tokens on
				<code>html.dark</code> so a class switch works.
				<code>html.light</code> only needs <code>color-scheme: light</code>
				— Light colors already live on <code>:root</code>, matching the
				library. The class and storage story is on
				<a href="/dark-light">Dark/Light Modes</a>.
			</p>
			<p>
				Authors who never run that script get the library’s “no class → OS”
				path. Copy the same Dark tokens into
				<code>@media (prefers-color-scheme: dark)</code> targeting
				<code>html:not(.light)</code> so Dark still applies when
				<code>html</code> has no class.
			</p>
			<p>Override these groups:</p>
			<ul>
				<li>
					Color: <code>--background</code> through <code>--ring</code>
					(canvas, card, popover, primary, secondary, muted, accent,
					destructive, border, input).
				</li>
				<li>
					Sidebar chrome, if you want it: <code>--sidebar</code> through
					<code>--sidebar-ring</code>.
				</li>
				<li>Charts: <code>--chart-1</code> … <code>--chart-5</code>.</li>
				<li>
					Radius: <code>--radius</code> (the <code>--radius-sm</code> …
					<code>--radius-4xl</code> calcs follow).
				</li>
			</ul>
			<p>
				The full name list is the named blocks at the top of
				<code>src/static/css/alumna-shadcn.css</code>:
				<code>/* 1. Tokens — light */</code> (<code>:root</code>) and
				<code>/* 2. Tokens — dark (html.dark, or OS when html is not .light) */</code>
				(<code>html.dark</code>, then the <code>html:not(.light)</code>
				media query). Copy the names; assign your own <code>oklch()</code>
				values. Do not paste that whole Vega sheet into the page or into
				your app CSS. Spacing, type scale, and shadows can stay.
			</p>
			<p>
				A shadcn / Tailwind theme is not a drop-in. Drop
				<code>@import "tailwindcss"</code>, <code>@theme</code>,
				<code>@layer</code>, and <code>.dark</code>. Keep the unprefixed
				color tokens. Skip <code>--destructive-foreground</code> (this
				library tints from <code>--destructive</code> alone), font-family
				tokens (system stack in the library CSS), and Tailwind shadow /
				tracking utilities. Use <code>html.dark</code>, not a nested
				<code>.dark *</code> variant.
			</p>
			<p>
				The samples below are scoped to this page’s
				<code>.docs-preview</code> (docs-only classes in
				<code>site.css</code>). They do not restyle the docs nav or top
				bar. Toggle Light/Dark to see each pair.
			</p>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h3 id="minimal-neutral">Minimal Neutral</h3>
			<p>
				Achromatic near-Vega canvas, larger radius
				<code>1rem</code>. Light on <code>:root</code>; Dark on
				<code>html.dark</code> and the OS media query. Dark inverts
				primary to pale gray; the card is darker than the page;
				sidebar primary stays a saturated blue.
			</p>
			<div class="docs-preview docs-theme-minimal-neutral">
				<div class="cluster" style="--cluster-gap: 1rem; align-items: stretch">
					<aside class="sidebar" style="--sidebar-width: 10rem; border-radius: var(--radius-lg)">
						<div class="sidebar-header">
							<p class="sidebar-label">Minimal Neutral</p>
						</div>
						<div class="sidebar-content">
							<button class="sidebar-link" type="button" data-active>Inbox</button>
							<button class="sidebar-link" type="button">Drafts</button>
						</div>
					</aside>
					<div class="card" style="flex: 1 1 14rem">
						<div class="card-header">
							<div class="card-title">Minimal Neutral theme</div>
							<div class="card-description">Light and Dark tokens, scoped to this preview.</div>
						</div>
						<div class="card-content">
							<div class="stack" style="--stack-gap: 0.75rem">
								<div class="field">
									<label class="label" for="minimal-neutral-note">Note</label>
									<input class="input" id="minimal-neutral-note" type="text" value="Near-black primary" readonly>
								</div>
								<div class="cluster">
									<div class="docs-swatch" style="background: var(--chart-1); color: oklch(0.145 0 0)">chart-1</div>
									<div class="docs-swatch" style="background: var(--chart-2); color: oklch(0.985 0 0)">chart-2</div>
									<div class="docs-swatch" style="background: var(--chart-3); color: oklch(0.985 0 0)">chart-3</div>
									<div class="docs-swatch" style="background: var(--chart-4); color: oklch(0.985 0 0)">chart-4</div>
									<div class="docs-swatch" style="background: var(--chart-5); color: oklch(0.985 0 0)">chart-5</div>
								</div>
							</div>
						</div>
						<div class="card-footer" style="gap: 0.5rem">
							<button class="button" type="button">Save</button>
							<button class="button button-outline" type="button">Cancel</button>
							<button class="button button-destructive" type="button">Delete</button>
						</div>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{minimal_neutral}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h3 id="professional">Professional</h3>
			<p>
				Saturated blue primary on a cool gray canvas, tighter radius
				(<code>0.375rem</code>). Light on <code>:root</code>; Dark on
				<code>html.dark</code> and the OS media query.
			</p>
			<div class="docs-preview docs-theme-professional">
				<div class="cluster" style="--cluster-gap: 1rem; align-items: stretch">
					<aside class="sidebar" style="--sidebar-width: 10rem; border-radius: var(--radius-lg)">
						<div class="sidebar-header">
							<p class="sidebar-label">Professional</p>
						</div>
						<div class="sidebar-content">
							<button class="sidebar-link" type="button" data-active>Inbox</button>
							<button class="sidebar-link" type="button">Drafts</button>
						</div>
					</aside>
					<div class="card" style="flex: 1 1 14rem">
						<div class="card-header">
							<div class="card-title">Professional theme</div>
							<div class="card-description">Light and Dark tokens, scoped to this preview.</div>
						</div>
						<div class="card-content">
							<div class="stack" style="--stack-gap: 0.75rem">
								<div class="field">
									<label class="label" for="professional-note">Note</label>
									<input class="input" id="professional-note" type="text" value="Blue primary" readonly>
								</div>
								<div class="cluster">
									<div class="docs-swatch" style="background: var(--chart-1); color: var(--primary-foreground)">chart-1</div>
									<div class="docs-swatch" style="background: var(--chart-2); color: var(--foreground)">chart-2</div>
									<div class="docs-swatch" style="background: var(--chart-3); color: var(--primary-foreground)">chart-3</div>
									<div class="docs-swatch" style="background: var(--chart-4); color: var(--foreground)">chart-4</div>
									<div class="docs-swatch" style="background: var(--chart-5); color: var(--foreground)">chart-5</div>
								</div>
							</div>
						</div>
						<div class="card-footer" style="gap: 0.5rem">
							<button class="button" type="button">Save</button>
							<button class="button button-outline" type="button">Cancel</button>
							<button class="button button-destructive" type="button">Delete</button>
						</div>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{professional}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h3 id="tiesen">Tiesen</h3>
			<p>
				Violet primary on near-white / black canvas, radius
				<code>0.5rem</code>. Same Light + Dark pairing as Professional.
			</p>
			<div class="docs-preview docs-theme-tiesen">
				<div class="cluster" style="--cluster-gap: 1rem; align-items: stretch">
					<aside class="sidebar" style="--sidebar-width: 10rem; border-radius: var(--radius-lg)">
						<div class="sidebar-header">
							<p class="sidebar-label">Tiesen</p>
						</div>
						<div class="sidebar-content">
							<button class="sidebar-link" type="button" data-active>Inbox</button>
							<button class="sidebar-link" type="button">Drafts</button>
						</div>
					</aside>
					<div class="card" style="flex: 1 1 14rem">
						<div class="card-header">
							<div class="card-title">Tiesen theme</div>
							<div class="card-description">Light and Dark tokens, scoped to this preview.</div>
						</div>
						<div class="card-content">
							<div class="stack" style="--stack-gap: 0.75rem">
								<div class="field">
									<label class="label" for="tiesen-note">Note</label>
									<input class="input" id="tiesen-note" type="text" value="Violet primary" readonly>
								</div>
								<div class="cluster">
									<div class="docs-swatch" style="background: var(--chart-1); color: var(--foreground)">chart-1</div>
									<div class="docs-swatch" style="background: var(--chart-2); color: var(--foreground)">chart-2</div>
									<div class="docs-swatch" style="background: var(--chart-3); color: var(--primary-foreground)">chart-3</div>
									<div class="docs-swatch" style="background: var(--chart-4); color: var(--primary-foreground)">chart-4</div>
									<div class="docs-swatch" style="background: var(--chart-5); color: var(--primary-foreground)">chart-5</div>
								</div>
							</div>
						</div>
						<div class="card-footer" style="gap: 0.5rem">
							<button class="button" type="button">Save</button>
							<button class="button button-outline" type="button">Cancel</button>
							<button class="button button-destructive" type="button">Delete</button>
						</div>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{tiesen}</code></pre>
		</div>
	</div>
</div>
