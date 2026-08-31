// Copy next to your page. Scaled points (plot space 0–100) → SVG path d.
// Curve is Catmull-Rom as cubic Bézier — an option on line and area, not a type.

function fmt(n) {
	return Math.round(Number(n) * 100) / 100;
}

function straightPath(points) {
	let d = 'M' + fmt(points[0].x) + ',' + fmt(points[0].y);
	for (let i = 1; i < points.length; i++)
		d += 'L' + fmt(points[i].x) + ',' + fmt(points[i].y);
	return d;
}

function curvePath(points) {
	let d = 'M' + fmt(points[0].x) + ',' + fmt(points[0].y);
	for (let i = 0; i < points.length - 1; i++) {
		const p0 = points[i === 0 ? 0 : i - 1];
		const p1 = points[i];
		const p2 = points[i + 1];
		const p3 = i + 2 < points.length ? points[i + 2] : p2;
		const c1x = p1.x + (p2.x - p0.x) / 6;
		const c1y = p1.y + (p2.y - p0.y) / 6;
		const c2x = p2.x - (p3.x - p1.x) / 6;
		const c2y = p2.y - (p3.y - p1.y) / 6;
		d += 'C' + fmt(c1x) + ',' + fmt(c1y) + ' ' + fmt(c2x) + ',' + fmt(c2y) + ' ' + fmt(p2.x) + ',' + fmt(p2.y);
	}
	return d;
}

// points: { x, y }[] already in viewBox 0–100. curve: truthy → spline.
export function linePath(points, curve) {
	const list = points || [];
	if (list.length === 0)
		return '';
	if (list.length === 1)
		return 'M' + fmt(list[0].x) + ',' + fmt(list[0].y);
	if (curve)
		return curvePath(list);
	return straightPath(list);
}

// Close the line to a floor in plot space (default 100 = bottom). curve as linePath.
export function areaPath(points, curve, floor) {
	const list = points || [];
	if (list.length === 0)
		return '';
	const y0 = floor == null ? 100 : Number(floor);
	const top = linePath(list, curve);
	const last = list[list.length - 1];
	const first = list[0];
	return top + 'L' + fmt(last.x) + ',' + fmt(y0) + 'L' + fmt(first.x) + ',' + fmt(y0) + 'Z';
}
