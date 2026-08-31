<script>
	const PAGE_SIZE = 5;

	const invoices = [
		{ invoice: 'INV-001', status: 'Paid', method: 'Card', amount: 250 },
		{ invoice: 'INV-002', status: 'Pending', method: 'PayPal', amount: 150 },
		{ invoice: 'INV-003', status: 'Overdue', method: 'Bank', amount: 350 },
		{ invoice: 'INV-004', status: 'Paid', method: 'Card', amount: 450 },
		{ invoice: 'INV-005', status: 'Paid', method: 'Bank', amount: 550 },
		{ invoice: 'INV-006', status: 'Pending', method: 'Card', amount: 200 },
		{ invoice: 'INV-007', status: 'Overdue', method: 'PayPal', amount: 125 },
		{ invoice: 'INV-008', status: 'Paid', method: 'Card', amount: 890 },
		{ invoice: 'INV-009', status: 'Pending', method: 'Bank', amount: 75 },
		{ invoice: 'INV-010', status: 'Paid', method: 'PayPal', amount: 320 },
		{ invoice: 'INV-011', status: 'Overdue', method: 'Card', amount: 680 },
		{ invoice: 'INV-012', status: 'Paid', method: 'Bank', amount: 40 }
	];

	let sort_key = $state('invoice');
	let sort_dir = $state('asc');
	let page = $state(0);

	function compare(a, b, key) {
		const av = a[key];
		const bv = b[key];
		if (typeof av === 'number' && typeof bv === 'number')
			return av - bv;
		return String(av).localeCompare(String(bv), 'en');
	}

	function sort_by(key) {
		if (sort_key === key)
			sort_dir = sort_dir === 'asc' ? 'desc' : 'asc';
		else {
			sort_key = key;
			sort_dir = 'asc';
		}
		page = 0;
	}

	function sort_aria(key) {
		if (sort_key !== key)
			return 'none';
		return sort_dir === 'asc' ? 'ascending' : 'descending';
	}

	function money(n) {
		return `$${n.toFixed(2)}`;
	}

	function status_badge(status) {
		if (status === 'Paid')
			return 'badge badge-secondary';
		if (status === 'Overdue')
			return 'badge badge-destructive';
		return 'badge badge-outline';
	}

	const sorted = $derived((() => {
		const copy = invoices.slice();
		copy.sort((a, b) => {
			const cmp = compare(a, b, sort_key);
			return sort_dir === 'asc' ? cmp : -cmp;
		});
		return copy;
	})());

	const page_count = $derived(Math.max(1, Math.ceil(sorted.length / PAGE_SIZE)));
	const pages = $derived(Array.from({ length: page_count }, (_, i) => i));
	const rows = $derived(sorted.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE));

	const people_a = [
		{ name: 'Ada Lovelace', role: 'Mathematician', city: 'London' },
		{ name: 'Alan Turing', role: 'Computer scientist', city: 'Manchester' },
		{ name: 'Grace Hopper', role: 'Rear admiral', city: 'New York' },
		{ name: 'Katherine Johnson', role: 'Mathematician', city: 'Hampton' },
		{ name: 'Dorothy Vaughan', role: 'Computer programmer', city: 'Hampton' },
		{ name: 'Margaret Hamilton', role: 'Software engineer', city: 'Cambridge' },
		{ name: 'Hedy Lamarr', role: 'Inventor', city: 'Vienna' },
		{ name: 'Claude Shannon', role: 'Mathematician', city: 'Gaylord' }
	];
	const people_b = [
		{ name: 'Tim Berners-Lee', role: 'Engineer', dept: 'Web' },
		{ name: 'Radia Perlman', role: 'Engineer', dept: 'Networks' },
		{ name: 'Linus Torvalds', role: 'Engineer', dept: 'Kernel' },
		{ name: 'Barbara Liskov', role: 'Computer scientist', dept: 'Languages' },
		{ name: 'Vint Cerf', role: 'Engineer', dept: 'Internet' }
	];

	let people_set = $state('a');
	let people = $state(people_a.map((row) => ({ ...row })));
	let page_size = $state(4);
	let people_sort_key = $state('name');
	let people_sort_dir = $state('asc');
	let people_page = $state(0);

	const people_columns = $derived(people.length ? Object.keys(people[0]) : []);
	const people_sorted = $derived((() => {
		const copy = people.slice();
		copy.sort((a, b) => {
			const cmp = compare(a, b, people_sort_key);
			return people_sort_dir === 'asc' ? cmp : -cmp;
		});
		return copy;
	})());
	const people_page_count = $derived(Math.max(1, Math.ceil(people_sorted.length / page_size)));
	const people_pages = $derived(Array.from({ length: people_page_count }, (_, i) => i));
	const people_rows = $derived(people_sorted.slice(people_page * page_size, people_page * page_size + page_size));

	function people_sort_by(key) {
		if (people_sort_key === key)
			people_sort_dir = people_sort_dir === 'asc' ? 'desc' : 'asc';
		else {
			people_sort_key = key;
			people_sort_dir = 'asc';
		}
		people_page = 0;
	}

	function people_sort_aria(key) {
		if (people_sort_key !== key)
			return 'none';
		return people_sort_dir === 'asc' ? 'ascending' : 'descending';
	}

	function heading(key) {
		return key.slice(0, 1).toUpperCase() + key.slice(1);
	}

	function set_page_size(n) {
		page_size = n;
		people_page = 0;
	}

	function swap_people() {
		people_set = people_set === 'a' ? 'b' : 'a';
		const src = people_set === 'a' ? people_a : people_b;
		people = src.map((row) => ({ ...row }));
		people_sort_key = Object.keys(people[0])[0];
		people_sort_dir = 'asc';
		people_page = 0;
	}

	const snippet = `<div class="table-wrap">
	<table class="table">
		<caption>Invoices</caption>
		<thead>
			<tr>
				<th scope="col" aria-sort="ascending">
					<button class="table-sort" type="button">
						Invoice
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="m6 15 6-6 6 6"></path>
						</svg>
					</button>
				</th>
				<th scope="col" aria-sort="none">
					<button class="table-sort" type="button">
						Status
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="m6 15 6-6 6 6"></path>
						</svg>
					</button>
				</th>
				<th scope="col" aria-sort="none">
					<button class="table-sort" type="button">
						Amount
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="m6 15 6-6 6 6"></path>
						</svg>
					</button>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>INV-001</td>
				<td><span class="badge badge-secondary">Paid</span></td>
				<td>$250.00</td>
			</tr>
			<tr>
				<td>INV-002</td>
				<td><span class="badge badge-outline">Pending</span></td>
				<td>$150.00</td>
			</tr>
		</tbody>
	</table>
</div>
<nav class="pagination" aria-label="Pagination">
	<button class="button button-outline button-sm" type="button" disabled aria-disabled="true">Previous</button>
	<button class="button button-sm" type="button" aria-current="page">1</button>
	<button class="button button-outline button-sm" type="button">2</button>
	<button class="button button-outline button-sm" type="button">3</button>
	<button class="button button-outline button-sm" type="button">Next</button>
</nav>`;

	const dynamic = `<script>
	let page_size = $state(4);
	let rows = $state([
		{ name: 'Ada Lovelace', role: 'Mathematician', city: 'London' },
		{ name: 'Alan Turing', role: 'Computer scientist', city: 'Manchester' },
		{ name: 'Grace Hopper', role: 'Rear admiral', city: 'New York' },
		{ name: 'Katherine Johnson', role: 'Mathematician', city: 'Hampton' },
		{ name: 'Dorothy Vaughan', role: 'Computer programmer', city: 'Hampton' },
		{ name: 'Margaret Hamilton', role: 'Software engineer', city: 'Cambridge' },
		{ name: 'Hedy Lamarr', role: 'Inventor', city: 'Vienna' },
		{ name: 'Claude Shannon', role: 'Mathematician', city: 'Gaylord' }
	]);
	let sort_key = $state('name');
	let sort_dir = $state('asc');
	let page = $state(0);
	const columns = $derived(Object.keys(rows[0] ?? {}));
	const sorted = $derived((() => {
		const copy = rows.slice();
		copy.sort((a, b) => {
			const av = a[sort_key];
			const bv = b[sort_key];
			const cmp = typeof av === 'number' && typeof bv === 'number' ? av - bv : String(av).localeCompare(String(bv), 'en');
			return sort_dir === 'asc' ? cmp : -cmp;
		});
		return copy;
	})());
	const page_count = $derived(Math.max(1, Math.ceil(sorted.length / page_size)));
	const visible = $derived(sorted.slice(page * page_size, page * page_size + page_size));
	function sort_by(key) {
		if (sort_key === key) sort_dir = sort_dir === 'asc' ? 'desc' : 'asc';
		else { sort_key = key; sort_dir = 'asc'; }
		page = 0;
	}
	function sort_aria(key) {
		if (sort_key !== key) return 'none';
		return sort_dir === 'asc' ? 'ascending' : 'descending';
	}
	function heading(key) {
		return key.slice(0, 1).toUpperCase() + key.slice(1);
	}
<\/script>

<div class="table-wrap">
	<table class="table">
		<caption>People</caption>
		<thead>
			<tr>
				{#each columns as key}
					<th scope="col" aria-sort={sort_aria(key)}>
						<button class="table-sort" type="button" onclick={() => sort_by(key)}>
							{heading(key)}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path d="m6 15 6-6 6 6"></path>
							</svg>
						</button>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each visible as row (row.name)}
				<tr>
					{#each columns as key}
						<td>{row[key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<nav class="pagination" aria-label="Pagination">
	<button class="button button-outline button-sm" type="button" disabled={page === 0}>Previous</button>
	{#each Array.from({ length: page_count }, (_, i) => i) as i}
		<button class={page === i ? 'button button-sm' : 'button button-outline button-sm'} type="button" aria-current={page === i ? 'page' : undefined} onclick={() => (page = i)}>{i + 1}</button>
	{/each}
	<button class="button button-outline button-sm" type="button" disabled={page >= page_count - 1}>Next</button>
</nav>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Data table</h1>
			<p>
				Compose <a href="/components/table">Table</a>
				(<code>.table</code> in <code>.table-wrap</code>) and
				<a href="/components/pagination">Pagination</a>
				(<code>nav.pagination</code>).
				A <code>&lt;button class="table-sort"&gt;</code> in each
				<code>&lt;th&gt;</code> toggles ascending or descending.
				Set <code>aria-sort</code> on the header.
				Pagination slices the sorted rows — this page keeps
				twelve invoices and five per page.
				Tiny <code>$state</code> for sort key, direction, and page
				index. There is no wrapper and no table engine. Not TanStack.
				A second example binds rows, columns, and page size to
				variables.
			</p>
			<nav class="toc" aria-label="On this page">
				<ol>
					<li><a href="#preview">Preview</a></li>
					<li><a href="#markup">Markup</a></li>
					<li><a href="#dynamic">Dynamic</a></li>
				</ol>
			</nav>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="preview">Preview</h2>
			<div class="docs-preview">
				{#snippet sort_th(key, label)}
					<th scope="col" aria-sort={sort_aria(key)}>
						<button class="table-sort" type="button" onclick={() => sort_by(key)}>
							{label}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path d="m6 15 6-6 6 6"></path>
							</svg>
						</button>
					</th>
				{/snippet}
				<div class="stack" style="--stack-gap: 1rem">
					<div class="table-wrap">
						<table class="table">
							<caption>Invoices</caption>
							<thead>
								<tr>
									{@render sort_th('invoice', 'Invoice')}
									{@render sort_th('status', 'Status')}
									{@render sort_th('method', 'Method')}
									{@render sort_th('amount', 'Amount')}
								</tr>
							</thead>
							<tbody>
								{#each rows as row (row.invoice)}
									<tr>
										<td>{row.invoice}</td>
										<td><span class={status_badge(row.status)}>{row.status}</span></td>
										<td>{row.method}</td>
										<td>{money(row.amount)}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
					<nav class="pagination" aria-label="Pagination">
						<button
							class="button button-outline button-sm"
							type="button"
							disabled={page === 0}
							aria-disabled={page === 0 ? 'true' : undefined}
							onclick={() => (page = Math.max(0, page - 1))}
						>Previous</button>
						{#each pages as i}
							<button
								class={page === i ? 'button button-sm' : 'button button-outline button-sm'}
								type="button"
								aria-current={page === i ? 'page' : undefined}
								onclick={() => (page = i)}
							>{i + 1}</button>
						{/each}
						<button
							class="button button-outline button-sm"
							type="button"
							disabled={page >= page_count - 1}
							aria-disabled={page >= page_count - 1 ? 'true' : undefined}
							onclick={() => (page = Math.min(page_count - 1, page + 1))}
						>Next</button>
					</nav>
				</div>
			</div>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="markup">Markup</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>

		<div class="stack" style="--stack-gap: 0.75rem">
			<h2 id="dynamic">Dynamic</h2>
			<p>
				Rows are a <code>$state</code> array of objects. Column headers
				come from the keys on those objects — swap the list and the
				columns follow. Page size is a variable, not a hardcoded
				<code>5</code>. Sort the full list, then slice with
				<code>page_size</code>. Same
				<code>.table</code> / <code>.pagination</code> markup as above.
			</p>
			<div class="docs-preview" data-example="dynamic">
				<div class="stack" style="--stack-gap: 1rem">
					<div class="cluster">
						<button
							class={page_size === 3 ? 'button button-sm' : 'button button-outline button-sm'}
							type="button"
							aria-pressed={page_size === 3 ? 'true' : 'false'}
							onclick={() => set_page_size(3)}
						>3 per page</button>
						<button
							class={page_size === 4 ? 'button button-sm' : 'button button-outline button-sm'}
							type="button"
							aria-pressed={page_size === 4 ? 'true' : 'false'}
							onclick={() => set_page_size(4)}
						>4 per page</button>
						<button
							class={page_size === 8 ? 'button button-sm' : 'button button-outline button-sm'}
							type="button"
							aria-pressed={page_size === 8 ? 'true' : 'false'}
							onclick={() => set_page_size(8)}
						>8 per page</button>
						<button class="button button-outline button-sm" type="button" onclick={swap_people}>
							{people_set === 'a' ? 'Show other list' : 'Show first list'}
						</button>
					</div>
					<div class="table-wrap" data-page-size={page_size}>
						<table class="table">
							<caption>People</caption>
							<thead>
								<tr>
									{#each people_columns as key}
										<th scope="col" aria-sort={people_sort_aria(key)}>
											<button class="table-sort" type="button" onclick={() => people_sort_by(key)}>
												{heading(key)}
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
													<path d="m6 15 6-6 6 6"></path>
												</svg>
											</button>
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each people_rows as row (row.name)}
									<tr>
										{#each people_columns as key}
											<td>{row[key]}</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
					<nav class="pagination" aria-label="People pagination">
						<button
							class="button button-outline button-sm"
							type="button"
							disabled={people_page === 0}
							aria-disabled={people_page === 0 ? 'true' : undefined}
							onclick={() => (people_page = Math.max(0, people_page - 1))}
						>Previous</button>
						{#each people_pages as i}
							<button
								class={people_page === i ? 'button button-sm' : 'button button-outline button-sm'}
								type="button"
								aria-current={people_page === i ? 'page' : undefined}
								onclick={() => (people_page = i)}
							>{i + 1}</button>
						{/each}
						<button
							class="button button-outline button-sm"
							type="button"
							disabled={people_page >= people_page_count - 1}
							aria-disabled={people_page >= people_page_count - 1 ? 'true' : undefined}
							onclick={() => (people_page = Math.min(people_page_count - 1, people_page + 1))}
						>Next</button>
					</nav>
					<p class="muted">{page_size} per page · {people.length} rows</p>
				</div>
			</div>
			<pre class="docs-code"><code>{dynamic}</code></pre>
		</div>
	</div>
</div>
