<script>
	import { tip_enter, tip_leave, on_menu_toggle, menu_keydown, choose_item } from '../ui/Place.svelte';

	let info_tip;
	let scheme = $state('https://');

	const icon = `<div class="input-group">
	<span class="input-addon" aria-hidden="true">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<circle cx="11" cy="11" r="7"></circle>
			<path d="m20 20-3-3"></path>
		</svg>
	</span>
	<input class="input" type="search" placeholder="Search...">
</div>`;

	const text = `<div class="input-group">
	<span class="input-addon">$</span>
	<input class="input" type="text" placeholder="0.00">
	<span class="input-addon" data-align="end">USD</span>
</div>

<div class="input-group">
	<span class="input-addon">https://</span>
	<input class="input" type="text" placeholder="example.com">
	<span class="input-addon" data-align="end">.com</span>
</div>

<div class="input-group">
	<input class="input" type="text" placeholder="username">
	<span class="input-addon" data-align="end">@acme.test</span>
</div>`;

	const button = `<div class="input-group">
	<input class="input" type="url" value="https://alumna.dev" readonly>
	<span class="input-addon" data-align="end">
		<button class="button button-ghost button-sm" type="button">Copy</button>
	</span>
</div>

<div class="input-group">
	<input class="input" type="search" placeholder="Type to search...">
	<button class="button button-secondary button-sm" type="button">Search</button>
</div>`;

	const area = `<div class="input-group">
	<textarea class="textarea" placeholder="Ask, search or chat…"></textarea>
	<span class="input-addon" data-align="block-end">
		<span>52% used</span>
		<button class="button button-sm" type="button">Send</button>
	</span>
</div>

<div class="input-group">
	<textarea class="textarea" id="prompt"></textarea>
	<span class="input-addon" data-align="block-start">
		<label class="label" for="prompt">Ask, search or chat…</label>
	</span>
</div>

<div class="input-group">
	<textarea class="textarea" placeholder="Share your thoughts…"></textarea>
	<span class="input-addon" data-align="block-end">
		<button class="button button-ghost button-sm" type="button">Cancel</button>
		<button class="button button-sm" type="button">Post</button>
	</span>
</div>`;

	const spin = `<div class="input-group">
	<input class="input" placeholder="Searching…" disabled>
	<span class="input-addon" data-align="end">
		<svg class="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" opacity="0.25"></circle>
			<path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
		</svg>
	</span>
</div>`;

	const spin_import = `<script>
	import Spinner from './ui/Spinner.svelte';
<\/script>

<div class="input-group">
	<input class="input" placeholder="Searching…" disabled>
	<span class="input-addon" data-align="end">
		<Spinner decorative />
	</span>
</div>`;

	const label = `<div class="input-group">
	<span class="input-addon"><label class="label" for="handle">@</label></span>
	<input class="input" id="handle" placeholder="alumna">
</div>`;

	const tip = `<script>
	import { tip_enter, tip_leave } from './ui/Place.svelte';
	let tip;
<\/script>

<div class="input-group">
	<input class="input" placeholder="Enter a URL">
	<span class="input-addon" data-align="end">
		<button class="button button-ghost button-sm button-icon" type="button" aria-label="About this field"
			onmouseenter={(event) => tip_enter(event, tip)}
			onmouseleave={(event) => tip_leave(event, tip)}
		>?</button>
	</span>
</div>
<div bind:this={tip} popover="manual" class="tooltip">Must start with https://</div>`;

	const drop = `<script>
	import { on_menu_toggle, menu_keydown, choose_item } from './ui/Place.svelte';
	let scheme = $state('https://');
<\/script>

<div class="input-group">
	<span class="input-addon">
		<button class="button button-ghost button-sm" type="button" popovertarget="scheme" aria-haspopup="menu" aria-expanded="false">{scheme}</button>
	</span>
	<input class="input" placeholder="example.com">
</div>
<div id="scheme" popover class="menu" role="menu" tabindex="-1" ontoggle={on_menu_toggle} onkeydown={menu_keydown}>
	<button class="menu-item" type="button" role="menuitem" onclick={(event) => { scheme = 'https://'; choose_item(event); }}>https://</button>
	<button class="menu-item" type="button" role="menuitem" onclick={(event) => { scheme = 'http://'; choose_item(event); }}>http://</button>
</div>`;

	const keys = `<div class="input-group">
	<span class="input-addon" aria-hidden="true">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<circle cx="11" cy="11" r="7"></circle>
			<path d="m20 20-3-3"></path>
		</svg>
	</span>
	<input class="input" type="search" placeholder="Search…">
	<span class="input-addon" data-align="end">
		<kbd class="kbd">⌘</kbd>
		<kbd class="kbd">K</kbd>
	</span>
</div>`;

	const grouped = `<div class="button-group" style="width: 100%">
	<span class="button-group-text"><label class="label" for="url">https://</label></span>
	<div class="input-group">
		<input class="input" id="url" placeholder="example">
		<span class="input-addon" data-align="end" aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.93"></path>
				<path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L14 18.07"></path>
			</svg>
		</span>
	</div>
	<span class="button-group-text">.com</span>
</div>`;

	const in_card = `<div class="card" style="max-width: 24rem">
	<div class="card-header">
		<div class="card-title">Contact</div>
		<div class="card-description">Input groups inside a card.</div>
	</div>
	<div class="card-content">
		<div class="field-group">
			<div class="field">
				<label class="label" for="email">Email</label>
				<div class="input-group">
					<input class="input" id="email" type="email" placeholder="you@example.com">
					<span class="input-addon" data-align="end" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect x="3" y="5" width="18" height="14" rx="2"></rect>
							<path d="m3 7 9 6 9-6"></path>
						</svg>
					</span>
				</div>
			</div>
			<div class="field">
				<label class="label" for="site">Website</label>
				<div class="input-group">
					<span class="input-addon">https://</span>
					<input class="input" id="site" placeholder="example.com">
				</div>
			</div>
		</div>
	</div>
	<div class="card-footer" style="justify-content: flex-end; gap: 0.5rem">
		<button class="button button-outline" type="button">Cancel</button>
		<button class="button" type="button">Submit</button>
	</div>
</div>`;

	const invalid = `<div class="input-group">
	<input class="input" type="email" placeholder="hello@" aria-invalid="true">
	<span class="input-addon" data-align="end">.com</span>
</div>

<div class="input-group" data-disabled>
	<span class="input-addon">$</span>
	<input class="input" placeholder="0.00" disabled>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Input group</h1>
			<p>
				<code>.input-group</code> owns the border and focus ring.
				<code>.input-addon</code> is prefix or suffix.
				<code>data-align="end"</code> for inline-end,
				<code>block-start</code> / <code>block-end</code> for a header or footer
				(textarea). Wrap with <code>.button-group</code> and
				<code>.button-group-text</code> for a prefix/suffix around the group.
				There is no wrapper. Paste the markup first.
				Tooltip addons use the Tooltip page’s manual popover. A dropdown
				addon is a ghost button in <code>.input-addon</code> plus a
				<code>.menu</code> popover (same as Dropdown). Copy
				<a href="src/components/ui/Place.svelte"><code>src/components/ui/Place.svelte</code></a>
				(see <a href="/components/popover">Popover</a>).
				Spinner addons can import
				<a href="src/components/ui/Spinner.svelte"><code>src/components/ui/Spinner.svelte</code></a>
				(<a href="/components/spinner">Spinner</a>).
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#icon">Icon</a></li>
					<li><a href="#text">Text</a></li>
					<li><a href="#button">Button</a></li>
					<li><a href="#textarea">Textarea</a></li>
					<li><a href="#spinner">Spinner</a></li>
					<li><a href="#label">Label</a></li>
					<li><a href="#tooltip">Tooltip</a></li>
					<li><a href="#dropdown">Dropdown</a></li>
					<li><a href="#kbd">Kbd</a></li>
					<li><a href="#button-group">Button group</a></li>
					<li><a href="#in-card">In card</a></li>
					<li><a href="#invalid-and-disabled">Invalid and disabled</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="icon">Icon</h2>
			<div class="docs-preview">
				<div class="stack" style="max-width: 20rem">
					<div class="input-group">
						<span class="input-addon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<circle cx="11" cy="11" r="7"></circle>
								<path d="m20 20-3-3"></path>
							</svg>
						</span>
						<input class="input" type="search" placeholder="Search...">
					</div>
					<div class="input-group">
						<span class="input-addon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<rect x="3" y="5" width="18" height="14" rx="2"></rect>
								<path d="m3 7 9 6 9-6"></path>
							</svg>
						</span>
						<input class="input" type="email" placeholder="Enter your email">
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{icon}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="text">Text</h2>
			<div class="docs-preview">
				<div class="stack" style="max-width: 20rem">
					<div class="input-group">
						<span class="input-addon">$</span>
						<input class="input" type="text" placeholder="0.00">
						<span class="input-addon" data-align="end">USD</span>
					</div>
					<div class="input-group">
						<span class="input-addon">https://</span>
						<input class="input" type="text" placeholder="example.com">
						<span class="input-addon" data-align="end">.com</span>
					</div>
					<div class="input-group">
						<input class="input" type="text" placeholder="username">
						<span class="input-addon" data-align="end">@acme.test</span>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{text}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="button">Button</h2>
			<div class="docs-preview">
				<div class="stack" style="max-width: 20rem">
					<div class="input-group">
						<input class="input" type="url" value="https://alumna.dev" readonly>
						<span class="input-addon" data-align="end">
							<button class="button button-ghost button-sm" type="button" title="Copy">Copy</button>
						</span>
					</div>
					<div class="input-group">
						<input class="input" type="search" placeholder="Type to search...">
						<button class="button button-secondary button-sm" type="button">Search</button>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{button}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="textarea">Textarea</h2>
			<p>
				<code>data-align="block-start"</code> is a header,
				<code>block-end</code> a footer. Both turn the group into a column.
			</p>
			<div class="docs-preview">
				<div class="stack" style="max-width: 24rem">
					<div class="input-group">
						<textarea class="textarea" placeholder="Ask, search or chat…"></textarea>
						<span class="input-addon" data-align="block-end">
							<span>52% used</span>
							<button class="button button-sm" type="button">Send</button>
						</span>
					</div>
					<div class="input-group">
						<textarea class="textarea" id="prompt-demo"></textarea>
						<span class="input-addon" data-align="block-start">
							<label class="label" for="prompt-demo">Ask, search or chat…</label>
						</span>
					</div>
					<div class="input-group">
						<textarea class="textarea" placeholder="Share your thoughts…"></textarea>
						<span class="input-addon" data-align="block-end">
							<button class="button button-ghost button-sm" type="button">Cancel</button>
							<button class="button button-sm" type="button">Post</button>
						</span>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{area}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="spinner">Spinner</h2>
			<div class="docs-preview">
				<div class="stack" style="max-width: 20rem">
					<div class="input-group">
						<input class="input" placeholder="Searching…" disabled>
						<span class="input-addon" data-align="end">
							<svg class="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" opacity="0.25"></circle>
								<path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
							</svg>
						</span>
					</div>
					<div class="input-group">
						<input class="input" placeholder="Saving…" disabled>
						<span class="input-addon" data-align="end">
							<span>Saving…</span>
							<svg class="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" opacity="0.25"></circle>
								<path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
							</svg>
						</span>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{spin}</code></pre>
			<p>
				Same addon with
				<a href="src/components/ui/Spinner.svelte"><code>src/components/ui/Spinner.svelte</code></a>
				(<a href="/components/spinner">Spinner</a>):
			</p>
			<pre class="docs-code"><code>{spin_import}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="label">Label</h2>
			<div class="docs-preview">
				<div style="max-width: 20rem">
					<div class="input-group">
						<span class="input-addon"><label class="label" for="handle-demo">@</label></span>
						<input class="input" id="handle-demo" placeholder="alumna">
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{label}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="tooltip">Tooltip</h2>
			<div class="docs-preview">
				<div style="max-width: 20rem">
					<div class="input-group">
						<input class="input" placeholder="Enter a URL">
						<span class="input-addon" data-align="end">
							<button
								class="button button-ghost button-sm button-icon"
								type="button"
								aria-label="About this field"
								onmouseenter={(event) => tip_enter(event, info_tip)}
								onmouseleave={(event) => tip_leave(event, info_tip)}
								onfocus={(event) => tip_enter(event, info_tip, 0)}
								onblur={(event) => tip_leave(event, info_tip, 0)}
							>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<circle cx="12" cy="12" r="9"></circle>
									<path d="M9.1 9a3 3 0 1 1 4.4 2.7c-.7.4-1.1.8-1.1 1.8"></path>
									<circle cx="12" cy="17" r="0.6" fill="currentColor"></circle>
								</svg>
							</button>
						</span>
					</div>
					<div bind:this={info_tip} popover="manual" class="tooltip" data-side="top">Must start with https://</div>
				</div>
			</div>
			<pre class="docs-code"><code>{tip}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="dropdown">Dropdown</h2>
			<div class="docs-preview">
				<div style="max-width: 20rem">
					<div class="input-group">
						<span class="input-addon">
							<button
								class="button button-ghost button-sm"
								type="button"
								popovertarget="ig-scheme"
								aria-haspopup="menu"
								aria-expanded="false"
								aria-label="URL scheme"
							>{scheme}</button>
						</span>
						<input class="input" placeholder="example.com">
					</div>
					<div
						id="ig-scheme"
						popover
						class="menu"
						role="menu"
						tabindex="-1"
						data-side="bottom"
						data-align="start"
						ontoggle={on_menu_toggle}
						onkeydown={menu_keydown}
					>
						<button class="menu-item" type="button" role="menuitem" onclick={(event) => { scheme = 'https://'; choose_item(event); }}>https://</button>
						<button class="menu-item" type="button" role="menuitem" onclick={(event) => { scheme = 'http://'; choose_item(event); }}>http://</button>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{drop}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="kbd">Kbd</h2>
			<div class="docs-preview">
				<div style="max-width: 20rem">
					<div class="input-group">
						<span class="input-addon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<circle cx="11" cy="11" r="7"></circle>
								<path d="m20 20-3-3"></path>
							</svg>
						</span>
						<input class="input" type="search" placeholder="Search…">
						<span class="input-addon" data-align="end">
							<kbd class="kbd">⌘</kbd>
							<kbd class="kbd">K</kbd>
						</span>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{keys}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="button-group">Button group</h2>
			<p>
				Prefix and suffix sit in <code>.button-group-text</code> around the
				input group. Shared radii come from <code>.button-group</code>.
			</p>
			<div class="docs-preview">
				<div style="max-width: 24rem">
					<div class="button-group" style="width: 100%">
						<span class="button-group-text"><label class="label" for="url-demo">https://</label></span>
						<div class="input-group">
							<input class="input" id="url-demo" placeholder="example">
							<span class="input-addon" data-align="end" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.93"></path>
									<path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L14 18.07"></path>
								</svg>
							</span>
						</div>
						<span class="button-group-text">.com</span>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{grouped}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="in-card">In card</h2>
			<div class="docs-preview">
				<div class="card" style="max-width: 24rem">
					<div class="card-header">
						<div class="card-title">Contact</div>
						<div class="card-description">Input groups inside a card.</div>
					</div>
					<div class="card-content">
						<div class="field-group">
							<div class="field">
								<label class="label" for="ig-email">Email</label>
								<div class="input-group">
									<input class="input" id="ig-email" type="email" placeholder="you@example.com">
									<span class="input-addon" data-align="end" aria-hidden="true">
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<rect x="3" y="5" width="18" height="14" rx="2"></rect>
											<path d="m3 7 9 6 9-6"></path>
										</svg>
									</span>
								</div>
							</div>
							<div class="field">
								<label class="label" for="ig-site">Website</label>
								<div class="input-group">
									<span class="input-addon">https://</span>
									<input class="input" id="ig-site" placeholder="example.com">
								</div>
							</div>
						</div>
					</div>
					<div class="card-footer" style="justify-content: flex-end; gap: 0.5rem">
						<button class="button button-outline" type="button">Cancel</button>
						<button class="button" type="button">Submit</button>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{in_card}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="invalid-and-disabled">Invalid and disabled</h2>
			<p>
				<code>aria-invalid="true"</code> on a control tints the group.
				<code>data-disabled</code> on the group fades it (keep the control
				<code>disabled</code> too). A spinner next to a disabled input
				does not need the fade.
			</p>
			<div class="docs-preview">
				<div class="stack" style="max-width: 20rem">
					<div class="input-group">
						<input class="input" type="email" placeholder="hello@" aria-invalid="true">
						<span class="input-addon" data-align="end">.com</span>
					</div>
					<div class="input-group" data-disabled>
						<span class="input-addon">$</span>
						<input class="input" placeholder="0.00" disabled>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{invalid}</code></pre>
		</div>
	</div>
</div>
