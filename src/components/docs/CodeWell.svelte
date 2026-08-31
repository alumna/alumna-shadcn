<script module>
	const COPY_MARKUP = `<svg class="docs-code-copy-clip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
		<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
	</svg>
	<svg class="docs-code-copy-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M20 6 9 17l-5-5"></path>
	</svg>`;

	const COPY_IDLE = 'Copy to Clipboard';
	const COPY_DONE = 'Copied!';

	function language_for(text) {
		const t = text.trim();
		if (t.startsWith('<') || t.startsWith('<!--') || /<\/[a-z]/.test(t))
			return 'markup';
		if (/^(@[a-z-]+|:root|html\b|[\w.#*:\[-][^{]*\{)/.test(t))
			return 'css';
		return 'javascript';
	}

	function wrap_pre(pre) {
		const parent = pre.parentElement;
		if (parent && parent.classList.contains('docs-code-wrap'))
			return parent;
		const wrap = document.createElement('div');
		wrap.className = 'docs-code-wrap';
		wrap.dataset.docsJsWrap = '1';
		parent.insertBefore(wrap, pre);
		wrap.appendChild(pre);
		return wrap;
	}

	function idle_copy(btn) {
		if (btn._copyTimer) {
			clearTimeout(btn._copyTimer);
			btn._copyTimer = 0;
		}
		btn.setAttribute('aria-label', COPY_IDLE);
		delete btn.dataset.copied;
	}

	function mark_copied(btn) {
		if (btn._copyTimer)
			clearTimeout(btn._copyTimer);
		btn.setAttribute('aria-label', COPY_DONE);
		btn.dataset.copied = '';
		btn._copyTimer = setTimeout(() => idle_copy(btn), 2000);
	}

	function copy_via_exec(text) {
		const ta = document.createElement('textarea');
		ta.value = text;
		ta.setAttribute('readonly', '');
		ta.setAttribute('aria-hidden', 'true');
		ta.tabIndex = -1;
		ta.style.cssText = 'position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:0;opacity:0';
		document.body.appendChild(ta);
		const sel = document.getSelection();
		const saved = sel && sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
		ta.focus();
		ta.select();
		ta.setSelectionRange(0, ta.value.length);
		let ok = false;
		try {
			ok = document.execCommand('copy');
		} catch {
			ok = false;
		}
		ta.remove();
		if (saved && sel) {
			sel.removeAllRanges();
			sel.addRange(saved);
		}
		return ok;
	}

	function copy_raw(text) {
		const value = text == null ? '' : String(text);
		const clip = navigator.clipboard;
		if (clip && typeof clip.writeText === 'function') {
			return clip.writeText(value).then(
				() => true,
				() => copy_via_exec(value)
			);
		}
		return Promise.resolve(copy_via_exec(value));
	}

	function raw_for(wrap) {
		const pre = wrap.querySelector(':scope > pre.docs-code');
		return wrap.dataset.raw ?? pre?.textContent ?? '';
	}

	function on_copy_click(event) {
		const btn = event.target.closest('.docs-code-copy');
		if (!btn)
			return;
		if (btn.closest('.docs-preview, .block-view-preview'))
			return;
		const wrap = btn.parentElement;
		if (!wrap || !wrap.classList.contains('docs-code-wrap'))
			return;
		copy_raw(raw_for(wrap)).then(ok => {
			if (ok)
				mark_copied(btn);
		});
	}

	function add_copy(wrap) {
		if (wrap.querySelector(':scope > .docs-code-copy'))
			return;
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'docs-code-copy';
		btn.setAttribute('aria-label', COPY_IDLE);
		btn.innerHTML = COPY_MARKUP;
		wrap.appendChild(btn);
	}

	function unwrap_js(root) {
		if (!root)
			return;
		root.querySelectorAll('.docs-code-wrap[data-docs-js-wrap]').forEach(wrap => {
			wrap.querySelectorAll('.docs-code-copy').forEach(btn => {
				idle_copy(btn);
				btn.remove();
			});
			const parent = wrap.parentNode;
			if (!parent)
				return;
			while (wrap.firstChild)
				parent.insertBefore(wrap.firstChild, wrap);
			wrap.remove();
		});
	}

	function enhance_pre(pre) {
		if (pre.closest('.docs-preview, .block-view-preview'))
			return;
		const code = pre.querySelector('code') || pre;
		const wrap = wrap_pre(pre);
		if (wrap.dataset.raw == null)
			wrap.dataset.raw = code.textContent;
		add_copy(wrap);
		if (pre.dataset.docsHl === '1')
			return;
		pre.dataset.docsHl = '1';
		const lang = language_for(wrap.dataset.raw);
		code.classList.add('language-' + lang);
		const Prism = globalThis.Prism;
		if (Prism && typeof Prism.highlightElement === 'function')
			Prism.highlightElement(code);
		pre.removeAttribute('tabindex');
	}

	function enhance_root(root) {
		root.querySelectorAll('pre.docs-code').forEach(enhance_pre);
	}

	export function watch_docs_code(root) {
		if (!root)
			return;
		let frame = 0;
		enhance_root(root);
		root.addEventListener('click', on_copy_click);
		const observer = new MutationObserver(() => {
			if (frame)
				return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				enhance_root(root);
			});
		});
		observer.observe(root, { childList: true, subtree: true });
		return () => {
			observer.disconnect();
			root.removeEventListener('click', on_copy_click);
			if (frame)
				cancelAnimationFrame(frame);
			unwrap_js(root);
		};
	}
</script>
