<script>
	function ignore(event) {
		event.preventDefault();
	}
</script>

<div class="login">
	<div class="login-inner">
		<a class="login-brand" href="/">
			<span class="login-mark" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M7 3v7M12 3v13M17 3v7"></path>
				</svg>
			</span>
			Acme Inc.
		</a>

		<div class="card">
			<div class="card-header">
				<div class="card-title" style="font-size: var(--text-xl)">Create an account</div>
				<div class="card-description">Enter your information below to create your account</div>
			</div>
			<div class="card-content">
				<form onsubmit={ignore}>
					<div class="field-group">
						<div class="field">
							<label class="label" for="signup-name">Full name</label>
							<input class="input" id="signup-name" type="text" placeholder="Ada Lovelace" autocomplete="name">
						</div>
						<div class="field">
							<label class="label" for="signup-email">Email</label>
							<input class="input" id="signup-email" type="email" placeholder="m@example.com" autocomplete="username">
							<p class="field-description">We will use this to contact you. We will not share it.</p>
						</div>
						<div class="field">
							<label class="label" for="signup-password">Password</label>
							<input class="input" id="signup-password" type="password" autocomplete="new-password">
							<p class="field-description">Must be at least 8 characters.</p>
						</div>
						<div class="field">
							<label class="label" for="signup-confirm">Confirm password</label>
							<input class="input" id="signup-confirm" type="password" autocomplete="new-password">
						</div>
						<div class="field">
							<button class="button" type="submit">Create account</button>
							<p class="field-description" style="text-align: center">
								Already have an account? <a href="/blocks/login">Sign in</a>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
