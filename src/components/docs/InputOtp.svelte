<script>
	function otp_event(event) {
		const input = event.target;
		if (!input.classList.contains('otp-slot')) return;
		const slots = [...input.closest('.otp').querySelectorAll('.otp-slot')];
		const i = slots.indexOf(input);

		if (event.type === 'beforeinput') {
			if (event.inputType.startsWith('insert') && !(event.data && /^\d+$/.test(event.data)))
				event.preventDefault();
			return;
		}

		if (event.type === 'input') {
			const digit = input.value.replace(/\D/g, '').slice(-1);
			input.value = digit;
			if (digit) slots[i + 1]?.focus();
			return;
		}

		if (event.type === 'keydown' && event.key === 'Backspace' && !input.value && i > 0) {
			event.preventDefault();
			slots[i - 1].focus();
			return;
		}

		if (event.type === 'focus')
			input.select();
	}

	const attrs = `class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}`;

	const snippet = `<script>
	function otp_event(event) {
		const input = event.target;
		if (!input.classList.contains('otp-slot')) return;
		const slots = [...input.closest('.otp').querySelectorAll('.otp-slot')];
		const i = slots.indexOf(input);

		if (event.type === 'beforeinput') {
			if (event.inputType.startsWith('insert') && !(event.data && /^\\d+$/.test(event.data)))
				event.preventDefault();
			return;
		}

		if (event.type === 'input') {
			const digit = input.value.replace(/\\D/g, '').slice(-1);
			input.value = digit;
			if (digit) slots[i + 1]?.focus();
			return;
		}

		if (event.type === 'keydown' && event.key === 'Backspace' && !input.value && i > 0) {
			event.preventDefault();
			slots[i - 1].focus();
			return;
		}

		if (event.type === 'focus')
			input.select();
	}
<\/script>

<div class="field">
	<div class="label" id="otp-label">One-time code</div>
	<div class="otp" role="group" aria-labelledby="otp-label">
		<input ${attrs} autocomplete="one-time-code" aria-label="Digit 1 of 6">
		<input ${attrs} aria-label="Digit 2 of 6">
		<input ${attrs} aria-label="Digit 3 of 6">
		<input ${attrs} aria-label="Digit 4 of 6">
		<input ${attrs} aria-label="Digit 5 of 6">
		<input ${attrs} aria-label="Digit 6 of 6">
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Input OTP</h1>
			<p>
				N adjacent <code>&lt;input class="otp-slot"&gt;</code> in
				<code>.otp</code>. Digits only. A digit moves focus forward;
				Backspace on an empty slot moves back.
				<code>role="group"</code> names the cluster via
				<code>aria-labelledby</code>; each slot has its own
				<code>aria-label</code>. These are real inputs, not one fake field.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="field" style="max-width: 20rem">
					<div class="label" id="otp-demo-label">One-time code</div>
					<div class="otp" role="group" aria-labelledby="otp-demo-label">
						<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" autocomplete="one-time-code" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 1 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
						<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 2 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
						<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 3 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
						<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 4 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
						<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 5 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
						<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 6 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
					</div>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
