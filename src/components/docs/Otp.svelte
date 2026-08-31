<script>
	import Otp from '../blocks/Otp.svelte';
	import BlockView from './BlockView.svelte';

	const attrs = `class="otp-slot" type="text" inputmode="numeric" maxlength="1" spellcheck="false" autocapitalize="off" pattern="[0-9]" onbeforeinput={otp_event} oninput={otp_event} onkeydown={otp_event} onfocus={otp_event}`;

	const snippet = `<!-- Copy src/components/blocks/Otp.svelte. Form is inert. Same otp_event as /components/input-otp. -->
<script>
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

<div class="login" data-surface="page">
	<div class="login-inner">
		<div class="card">
			<div class="card-header">
				<div class="card-title">Enter verification code</div>
				<div class="card-description">We sent a 6-digit code to your email.</div>
			</div>
			<div class="card-content">
				<form>
					<div class="field-group">
						<div class="field">
							<div class="label" id="otp-label">Verification code</div>
							<div class="otp" role="group" aria-labelledby="otp-label">
								<input ${attrs} autocomplete="one-time-code" aria-label="Digit 1 of 6">
								<input ${attrs} aria-label="Digit 2 of 6">
								<input ${attrs} aria-label="Digit 3 of 6">
								<input ${attrs} aria-label="Digit 4 of 6">
								<input ${attrs} aria-label="Digit 5 of 6">
								<input ${attrs} aria-label="Digit 6 of 6">
							</div>
							<p class="field-description">Enter the 6-digit code sent to your email.</p>
						</div>
						<div class="field">
							<button class="button" type="submit">Verify</button>
							<p class="field-description">Didn't receive the code? <a href="#">Resend</a></p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>OTP</h1>
			<p>
				Card on the page background: verification code, six
				<code>.otp-slot</code> inputs, Verify, resend. Composes
				<a href="/components/input-otp">Input OTP</a>,
				<a href="/components/card">Card</a>,
				<a href="/components/field">Field</a>, and
				<a href="/components/button">Button</a>.
				Visual reference: shadcn-svelte <code>otp-01</code>.
				<code>src/components/blocks/Otp.svelte</code>.
			</p>
		</div>
		<BlockView>
			{#snippet preview()}
				<Otp />
			{/snippet}
			{#snippet code()}{snippet}{/snippet}
		</BlockView>
	</div>
</div>
