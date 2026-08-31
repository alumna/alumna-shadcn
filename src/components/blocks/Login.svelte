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
			<div class="card-header" style="text-align: center">
				<div class="card-title" style="font-size: var(--text-xl)">Welcome back</div>
				<div class="card-description">Login with your Apple or Google account</div>
			</div>
			<div class="card-content">
				<form onsubmit={ignore}>
					<div class="field-group">
						<div class="field">
							<button class="button button-outline" type="button">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
								</svg>
								Login with Apple
							</button>
							<button class="button button-outline" type="button">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
								</svg>
								Login with Google
							</button>
						</div>
						<div class="field-separator"><span>Or continue with</span></div>
						<div class="field">
							<label class="label" for="login-email">Email</label>
							<input class="input" id="login-email" type="email" placeholder="m@example.com" autocomplete="username">
						</div>
						<div class="field">
							<div class="cluster">
								<label class="label" for="login-password">Password</label>
								<a class="button button-link" href="/blocks/login" style="margin-left: auto; font-weight: 400">Forgot your password?</a>
							</div>
							<input class="input" id="login-password" type="password" autocomplete="current-password">
						</div>
						<div class="field">
							<button class="button" type="submit">Login</button>
							<p class="field-description" style="text-align: center">
								Don't have an account? <a href="/blocks/login">Sign up</a>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>

		<p class="field-description" style="text-align: center; padding-inline: 1.5rem">
			By clicking continue, you agree to our <a href="/blocks/login">Terms of Service</a>
			and <a href="/blocks/login">Privacy Policy</a>.
		</p>
	</div>
</div>
