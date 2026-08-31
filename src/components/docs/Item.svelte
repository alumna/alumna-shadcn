<script>
	const snippet = `<div class="item">
	<span class="item-media" aria-hidden="true">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
		</svg>
	</span>
	<div class="item-body">
		<div class="item-title">Notifications</div>
		<div class="item-description">You have 3 unread messages.</div>
	</div>
	<button class="button button-outline button-sm" type="button">Open</button>
</div>`;

	const columns = `<div class="item" data-columns>
	<div class="item-field">
		<div class="item-title">Title</div>
		<div class="item-description">Vega kit</div>
	</div>
	<div class="item-field">
		<div class="item-title">Category</div>
		<div class="item-description">Components</div>
	</div>
	<div class="item-field" data-end>
		<div class="item-title">Options</div>
		<div class="cluster">
			<button class="button button-outline button-sm button-icon" type="button" aria-label="More">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<circle cx="12" cy="12" r="1"></circle>
					<circle cx="19" cy="12" r="1"></circle>
					<circle cx="5" cy="12" r="1"></circle>
				</svg>
			</button>
			<button class="button button-outline button-sm" type="button">Edit</button>
			<button class="button button-outline button-sm" type="button">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path>
					<circle cx="12" cy="12" r="3"></circle>
				</svg>
				View
			</button>
		</div>
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Item</h1>
			<p>
				A list row: optional icon, title, description, and an action.
				There is no wrapper.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#preview">Preview</a></li>
					<li><a href="#columns">Columns</a></li>
				</ol>
			</nav>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="preview">Preview</h2>
			<div class="docs-preview">
				<div class="stack" style="max-width: 28rem">
					<div class="item">
						<span class="item-media" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
								<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
							</svg>
						</span>
						<div class="item-body">
							<div class="item-title">Notifications</div>
							<div class="item-description">You have 3 unread messages.</div>
						</div>
						<button class="button button-outline button-sm" type="button">Open</button>
					</div>
					<div class="item">
						<span class="item-media" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<rect x="2" y="5" width="20" height="14" rx="2"></rect>
								<path d="M2 10h20"></path>
							</svg>
						</span>
						<div class="item-body">
							<div class="item-title">Billing</div>
							<div class="item-description">Visa ending in 4242.</div>
						</div>
						<button class="button button-outline button-sm" type="button">Edit</button>
					</div>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="columns">Columns</h2>
			<div class="docs-preview">
				<div class="stack" style="--stack-gap: 0.75rem">
					<div class="item" data-columns>
						<div class="item-field">
							<div class="item-title">Title</div>
							<div class="item-description">Vega kit</div>
						</div>
						<div class="item-field">
							<div class="item-title">Category</div>
							<div class="item-description">Components</div>
						</div>
						<div class="item-field" data-end>
							<div class="item-title">Options</div>
							<div class="cluster">
								<button class="button button-outline button-sm button-icon" type="button" aria-label="More">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
										<circle cx="12" cy="12" r="1"></circle>
										<circle cx="19" cy="12" r="1"></circle>
										<circle cx="5" cy="12" r="1"></circle>
									</svg>
								</button>
								<button class="button button-outline button-sm" type="button">Edit</button>
								<button class="button button-outline button-sm" type="button">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
										<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path>
										<circle cx="12" cy="12" r="3"></circle>
									</svg>
									View
								</button>
							</div>
						</div>
					</div>
					<div class="item" data-columns>
						<div class="item-field">
							<div class="item-title">Title</div>
							<div class="item-description">Token sheet</div>
						</div>
						<div class="item-field">
							<div class="item-title">Category</div>
							<div class="item-description">Foundations</div>
						</div>
						<div class="item-field" data-end>
							<div class="item-title">Options</div>
							<div class="cluster">
								<button class="button button-outline button-sm button-icon" type="button" aria-label="More">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
										<circle cx="12" cy="12" r="1"></circle>
										<circle cx="19" cy="12" r="1"></circle>
										<circle cx="5" cy="12" r="1"></circle>
									</svg>
								</button>
								<button class="button button-outline button-sm" type="button">Edit</button>
								<button class="button button-outline button-sm" type="button">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
										<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path>
										<circle cx="12" cy="12" r="3"></circle>
									</svg>
									View
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<pre class="docs-code"><code>{columns}</code></pre>
		</div>
	</div>
</div>
