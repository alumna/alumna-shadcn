<script module>
	// Same API as hover.js. Alumna cannot import relative .js.

	// Copy next to your page. Bar hover: the hit target is the bar.
	// Line/area: nearest-x in plot space. Native title is not enough — put the string on .chart-tip.

	export function tipText(item) {
		if (!item)
			return '';
		const label = item.label == null ? '' : String(item.label);
		const value = item.value == null ? '' : String(item.value);
		if (!label)
			return value;
		if (value === '')
			return label;
		return label + ': ' + value;
	}

	export function barIndex(node, root) {
		if (!node || !root)
			return -1;
		let bar = null;
		if (node.nodeType === 1 && node.classList && node.classList.contains('chart-bar'))
			bar = node;
		else if (node.closest)
			bar = node.closest('.chart-bar');
		if (!bar || !root.contains(bar))
			return -1;
		const bars = root.querySelectorAll(':scope > .chart-bar');
		for (let i = 0; i < bars.length; i++) {
			if (bars[i] === bar)
				return i;
		}
		return -1;
	}

	export function showTip(el, item) {
		if (!el)
			return;
		if (!item) {
			el.hidden = true;
			el.textContent = '';
			return;
		}
		el.hidden = false;
		el.textContent = tipText(item);
	}

	// Plot-space pointer (0–100) from a .chart-plot getBoundingClientRect.
	export function pointerPlot(event, plot) {
		if (!event || !plot)
			return null;
		const bcr = plot.getBoundingClientRect();
		const w = bcr.width;
		const h = bcr.height;
		if (w === 0 || h === 0)
			return null;
		return {
			x: 100 * (event.clientX - bcr.left) / w,
			y: 100 * (event.clientY - bcr.top) / h
		};
	}

	// Nearest point by x in plot space (sparkline midpoint snap, not a 2D search).
	export function nearestX(points, plotX) {
		const list = points || [];
		if (list.length === 0)
			return -1;
		if (list.length === 1)
			return 0;
		const at = Number(plotX);
		let next = 0;
		while (next < list.length && list[next].x < at)
			next++;
		if (next === 0)
			return 0;
		if (next >= list.length)
			return list.length - 1;
		const prev = next - 1;
		const mid = (list[prev].x + list[next].x) / 2;
		return at < mid ? prev : next;
	}

	export function hoverPoint(points, event, plot) {
		const at = pointerPlot(event, plot);
		if (!at)
			return null;
		const i = nearestX(points, at.x);
		if (i < 0)
			return null;
		return points[i];
	}

	export function plotStyle(point) {
		if (!point)
			return '';
		return 'inset-inline-start: ' + point.x + '%; inset-block-start: ' + point.y + '%';
	}

	export function cursorStyle(point) {
		if (!point)
			return '';
		return 'inset-inline-start: ' + point.x + '%';
	}
</script>
