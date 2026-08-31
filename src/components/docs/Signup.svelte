<script>
	import Signup from '../blocks/Signup.svelte';
	import BlockView from './BlockView.svelte';

	const snippet = `<!-- Copy src/components/blocks/Signup.svelte. Form is inert. -->
<div class="login">
	<div class="login-inner">
		<a class="login-brand" href="/">…</a>
		<div class="card">
			<div class="card-header">
				<div class="card-title">Create an account</div>
				<div class="card-description">Enter your information below to create your account</div>
			</div>
			<div class="card-content">
				<form>
					<div class="field-group">
						<div class="field">
							<label class="label" for="name">Full name</label>
							<input class="input" id="name" type="text">
						</div>
						<div class="field">
							<label class="label" for="email">Email</label>
							<input class="input" id="email" type="email">
						</div>
						<div class="field">
							<label class="label" for="password">Password</label>
							<input class="input" id="password" type="password">
						</div>
						<div class="field">
							<button class="button" type="submit">Create account</button>
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
			<h1>Signup</h1>
			<p>
				Visual sibling of Login: muted page, brand, card. Name, email, password,
				confirm. No social buttons. Composes
				<a href="/components/card">Card</a>,
				<a href="/components/field">Field</a>, and
				<a href="/components/button">Button</a>.
				Visual reference: shadcn-svelte
				<code>signup-01</code> in the login-03 frame.
				<code>src/components/blocks/Signup.svelte</code>.
			</p>
		</div>
		<BlockView>
			{#snippet preview()}
				<Signup />
			{/snippet}
			{#snippet code()}{snippet}{/snippet}
		</BlockView>
	</div>
</div>
