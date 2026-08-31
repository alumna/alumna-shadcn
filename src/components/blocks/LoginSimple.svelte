<script>
	function ignore(event) {
		event.preventDefault();
	}
</script>

<div class="login" data-surface="page">
	<div class="login-inner">
		<div class="card">
			<div class="card-header">
				<div class="card-title" style="font-size: var(--text-2xl)">Login</div>
				<div class="card-description">Enter your email below to login to your account</div>
			</div>
			<div class="card-content">
				<form onsubmit={ignore}>
					<div class="field-group">
						<div class="field">
							<label class="label" for="simple-email">Email</label>
							<input class="input" id="simple-email" type="email" placeholder="m@example.com" autocomplete="username">
						</div>
						<div class="field">
							<div class="cluster">
								<label class="label" for="simple-password">Password</label>
								<a class="button button-link" href="/blocks/login-simple" style="margin-inline-start: auto; font-weight: 400">Forgot your password?</a>
							</div>
							<input class="input" id="simple-password" type="password" autocomplete="current-password">
						</div>
						<div class="field">
							<button class="button" type="submit">Login</button>
							<button class="button button-outline" type="button">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
								</svg>
								Login with Google
							</button>
							<p class="field-description" style="text-align: center">
								Don't have an account? <a href="/blocks/signup">Sign up</a>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
