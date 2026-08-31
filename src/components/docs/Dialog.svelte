<script>
	let dialog;

	const snippet = `<button class="button" type="button" onclick={() => dialog.showModal()}>Open</button>

<dialog class="dialog" bind:this={dialog} aria-labelledby="dialog-title">
	<div class="dialog-header">
		<div class="dialog-title" id="dialog-title">Edit profile</div>
		<p class="dialog-description">Make changes to your profile here.</p>
	</div>
	<div class="dialog-footer">
		<button class="button button-outline" type="button" onclick={() => dialog.close()}>Cancel</button>
		<button class="button" type="button" onclick={() => dialog.close()}>Save</button>
	</div>
</dialog>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Dialog</h1>
			<p>
				Native <code>&lt;dialog class="dialog"&gt;</code>. Open with
				<code>showModal()</code>, close with <code>close()</code> or Escape.
				The backdrop is <code>::backdrop</code>.
				There is no wrapper. <code>bind:this</code> plus those two methods is the whole script.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<button class="button" type="button" onclick={() => dialog.showModal()}>Open dialog</button>
				<dialog class="dialog" bind:this={dialog} aria-labelledby="dialog-title-demo">
					<div class="dialog-header">
						<div class="dialog-title" id="dialog-title-demo">Edit profile</div>
						<p class="dialog-description">Make changes to your profile here.</p>
					</div>
					<div class="dialog-footer">
						<button class="button button-outline" type="button" onclick={() => dialog.close()}>Cancel</button>
						<button class="button" type="button" onclick={() => dialog.close()}>Save</button>
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
