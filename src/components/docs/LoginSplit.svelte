<script>
	import LoginSplit from '../blocks/LoginSplit.svelte';
	import BlockView from './BlockView.svelte';

	const snippet = `<!-- Copy src/components/blocks/LoginSplit.svelte. Form is inert. -->
<div class="login-split">
	<div class="login-split-main">
		<a class="login-brand" href="/">
			<span class="login-mark" aria-hidden="true"><!-- icon --></span>
			Acme Inc.
		</a>
		<div class="login-split-body">
			<div class="login-inner">
				<div class="card">
					<div class="card-header" style="text-align: center">
						<div class="card-title" style="font-size: var(--text-2xl)">Login to your account</div>
						<div class="card-description">Enter your email below to login to your account</div>
					</div>
					<div class="card-content">
						<form>
							<div class="field-group">
								<div class="field">
									<label class="label" for="email">Email</label>
									<input class="input" id="email" type="email">
								</div>
								<div class="field">
									<label class="label" for="password">Password</label>
									<input class="input" id="password" type="password">
								</div>
								<div class="field">
									<button class="button" type="submit">Login</button>
								</div>
								<div class="field-separator"><span>Or continue with</span></div>
								<div class="field">
									<button class="button button-outline" type="button">Login with Apple</button>
									<button class="button button-outline" type="button">Login with Google</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="login-split-panel" aria-hidden="true"></div>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Login split</h1>
			<p>
				Form column plus a muted column (no raster image). Brand at the top of
				the form column, card with email and password, then Apple + Google
				outline buttons with visible labels. Composes
				<a href="/components/card">Card</a>,
				<a href="/components/field">Field</a>, and
				<a href="/components/button">Button</a>.
				Frame classes:
				<code>login-split</code>,
				<code>login-split-main</code>,
				<code>login-split-body</code>,
				<code>login-split-panel</code>.
				Visual reference: shadcn-svelte <code>login-02</code>. Full file:
				<code>src/components/blocks/LoginSplit.svelte</code>.
			</p>
		</div>

		<BlockView>
			{#snippet preview()}
				<LoginSplit />
			{/snippet}
			{#snippet code()}{snippet}{/snippet}
		</BlockView>
	</div>
</div>
