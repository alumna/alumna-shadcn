<script>
	const demo = `<div class="card" style="max-width: 24rem">
	<div class="card-header">
		<div class="card-title">Login to your account</div>
		<div class="card-description">Enter your email below to login to your account.</div>
		<div class="card-action"><a class="button button-link" href="/">Sign up</a></div>
	</div>
	<div class="card-content">
		<div class="field-group">
			<div class="field">
				<label class="label" for="email">Email</label>
				<input class="input" id="email" type="email" placeholder="m@example.com">
			</div>
			<div class="field">
				<label class="label" for="password">Password</label>
				<input class="input" id="password" type="password">
			</div>
		</div>
	</div>
	<div class="card-footer" data-stack>
		<button class="button" type="button">Login</button>
		<button class="button button-outline" type="button">Login with Google</button>
	</div>
</div>`;

	const parts = `<script>
	import Card from './ui/card/Card.svelte';
	import CardHeader from './ui/card/CardHeader.svelte';
	import CardTitle from './ui/card/CardTitle.svelte';
	import CardDescription from './ui/card/CardDescription.svelte';
	import CardAction from './ui/card/CardAction.svelte';
	import CardContent from './ui/card/CardContent.svelte';
	import CardFooter from './ui/card/CardFooter.svelte';
<\/script>

<Card>
	<CardHeader>
		<CardTitle>Login to your account</CardTitle>
		<CardDescription>Enter your email below to login to your account.</CardDescription>
		<CardAction><a class="button button-link" href="/">Sign up</a></CardAction>
	</CardHeader>
	<CardContent>…fields…</CardContent>
	<CardFooter stack>
		<button class="button" type="button">Login</button>
		<button class="button button-outline" type="button">Login with Google</button>
	</CardFooter>
</Card>`;

	const project = `<div class="card">
	<div class="card-header">
		<div class="card-title">Create project</div>
		<div class="card-description">Deploy your new project in one click.</div>
	</div>
	<div class="card-content">
		<div class="field">
			<label class="label" for="name">Name</label>
			<input class="input" id="name" placeholder="Name of your project">
		</div>
		<div class="field">
			<label class="label" for="framework">Framework</label>
			<select class="select" id="framework">
				<option>Svelte</option>
				<option>Astro</option>
			</select>
		</div>
	</div>
	<div class="card-footer" style="justify-content: space-between">
		<button class="button button-outline" type="button">Cancel</button>
		<button class="button" type="button">Deploy</button>
	</div>
</div>`;

	const compact = `<div class="card" data-size="sm">
	<div class="card-header">
		<div class="card-title">Compact</div>
		<div class="card-description">data-size="sm" tightens --card-spacing.</div>
	</div>
	<div class="card-content">Or set style="--card-spacing: 2rem" on the card.</div>
</div>

<div class="card" style="--card-spacing: 2rem">
	<div class="card-header">
		<div class="card-title">Roomy</div>
		<div class="card-description">Inline --card-spacing on this instance.</div>
	</div>
	<div class="card-content">Same parts, more inset.</div>
</div>`;

	const image = `<div class="card">
	<div class="card-cover" role="img" aria-label="Event cover"></div>
	<div class="card-header">
		<div class="card-action"><span class="badge badge-secondary">Featured</span></div>
		<div class="card-title">Design systems meetup</div>
		<div class="card-description">Component APIs, accessibility, and shipping faster.</div>
	</div>
	<div class="card-footer">
		<button class="button" type="button" style="width: 100%">View event</button>
	</div>
</div>`;

	const flush = `<div class="card">
	<div class="card-header">
		<div class="card-title">Terms of service</div>
		<div class="card-description">Review the terms before accepting.</div>
	</div>
	<div class="card-content">
		<div class="card-flush">
			<p>These terms govern your use of the workspace.</p>
			<p>You are responsible for the content you upload.</p>
		</div>
	</div>
	<div class="card-footer" style="justify-content: flex-end; gap: 0.5rem">
		<button class="button button-outline" type="button">Decline</button>
		<button class="button" type="button">Accept</button>
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Card</h1>
			<p>
				Surface with header, title, description, content, footer, and optional action.
				Hairline ring + <code>shadow-xs</code>. Public API is the classes.
				Paste the markup first. If a card is reused, copy
				<a href="src/components/ui/card/Card.svelte"><code>src/components/ui/card/Card.svelte</code></a>
				and the part files next to it
				(<a href="src/components/ui/card/CardHeader.svelte"><code>CardHeader.svelte</code></a>,
				<a href="src/components/ui/card/CardTitle.svelte"><code>CardTitle.svelte</code></a>,
				<a href="src/components/ui/card/CardDescription.svelte"><code>CardDescription.svelte</code></a>,
				<a href="src/components/ui/card/CardAction.svelte"><code>CardAction.svelte</code></a>,
				<a href="src/components/ui/card/CardContent.svelte"><code>CardContent.svelte</code></a>,
				<a href="src/components/ui/card/CardFooter.svelte"><code>CardFooter.svelte</code></a>).
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#login">Login</a></li>
					<li><a href="#create-project">Create project</a></li>
					<li><a href="#spacing">Spacing</a></li>
					<li><a href="#image">Image</a></li>
					<li><a href="#edge-to-edge">Edge to edge</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="login">Login</h2>
			<div class="docs-preview">
				<div class="card" style="max-width: 24rem">
					<div class="card-header">
						<div class="card-title">Login to your account</div>
						<div class="card-description">Enter your email below to login to your account.</div>
						<div class="card-action"><a class="button button-link" href="/components/card">Sign up</a></div>
					</div>
					<div class="card-content">
						<div class="field-group">
							<div class="field">
								<label class="label" for="card-email">Email</label>
								<input class="input" id="card-email" type="email" placeholder="m@example.com">
							</div>
							<div class="field">
								<label class="label" for="card-password">Password</label>
								<input class="input" id="card-password" type="password">
							</div>
						</div>
					</div>
					<div class="card-footer" data-stack>
						<button class="button" type="button">Login</button>
						<button class="button button-outline" type="button">Login with Google</button>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{demo}</code></pre>
			<p>Same card as imported parts:</p>
			<pre class="docs-code"><code>{parts}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="create-project">Create project</h2>
			<div class="docs-preview">
				<div class="card" style="max-width: 24rem">
					<div class="card-header">
						<div class="card-title">Create project</div>
						<div class="card-description">Deploy your new project in one click.</div>
					</div>
					<div class="card-content">
						<div class="stack" style="--stack-gap: 1rem">
							<div class="field">
								<label class="label" for="card-name">Name</label>
								<input class="input" id="card-name" placeholder="Name of your project">
							</div>
							<div class="field">
								<label class="label" for="card-framework">Framework</label>
								<select class="select" id="card-framework">
									<option>Svelte</option>
									<option>Astro</option>
									<option>Other</option>
								</select>
							</div>
						</div>
					</div>
					<div class="card-footer" style="justify-content: space-between">
						<button class="button button-outline" type="button">Cancel</button>
						<button class="button" type="button">Deploy</button>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{project}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="spacing">Spacing</h2>
			<p>
				<code>data-size="sm"</code> uses <code>--card-spacing-sm</code>.
				Any card can also set <code>--card-spacing</code> inline.
			</p>
			<div class="docs-preview">
				<div class="cluster" style="align-items: stretch">
					<div class="card" data-size="sm" style="max-width: 18rem; flex: 1">
						<div class="card-header">
							<div class="card-title">Compact</div>
							<div class="card-description">data-size="sm" tightens --card-spacing.</div>
						</div>
						<div class="card-content">Or set style="--card-spacing: 2rem" on the card.</div>
					</div>
					<div class="card" style="max-width: 18rem; flex: 1; --card-spacing: 2rem">
						<div class="card-header">
							<div class="card-title">Roomy</div>
							<div class="card-description">Inline --card-spacing on this instance.</div>
						</div>
						<div class="card-content">Same parts, more inset.</div>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{compact}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="image">Image</h2>
			<div class="docs-preview">
				<div class="card" style="max-width: 24rem">
					<div class="card-cover" role="img" aria-label="Event cover"></div>
					<div class="card-header">
						<div class="card-action"><span class="badge badge-secondary">Featured</span></div>
						<div class="card-title">Design systems meetup</div>
						<div class="card-description">A practical talk on component APIs, accessibility, and shipping faster.</div>
					</div>
					<div class="card-footer">
						<button class="button" type="button" style="width: 100%">View event</button>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{image}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="edge-to-edge">Edge to edge</h2>
			<p>
				<code>.card-flush</code> pulls a scroller to the card edges, then the footer sits on the hairline.
			</p>
			<div class="docs-preview">
				<div class="card" style="max-width: 24rem">
					<div class="card-header">
						<div class="card-title">Terms of service</div>
						<div class="card-description">Review the terms before accepting.</div>
					</div>
					<div class="card-content">
						<div class="card-flush">
							<p>These terms govern your use of the workspace, including access to shared documents.</p>
							<p>You are responsible for the content you upload and for keeping credentials secure.</p>
							<p>We may update features as the service evolves. Administrators will be notified of material changes.</p>
						</div>
					</div>
					<div class="card-footer" style="justify-content: flex-end; gap: 0.5rem">
						<button class="button button-outline" type="button">Decline</button>
						<button class="button" type="button">Accept</button>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{flush}</code></pre>
		</div>
	</div>
</div>
