<script module>
	// Same API as ticks.js. Alumna cannot import relative .js.

	// Copy next to your page. Nice ticks for HTML grid / axis numbers.
	// Adapted from pancake ticks.js / d3-array (MIT).
	// https://github.com/d3/d3-array/blob/main/src/ticks.js

	const e10 = Math.sqrt(50);
	const e5 = Math.sqrt(10);
	const e2 = Math.sqrt(2);

	function increment(start, stop, count) {
		const step = (stop - start) / Math.max(0, count);
		const power = Math.floor(Math.log(step) / Math.LN10);
		const error = step / Math.pow(10, power);

		return power >= 0
			? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) *
				Math.pow(10, power)
			: -Math.pow(10, -power) /
				(error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
	}

	function clean(n) {
		if (!isFinite(n))
			return n;
		return Math.round(n * 1e6) / 1e6;
	}

	export function ticks(start, stop, count) {
		const hint = count == null ? 5 : count;
		let from = Number(start);
		let to = Number(stop);
		let reverse = false;
		let i = -1;
		let n;
		let out;
		let step;

		if (from === to && hint > 0)
			return [from];

		if (to < from) {
			reverse = true;
			const swap = from;
			from = to;
			to = swap;
		}

		step = increment(from, to, hint);
		if (step === 0 || !isFinite(step))
			return [];

		if (step > 0) {
			from = Math.ceil(from / step);
			to = Math.floor(to / step);
			out = new Array((n = Math.ceil(to - from + 1)));
			while (++i < n)
				out[i] = clean((from + i) * step);
		}
		else {
			from = Math.floor(from * step);
			to = Math.ceil(to * step);
			out = new Array((n = Math.ceil(from - to + 1)));
			while (++i < n)
				out[i] = clean((from - i) / step);
		}

		if (reverse)
			out.reverse();

		return out;
	}

	// axis: "x" → inset-inline-start; anything else → inset-block-start.
	export function tickStyle(percent, axis) {
		if (axis === 'x')
			return 'inset-inline-start: ' + Number(percent) + '%';
		return 'inset-block-start: ' + Number(percent) + '%';
	}

	// scale is linearScale(domain, range) from scale.js (pass it in; no relative import).
	export function tickMarks(start, stop, count, scale) {
		const values = ticks(start, stop, count);
		const out = [];
		for (let i = 0; i < values.length; i++) {
			const value = values[i];
			const raw = scale ? scale(value) : value;
			out.push({
				value: value,
				percent: Math.round(Number(raw) * 100) / 100
			});
		}
		return out;
	}
</script>
