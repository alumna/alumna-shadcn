<script>
	import Login from '../blocks/Login.svelte';
	import BlockView from './BlockView.svelte';

	const snippet = `<!-- Copy src/components/blocks/Login.svelte. Form is inert. -->
<div class="login">
	<div class="login-inner">
		<a class="login-brand" href="/">
			<span class="login-mark" aria-hidden="true"><!-- icon --></span>
			Acme Inc.
		</a>
		<div class="card">
			<div class="card-header" style="text-align: center">
				<div class="card-title" style="font-size: var(--text-xl)">Welcome back</div>
				<div class="card-description">Login with your Apple or Google account</div>
			</div>
			<div class="card-content">
				<form>
					<div class="field-group">
						<div class="field">
							<button class="button button-outline" type="button">Login with Apple</button>
							<button class="button button-outline" type="button">Login with Google</button>
						</div>
						<div class="field-separator"><span>Or continue with</span></div>
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
			<h1>Login</h1>
			<p>
				Centered muted page, brand, card, Apple + Google outline buttons with visible
				labels, “Or continue with”, email and password. Composes
				<a href="/components/card">Card</a>,
				<a href="/components/field">Field</a>, and
				<a href="/components/button">Button</a>.
				Visual reference:
				shadcn-svelte <code>login-03</code>. Full file:
				<code>src/components/blocks/Login.svelte</code>.
			</p>
		</div>

		<BlockView>
			{#snippet preview()}
				<Login />
			{/snippet}
			{#snippet code()}{snippet}{/snippet}
		</BlockView>
	</div>
</div>
