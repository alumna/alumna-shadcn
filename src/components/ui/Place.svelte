<script module>
	const GAP = 4;
	const EDGE = 8;
	const delays = new WeakMap();
	const last_triggers = new WeakMap();

	function css_anchor_ok() {
		try {
			return typeof CSS !== 'undefined'
				&& CSS.supports('anchor-name: --place')
				&& (CSS.supports('position-area: bottom') || CSS.supports('top: anchor(bottom)'));
		}
		catch {
			return false;
		}
	}

	function clear_delay(node) {
		const id = delays.get(node);
		if (id)
			clearTimeout(id);
		delays.delete(node);
	}

	function align_inline(rect, width, align) {
		if (align === 'end')
			return rect.right - width;
		if (align === 'middle')
			return rect.left + (rect.width - width) / 2;
		return rect.left;
	}

	function area_for(side, align) {
		const main = side === 'top'
			? 'block-start'
			: side === 'end'
				? 'inline-end'
				: side === 'start'
					? 'inline-start'
					: 'block-end';
		const cross = (side === 'top' || side === 'bottom')
			? (align === 'end' ? 'span-inline-start' : align === 'middle' ? 'center' : 'span-inline-end')
			: (align === 'end' ? 'span-block-start' : align === 'middle' ? 'center' : 'span-block-end');
		return `${main} ${cross}`;
	}

	function apply_css_anchor(panel, trigger, side, align) {
		if (panel.dataset.place === 'js' || !trigger || trigger.nodeType !== 1 || !css_anchor_ok())
			return false;
		const name = `--place-${panel.id || 'anon'}`;
		const prev = last_triggers.get(panel);
		if (prev && prev !== trigger && prev.nodeType === 1) {
			const owned = prev.style.getPropertyValue('anchor-name').trim();
			if (owned === name)
				prev.style.removeProperty('anchor-name');
		}
		last_triggers.set(panel, trigger);
		trigger.style.setProperty('anchor-name', name);
		panel.style.setProperty('position-anchor', name);
		panel.style.margin = `${GAP}px`;
		panel.style.inset = 'auto';
		panel.style.top = '';
		panel.style.left = '';
		panel.style.right = '';
		panel.style.bottom = '';
		if (CSS.supports('position-area: bottom')) {
			panel.style.positionArea = area_for(side, align);
			if (CSS.supports('position-try-fallbacks: flip-block'))
				panel.style.positionTryFallbacks = 'flip-block, flip-inline';
			return true;
		}
		panel.style.positionArea = '';
		if (side === 'bottom') {
			panel.style.top = `calc(anchor(bottom) + ${GAP}px)`;
			panel.style.left = align === 'end' ? 'anchor(right)' : align === 'middle' ? 'anchor(center)' : 'anchor(left)';
			if (align === 'end')
				panel.style.translate = '-100% 0';
			else if (align === 'middle')
				panel.style.translate = '-50% 0';
			else
				panel.style.translate = '';
		}
		else if (side === 'top') {
			panel.style.top = '';
			panel.style.bottom = `calc(anchor(top) + ${GAP}px)`;
			panel.style.left = align === 'end' ? 'anchor(right)' : align === 'middle' ? 'anchor(center)' : 'anchor(left)';
			if (align === 'end')
				panel.style.translate = '-100% 0';
			else if (align === 'middle')
				panel.style.translate = '-50% 0';
			else
				panel.style.translate = '';
		}
		else if (side === 'end') {
			panel.style.top = 'anchor(top)';
			panel.style.left = `calc(anchor(right) + ${GAP}px)`;
			panel.style.translate = '';
		}
		else {
			panel.style.top = 'anchor(top)';
			panel.style.left = '';
			panel.style.right = `calc(anchor(left) + ${GAP}px)`;
			panel.style.translate = '';
		}
		return true;
	}

	function apply_pixels(panel, rect, side, align) {
		const width = panel.offsetWidth;
		const height = panel.offsetHeight;
		let top = rect.top;
		let start = rect.left;

		if (side === 'bottom') {
			top = rect.bottom + GAP;
			start = align_inline(rect, width, align);
		}
		else if (side === 'top') {
			top = rect.top - height - GAP;
			start = align_inline(rect, width, align);
		}
		else if (side === 'end') {
			start = rect.right + GAP;
			top = rect.top;
		}
		else {
			start = rect.left - width - GAP;
			top = rect.top;
		}

		start = Math.min(Math.max(EDGE, start), window.innerWidth - width - EDGE);
		top = Math.min(Math.max(EDGE, top), window.innerHeight - height - EDGE);
		panel.style.positionAnchor = '';
		panel.style.positionArea = 'none';
		panel.style.positionTryFallbacks = '';
		panel.style.translate = '';
		panel.style.margin = '0';
		panel.style.inset = 'unset';
		panel.style.top = `${top}px`;
		panel.style.left = `${start}px`;
		panel.style.right = 'auto';
		panel.style.bottom = 'auto';
	}

	export function place(panel, anchor, side = 'bottom', align = 'start') {
		if (apply_css_anchor(panel, anchor, side, align))
			return;
		const rect = typeof anchor.getBoundingClientRect === 'function'
			? anchor.getBoundingClientRect()
			: { top: anchor.clientY, bottom: anchor.clientY, left: anchor.clientX, right: anchor.clientX, width: 0, height: 0 };
		apply_pixels(panel, rect, side, align);
		if (anchor && typeof anchor === 'object')
			last_triggers.set(panel, anchor);
	}

	function near_anchor(panel, anchor) {
		if (!anchor || typeof anchor.getBoundingClientRect !== 'function')
			return Boolean(panel.style.top);
		const box = panel.getBoundingClientRect();
		const origin = anchor.getBoundingClientRect();
		if (box.width === 0 || box.height === 0)
			return false;
		const dx = box.right < origin.left
			? origin.left - box.right
			: box.left > origin.right
				? box.left - origin.right
				: 0;
		const dy = box.bottom < origin.top
			? origin.top - box.bottom
			: box.top > origin.bottom
				? box.top - origin.bottom
				: 0;
		return dx <= 32 && dy <= 32;
	}

	function place_open(panel, anchor, side, align) {
		if (
			last_triggers.get(panel) === anchor
			&& getComputedStyle(panel).visibility !== 'hidden'
			&& (panel.style.top || near_anchor(panel, anchor))
		)
			return;
		panel.style.visibility = 'hidden';
		if (panel.dataset.match === 'anchor' && anchor && typeof anchor.offsetWidth === 'number')
			panel.style.minWidth = `${anchor.offsetWidth}px`;
		place(panel, anchor, side, align);
		void panel.offsetHeight;
		if (panel.style.top || near_anchor(panel, anchor)) {
			panel.style.visibility = '';
			return;
		}
		requestAnimationFrame(() => {
			place(panel, anchor, side, align);
			panel.style.visibility = '';
		});
	}

	function trigger_for(panel) {
		if (!panel.id)
			return null;
		return document.querySelector('[popovertarget="' + CSS.escape(panel.id) + '"]');
	}

	function on_before_toggle(event) {
		const panel = event.target;
		if (!(panel instanceof Element) || !panel.matches('.popover, .menu, .tooltip'))
			return;
		if (event.newState !== 'open') {
			panel.style.visibility = '';
			return;
		}
		const trigger = trigger_for(panel);
		if (!trigger)
			return;
		panel.style.visibility = 'hidden';
		if (panel.dataset.match === 'anchor')
			panel.style.minWidth = `${trigger.offsetWidth}px`;
		apply_css_anchor(panel, trigger, panel.dataset.side || 'bottom', panel.dataset.align || 'start');
	}

	if (typeof document !== 'undefined' && !document.__alumnaPlace) {
		document.__alumnaPlace = true;
		document.addEventListener('beforetoggle', on_before_toggle, true);
	}

	function items_of(panel) {
		return [...panel.querySelectorAll('.menu-item:not([aria-disabled="true"])')].filter(
			(item) => item.closest('[popover]') === panel
		);
	}

	function child_popovers(panel) {
		return [...panel.querySelectorAll('[popover]')].filter(
			(node) => node.parentElement?.closest('[popover]') === panel
		);
	}

	function close_child_popovers(panel, keep_id) {
		for (const node of child_popovers(panel)) {
			if (node.id !== keep_id && node.matches(':popover-open'))
				node.hidePopover();
		}
	}

	function root_popover(node) {
		let panel = node.closest('[popover]');
		for (;;) {
			const parent = panel?.parentElement?.closest('[popover]');
			if (!parent)
				return panel;
			panel = parent;
		}
	}

	function submenu_of(item) {
		const id = item?.getAttribute('popovertarget');
		if (!id)
			return null;
		const target = document.getElementById(id);
		return target?.matches('[popover]') ? target : null;
	}

	function bind_submenu_hover(panel) {
		if (panel.dataset.subHover)
			return;
		panel.dataset.subHover = '';
		panel.addEventListener('pointerover', on_menu_pointerover);
	}

	function on_menu_pointerover(event) {
		const panel = event.currentTarget;
		const item = event.target.closest('.menu-item');
		if (!item || item.closest('[popover]') !== panel)
			return;
		clear_delay(panel);
		const keep = item.getAttribute('popovertarget');
		close_child_popovers(panel, keep);
		const sub = keep ? document.getElementById(keep) : null;
		if (!sub || !sub.matches('[popover]') || sub.matches(':popover-open'))
			return;
		const id = setTimeout(() => {
			delays.delete(panel);
			if (item.matches(':hover'))
				sub.showPopover();
		}, 100);
		delays.set(panel, id);
	}

	export function on_toggle(event) {
		const panel = event.currentTarget;
		const open = panel.matches(':popover-open');
		const trigger = trigger_for(panel);
		if (trigger)
			trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
		if (!open) {
			clear_delay(panel);
			close_child_popovers(panel);
			panel.style.visibility = '';
			return;
		}
		if (!trigger)
			return;
		bind_submenu_hover(panel);
		place_open(panel, trigger, panel.dataset.side || 'bottom', panel.dataset.align || 'start');
	}

	function first_item(panel) {
		return items_of(panel)[0];
	}

	function open_trigger(trigger) {
		const id = trigger.getAttribute('popovertarget');
		if (!id)
			return;
		document.getElementById(id)?.showPopover();
	}

	function sibling_enter(event, bar_sel, trigger_sel) {
		const trigger = event.currentTarget;
		const bar = trigger.closest(bar_sel);
		if (!bar)
			return;
		const open = bar.querySelector(`${trigger_sel}[aria-expanded="true"]`);
		if (!open || open === trigger)
			return;
		open_trigger(trigger);
	}

	export function menubar_enter(event) {
		sibling_enter(event, '.menubar', '.menubar-trigger');
	}

	export function nav_enter(event) {
		sibling_enter(event, '.nav-menu', '.nav-menu-trigger');
	}

	function shift_menubar(panel, dir) {
		const bar = panel.closest('.menubar');
		if (!bar)
			return false;
		const triggers = [...bar.querySelectorAll('.menubar-trigger')];
		const current = triggers.find((item) => item.getAttribute('aria-expanded') === 'true');
		if (!current)
			return false;
		const i = triggers.indexOf(current);
		open_trigger(triggers[(i + dir + triggers.length) % triggers.length]);
		return true;
	}

	export function on_menu_toggle(event) {
		on_toggle(event);
		const panel = event.currentTarget;
		if (!panel.matches(':popover-open'))
			return;
		requestAnimationFrame(() => {
			first_item(panel)?.focus();
		});
	}

	export function menu_keydown(event) {
		const panel = event.currentTarget;
		if (event.target.closest('[popover]') !== panel)
			return;
		const rtl = getComputedStyle(panel).direction === 'rtl';
		const open_key = rtl ? 'ArrowLeft' : 'ArrowRight';
		const close_key = rtl ? 'ArrowRight' : 'ArrowLeft';
		const active = document.activeElement;
		const sub = submenu_of(active);

		if (event.key === open_key && sub) {
			event.preventDefault();
			if (sub.matches(':popover-open'))
				first_item(sub)?.focus();
			else
				sub.showPopover();
			return;
		}

		if (event.key === close_key) {
			const trigger = trigger_for(panel);
			const parent = trigger?.closest('[popover]');
			if (parent && parent !== panel) {
				event.preventDefault();
				panel.hidePopover();
				trigger.focus();
				return;
			}
			if (shift_menubar(panel, rtl ? 1 : -1)) {
				event.preventDefault();
				return;
			}
		}

		if (event.key === open_key && shift_menubar(panel, rtl ? -1 : 1)) {
			event.preventDefault();
			return;
		}

		if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Home' && event.key !== 'End')
			return;
		const items = items_of(panel);
		if (!items.length)
			return;
		event.preventDefault();
		const i = items.indexOf(active);
		let next = 0;
		if (event.key === 'ArrowDown')
			next = i < 0 ? 0 : (i + 1) % items.length;
		else if (event.key === 'ArrowUp')
			next = i < 0 ? items.length - 1 : (i - 1 + items.length) % items.length;
		else if (event.key === 'End')
			next = items.length - 1;
		items[next].focus();
	}

	export function choose_item(event) {
		if (event.currentTarget.getAttribute('aria-disabled') === 'true')
			return;
		if (event.currentTarget.getAttribute('popovertarget'))
			return;
		root_popover(event.currentTarget)?.hidePopover();
	}

	function open_context_at(panel, x, y) {
		bind_submenu_hover(panel);
		panel.style.visibility = 'hidden';
		panel.showPopover();
		place_open(panel, {
			getBoundingClientRect() {
				return { top: y, bottom: y, left: x, right: x, width: 0, height: 0 };
			}
		}, 'bottom', 'start');
		requestAnimationFrame(() => {
			first_item(panel)?.focus();
		});
	}

	export function on_context(event, panel) {
		event.preventDefault();
		const x = event.clientX;
		const y = event.clientY;
		const open = () => open_context_at(panel, x, y);
		if (!event.buttons) {
			open();
			return;
		}
		const on_up = () => {
			window.removeEventListener('pointerup', on_up, true);
			setTimeout(open, 0);
		};
		window.addEventListener('pointerup', on_up, true);
	}

	export function hide_on_escape(event, panel) {
		if (event.key !== 'Escape')
			return;
		panel.hidePopover();
	}

	function hide_if_open(panel) {
		if (typeof panel.hidePopover === 'function' && panel.matches(':popover-open'))
			panel.hidePopover();
	}

	function tip_open(panel) {
		return typeof panel.matches === 'function' && panel.matches(':popover-open');
	}

	function clear_tip(panel, trigger) {
		clear_delay(trigger);
		clear_delay(panel);
		const prev = last_triggers.get(panel);
		if (prev && prev !== trigger)
			clear_delay(prev);
	}

	function show_at(trigger, panel) {
		if (typeof panel.showPopover !== 'function')
			return;
		if (trigger.getAttribute?.('aria-expanded') === 'true') {
			hide_if_open(panel);
			return;
		}
		panel.style.visibility = 'hidden';
		panel.showPopover();
		place_open(panel, trigger, panel.dataset.side || 'top', panel.dataset.align || 'middle');
	}

	export function tip_enter(event, panel, wait = 200) {
		const trigger = event.currentTarget;
		clear_tip(panel, trigger);
		if (trigger.getAttribute('aria-expanded') === 'true') {
			hide_if_open(panel);
			return;
		}
		const prev = last_triggers.get(panel);
		const retarget = tip_open(panel) && prev !== trigger;
		if (retarget || wait <= 0) {
			if (retarget)
				panel.style.visibility = 'hidden';
			show_at(trigger, panel);
			return;
		}
		const id = setTimeout(() => show_at(trigger, panel), wait);
		delays.set(trigger, id);
	}

	export function tip_leave(event, panel, wait = 80) {
		const trigger = event.currentTarget;
		clear_delay(trigger);
		if (last_triggers.get(panel) !== trigger)
			return;
		const hide = () => {
			delays.delete(panel);
			delays.delete(trigger);
			if (last_triggers.get(panel) !== trigger)
				return;
			hide_if_open(panel);
		};
		if (wait <= 0) {
			hide();
			return;
		}
		const id = setTimeout(hide, wait);
		delays.set(trigger, id);
		delays.set(panel, id);
	}

	export function hover_enter(event, panel) {
		const trigger = event.currentTarget;
		clear_delay(panel);
		clear_delay(trigger);
		const id = setTimeout(() => {
			show_at(trigger, panel);
			place(panel, trigger, panel.dataset.side || 'bottom', panel.dataset.align || 'start');
		}, 200);
		delays.set(trigger, id);
	}

	export function hover_leave(event, panel) {
		clear_delay(event.currentTarget);
		clear_delay(panel);
		const id = setTimeout(() => panel.hidePopover(), 120);
		delays.set(panel, id);
	}

	export function hover_panel_enter(event) {
		clear_delay(event.currentTarget);
	}

	export function hover_panel_leave(event) {
		const panel = event.currentTarget;
		clear_delay(panel);
		const id = setTimeout(() => panel.hidePopover(), 120);
		delays.set(panel, id);
	}
</script>
