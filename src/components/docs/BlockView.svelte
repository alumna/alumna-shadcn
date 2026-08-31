<script>
	let { preview, code, full } = $props();
	let view = $state('preview');

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

<div class="tabs">
	<div class="tabs-list" role="tablist" aria-label={full ? 'Preview, outline, or full code' : 'Preview or code'}>
		<button
			type="button"
			class="tabs-trigger"
			role="tab"
			aria-selected={view === 'preview'}
			tabindex={view === 'preview' ? 0 : -1}
			onkeydown={on_tab_keydown}
			onclick={() => view = 'preview'}
		>Preview</button>
		<button
			type="button"
			class="tabs-trigger"
			role="tab"
			aria-selected={view === 'code'}
			tabindex={view === 'code' ? 0 : -1}
			onkeydown={on_tab_keydown}
			onclick={() => view = 'code'}
		>{full ? 'Outline' : 'Code'}</button>
		{#if full}
			<button
				type="button"
				class="tabs-trigger"
				role="tab"
				aria-selected={view === 'full'}
				tabindex={view === 'full' ? 0 : -1}
				onkeydown={on_tab_keydown}
				onclick={() => view = 'full'}
			>Full</button>
		{/if}
	</div>

	{#if view === 'preview'}
		<div class="tabs-content block-view-preview">
			{@render preview?.()}
		</div>
	{:else if view === 'full'}
		<div class="docs-code-wrap">
			<pre class="docs-code"><code>{@render full?.()}</code></pre>
		</div>
	{:else}
		<div class="docs-code-wrap">
			<pre class="docs-code"><code>{@render code?.()}</code></pre>
		</div>
	{/if}
</div>
