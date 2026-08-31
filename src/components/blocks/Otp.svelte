<script>
	function ignore(event) {
		event.preventDefault();
	}

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
</script>

<div class="login" data-surface="page">
	<div class="login-inner">
		<div class="card">
			<div class="card-header">
				<div class="card-title" style="font-size: var(--text-xl)">Enter verification code</div>
				<div class="card-description">We sent a 6-digit code to your email.</div>
			</div>
			<div class="card-content">
				<form onsubmit={ignore}>
					<div class="field-group">
						<div class="field">
							<div class="label" id="otp-label">Verification code</div>
							<div class="otp" role="group" aria-labelledby="otp-label">
								<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" autocomplete="one-time-code" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 1 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
								<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 2 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
								<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 3 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
								<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 4 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
								<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 5 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
								<input class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" aria-label="Digit 6 of 6" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}>
							</div>
							<p class="field-description">Enter the 6-digit code sent to your email.</p>
						</div>
						<div class="field">
							<button class="button" type="submit">Verify</button>
							<p class="field-description" style="text-align: center">
								Didn't receive the code? <a href="/blocks/otp">Resend</a>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
