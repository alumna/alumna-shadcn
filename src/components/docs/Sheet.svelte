<script>
	let sheet;

	const snippet = `<button class="button" type="button" onclick={() => sheet.showModal()}>Open</button>

<dialog class="dialog dialog-sheet" bind:this={sheet} aria-labelledby="sheet-title">
	<div class="dialog-header">
		<div class="dialog-title" id="sheet-title">Menu</div>
		<p class="dialog-description">A side panel on the same dialog element.</p>
	</div>
	<div class="dialog-sheet-body">
		<p>Sheet body.</p>
	</div>
	<div class="dialog-footer">
		<button class="button" type="button" onclick={() => sheet.close()}>Close</button>
	</div>
</dialog>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Sheet</h1>
			<p>
				The same <code>&lt;dialog&gt;</code>, edge-anchored with
				<code>dialog-sheet</code> (inline-end). Add <code>dialog-sheet-start</code>
				for the other side. There is no wrapper — same native element as
				<a href="/components/dialog">Dialog</a>, plus the sheet class.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<button class="button" type="button" onclick={() => sheet.showModal()}>Open sheet</button>
				<dialog class="dialog dialog-sheet" bind:this={sheet} aria-labelledby="sheet-title-demo">
					<div class="dialog-header">
						<div class="dialog-title" id="sheet-title-demo">Menu</div>
						<p class="dialog-description">A side panel on the same dialog.</p>
					</div>
					<div class="dialog-sheet-body">
						<p>Sheet body.</p>
					</div>
					<div class="dialog-footer">
						<button class="button" type="button" onclick={() => sheet.close()}>Close</button>
					</div>
				</dialog>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
