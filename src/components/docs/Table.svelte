<script>
	const snippet = `<div class="table-wrap">
	<table class="table">
		<caption>Invoices</caption>
		<thead>
			<tr>
				<th scope="col">Invoice</th>
				<th scope="col">Amount</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>INV-001</td>
				<td>$250.00</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td>Total</td>
				<td>$250.00</td>
			</tr>
		</tfoot>
	</table>
</div>`;
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Table</h1>
			<p>
				Real <code>&lt;table&gt;</code> with <code>.table</code> chrome.
				Wrap in <code>.table-wrap</code> for horizontal overflow. Not TanStack.
				There is no wrapper.
			</p>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Preview</h2>
			<div class="docs-preview">
				<div class="table-wrap">
					<table class="table">
						<caption>Invoices</caption>
						<thead>
							<tr>
								<th scope="col">Invoice</th>
								<th scope="col">Status</th>
								<th scope="col">Amount</th>
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
						<tfoot>
							<tr>
								<td colspan="2">Total</td>
								<td>$400.00</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</div>
		<div class="stack" style="--stack-gap: 0.75rem">
			<h2>Code</h2>
			<pre class="docs-code"><code>{snippet}</code></pre>
		</div>
	</div>
</div>
