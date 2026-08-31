<script>
	import LoginSimple from '../blocks/LoginSimple.svelte';
	import BlockView from './BlockView.svelte';

	const snippet = `<!-- Copy src/components/blocks/LoginSimple.svelte. Form is inert. -->
<div class="login" data-surface="page">
	<div class="login-inner">
		<div class="card">
			<div class="card-header">
				<div class="card-title">Login</div>
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
							<button class="button button-outline" type="button">Login with Google</button>
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
			<h1>Login simple</h1>
			<p>
				Smaller login: card only on the page background (not muted), email
				and password, one Google outline button. Composes
				<a href="/components/card">Card</a>,
				<a href="/components/field">Field</a>, and
				<a href="/components/button">Button</a>.
				Visual reference: shadcn-svelte <code>login-01</code>.
				<code>src/components/blocks/LoginSimple.svelte</code>.
			</p>
		</div>
		<BlockView>
			{#snippet preview()}
				<LoginSimple />
			{/snippet}
			{#snippet code()}{snippet}{/snippet}
		</BlockView>
	</div>
</div>
