<script>
	let marks = $state({ bold: true, italic: false, underline: false });
	let align = $state('start');

	function flip(key) {
		marks = { ...marks, [key]: !marks[key] };
	}

	const snippet = `<script>
	let marks = $state({ bold: true, italic: false, underline: false });
	let align = $state('start');

	function flip(key) {
		marks = { ...marks, [key]: !marks[key] };
	}
<\/script>

<div class="toggle-group">
	<button class="toggle toggle-outline" type="button" aria-pressed={marks.bold} aria-label="Bold" onclick={() => flip('bold')}>B</button>
	<button class="toggle toggle-outline" type="button" aria-pressed={marks.italic} aria-label="Italic" onclick={() => flip('italic')}>I</button>
	<button class="toggle toggle-outline" type="button" aria-pressed={marks.underline} aria-label="Underline" onclick={() => flip('underline')}>U</button>
</div>

<div class="toggle-group" role="group" aria-label="Align">
	<button class="toggle toggle-outline" type="button" aria-pressed={align === 'start'} onclick={() => align = 'start'}>Start</button>
	<button class="toggle toggle-outline" type="button" aria-pressed={align === 'middle'} onclick={() => align = 'middle'}>Middle</button>
	<button class="toggle toggle-outline" type="button" aria-pressed={align === 'end'} onclick={() => align = 'end'}>End</button>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Toggle group</h1>
			<p>
				<code>.toggle-group</code> shares radii like a button group.
				Multiple-press is independent <code>aria-pressed</code>.
				One-at-a-time is a single <code>$state</code> value.
				<code>data-orientation="vertical"</code> stacks the items.
				There is no wrapper.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#several-at-once">Several at once</a></li>
					<li><a href="#one-at-a-time">One at a time</a></li>
				</ol>
			</nav>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="several-at-once">Several at once</h2>
			<div class="docs-preview">
				<div class="toggle-group">
					<button class="toggle toggle-outline" type="button" aria-pressed={marks.bold} aria-label="Bold" onclick={() => flip('bold')}><strong>B</strong></button>
					<button class="toggle toggle-outline" type="button" aria-pressed={marks.italic} aria-label="Italic" onclick={() => flip('italic')}><em>I</em></button>
					<button class="toggle toggle-outline" type="button" aria-pressed={marks.underline} aria-label="Underline" onclick={() => flip('underline')}><span style="text-decoration: underline">U</span></button>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="one-at-a-time">One at a time</h2>
			<div class="docs-preview">
				<div class="toggle-group" role="group" aria-label="Align">
					<button class="toggle toggle-outline" type="button" aria-pressed={align === 'start'} onclick={() => align = 'start'}>Start</button>
					<button class="toggle toggle-outline" type="button" aria-pressed={align === 'middle'} onclick={() => align = 'middle'}>Middle</button>
					<button class="toggle toggle-outline" type="button" aria-pressed={align === 'end'} onclick={() => align = 'end'}>End</button>
				</div>
			</div>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
