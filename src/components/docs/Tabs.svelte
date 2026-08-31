<script>
	let tab = $state('account');

	const snippet = `<script>
	let tab = $state('account');
<\/script>

<div class="tabs">
	<div class="tabs-list" role="tablist" aria-label="Settings">
		<button class="tabs-trigger" type="button" role="tab" aria-selected={tab === 'account'} onclick={() => tab = 'account'}>Account</button>
		<button class="tabs-trigger" type="button" role="tab" aria-selected={tab === 'password'} onclick={() => tab = 'password'}>Password</button>
	</div>
	{#if tab === 'account'}
		<div class="tabs-content" role="tabpanel">Make changes to your account here.</div>
	{:else}
		<div class="tabs-content" role="tabpanel">Change your password here.</div>
	{/if}
</div>`;

	function on_tab_keydown(event) {
		if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')
			return;
		event.preventDefault();
		const list = event.currentTarget.closest('[role="tablist"]');
		const tabs = [...list.querySelectorAll('[role="tab"]')];
		const i = tabs.indexOf(event.currentTarget);
		if (i < 0)
			return;
		const next = event.key === 'ArrowRight'
			? tabs[(i + 1) % tabs.length]
			: tabs[(i - 1 + tabs.length) % tabs.length];
		next.focus();
		next.click();
	}
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Tabs</h1>
			<p>
				<code>.tabs</code>, <code>.tabs-list</code>, <code>.tabs-trigger</code>,
				<code>.tabs-content</code>. Selected state is <code>aria-selected="true"</code>.
				There is no wrapper. A few lines of <code>$state</code> (or radios) pick the panel.
				Keyboard: Left / Right on the list.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="tabs">
					<div class="tabs-list" role="tablist" aria-label="Settings">
						<button
							class="tabs-trigger"
							type="button"
							role="tab"
							aria-selected={tab === 'account'}
							tabindex={tab === 'account' ? 0 : -1}
							onkeydown={on_tab_keydown}
							onclick={() => tab = 'account'}
						>Account</button>
						<button
							class="tabs-trigger"
							type="button"
							role="tab"
							aria-selected={tab === 'password'}
							tabindex={tab === 'password' ? 0 : -1}
							onkeydown={on_tab_keydown}
							onclick={() => tab = 'password'}
						>Password</button>
					</div>
					{#if tab === 'account'}
						<div class="tabs-content" role="tabpanel">Make changes to your account here.</div>
					{:else}
						<div class="tabs-content" role="tabpanel">Change your password here.</div>
					{/if}
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
