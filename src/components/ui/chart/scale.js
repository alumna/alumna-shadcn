// Copy next to your page. Map a series to --chart-size percents.
// linearScale is also the x/y helper later waves reuse.

export function linearScale(domain, range) {
	const d0 = Number(domain[0]);
	const d1 = Number(domain[1]);
	const r0 = Number(range[0]);
	const r1 = Number(range[1]);
	const span = d1 - d0;

	function scale(value) {
		if (span === 0)
			return r0;
		return r0 + (Number(value) - d0) / span * (r1 - r0);
	}

	scale.inverse = function inverse() {
		return linearScale(range, domain);
	};

	return scale;
}

export function extent(values) {
	let min = Infinity;
	let max = -Infinity;
	for (let i = 0; i < values.length; i++) {
		const v = Number(values[i]);
		if (v < min)
			min = v;
		if (v > max)
			max = v;
	}
	if (min === Infinity)
		return [0, 0];
	return [min, max];
}

function clamp_percent(n) {
	if (n < 0)
		return 0;
	if (n > 100)
		return 100;
	return Math.round(n * 100) / 100;
}

// items: { label, value, token? }[]
// domain: optional [min, max]. Default is 0 … max(values).
export function barPercents(items, domain) {
	const list = items || [];
	const values = [];
	for (let i = 0; i < list.length; i++)
		values.push(Number(list[i].value) || 0);

	let min = 0;
	let max = 0;
	if (domain && domain.length === 2) {
		min = Number(domain[0]);
		max = Number(domain[1]);
	}
	else {
		for (let i = 0; i < values.length; i++) {
			if (values[i] > max)
				max = values[i];
		}
	}

	const scale = linearScale([min, max], [0, 100]);
	const out = [];
	for (let i = 0; i < list.length; i++) {
		const item = list[i];
		out.push({
			label: item.label,
			value: item.value,
			token: item.token,
			percent: clamp_percent(scale(values[i]))
		});
	}
	return out;
}

// Optional token: 1 … 5 or a variable name like --chart-3.
export function barFill(item) {
	if (!item || item.token == null || item.token === '')
		return '';
	const raw = String(item.token);
	const name = raw.charCodeAt(0) === 45 ? raw : '--chart-' + raw;
	return 'var(' + name + ')';
}

export function barStyle(item) {
	let css = '--chart-size: ' + item.percent + '%';
	const fill = barFill(item);
	if (fill)
		css += '; background: ' + fill;
	return css;
}

function round_plot(n) {
	return Math.round(Number(n) * 100) / 100;
}

// items: { label, value, x? }[]
// domain: optional { x: [min, max], y: [min, max] }
// x defaults to index. y defaults to 0 … max(values).
// Plot space is viewBox 0 0 100 100 (y grows down).
export function plotSeries(items, domain) {
	const list = items || [];
	const n = list.length;
	const xs = [];
	const ys = [];
	for (let i = 0; i < n; i++) {
		const row = list[i];
		xs.push(row.x == null ? i : Number(row.x));
		ys.push(Number(row.value) || 0);
	}

	let x0;
	let x1;
	if (domain && domain.x && domain.x.length === 2) {
		x0 = Number(domain.x[0]);
		x1 = Number(domain.x[1]);
	}
	else if (n === 0) {
		x0 = 0;
		x1 = 0;
	}
	else {
		const xe = extent(xs);
		x0 = xe[0];
		x1 = xe[1];
	}

	let y0;
	let y1;
	if (domain && domain.y && domain.y.length === 2) {
		y0 = Number(domain.y[0]);
		y1 = Number(domain.y[1]);
	}
	else {
		y0 = 0;
		y1 = 0;
		for (let i = 0; i < ys.length; i++) {
			if (ys[i] > y1)
				y1 = ys[i];
		}
	}

	const sx = linearScale([x0, x1], [0, 100]);
	const sy = linearScale([y0, y1], [100, 0]);
	const out = [];
	for (let i = 0; i < n; i++) {
		const row = list[i];
		out.push({
			label: row.label,
			value: row.value,
			x: round_plot(sx(xs[i])),
			y: round_plot(sy(ys[i]))
		});
	}
	return out;
}
