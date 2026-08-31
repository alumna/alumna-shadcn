<script>
	const components = [
		{ href: '/components/accordion', label: 'Accordion' },
		{ href: '/components/alert', label: 'Alert' },
		{ href: '/components/avatar', label: 'Avatar' },
		{ href: '/components/badge', label: 'Badge' },
		{ href: '/components/breadcrumb', label: 'Breadcrumb' },
		{ href: '/components/button', label: 'Button' },
		{ href: '/components/button-group', label: 'Button group' },
		{ href: '/components/card', label: 'Card' },
		{ href: '/components/calendar', label: 'Calendar' },
		{ href: '/components/carousel', label: 'Carousel' },
		{ href: '/components/chart', label: 'Chart' },
		{ href: '/components/checkbox', label: 'Checkbox' },
		{ href: '/components/combobox', label: 'Combobox' },
		{ href: '/components/command', label: 'Command' },
		{ href: '/components/context-menu', label: 'Context menu' },
		{ href: '/components/data-table', label: 'Data table' },
		{ href: '/components/date-picker', label: 'Date picker' },
		{ href: '/components/dialog', label: 'Dialog' },
		{ href: '/components/dropdown', label: 'Dropdown' },
		{ href: '/components/empty', label: 'Empty' },
		{ href: '/components/field', label: 'Field' },
		{ href: '/components/hover-card', label: 'Hover card' },
		{ href: '/components/input', label: 'Input' },
		{ href: '/components/input-group', label: 'Input group' },
		{ href: '/components/input-otp', label: 'Input OTP' },
		{ href: '/components/item', label: 'Item' },
		{ href: '/components/kbd', label: 'Kbd' },
		{ href: '/components/label', label: 'Label' },
		{ href: '/components/menubar', label: 'Menubar' },
		{ href: '/components/navigation-menu', label: 'Navigation menu' },
		{ href: '/components/pagination', label: 'Pagination' },
		{ href: '/components/popover', label: 'Popover' },
		{ href: '/components/progress', label: 'Progress' },
		{ href: '/components/radio', label: 'Radio' },
		{ href: '/components/select', label: 'Select' },
		{ href: '/components/separator', label: 'Separator' },
		{ href: '/components/sheet', label: 'Sheet' },
		{ href: '/components/sidebar', label: 'Sidebar' },
		{ href: '/components/skeleton', label: 'Skeleton' },
		{ href: '/components/slider', label: 'Slider' },
		{ href: '/components/spinner', label: 'Spinner' },
		{ href: '/components/stack', label: 'Stack' },
		{ href: '/components/switch', label: 'Switch' },
		{ href: '/components/table', label: 'Table' },
		{ href: '/components/tabs', label: 'Tabs' },
		{ href: '/components/textarea', label: 'Textarea' },
		{ href: '/components/toast', label: 'Toast' },
		{ href: '/components/toc', label: 'Toc' },
		{ href: '/components/toggle', label: 'Toggle' },
		{ href: '/components/toggle-group', label: 'Toggle group' },
		{ href: '/components/tooltip', label: 'Tooltip' },
		{ href: '/components/typography', label: 'Typography' }
	];
</script>

<div class="box">
	<div class="stack" style="--stack-gap: 1.5rem">
		<div class="stack" style="--stack-gap: 0.5rem">
			<h1>Components</h1>
			<p>
				Alphabetical list of primitives. Each page has a preview and
				the markup to copy.
			</p>
		</div>

		<nav class="docs-index" aria-label="All components">
			{#each components as item}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>
	</div>
</div>
