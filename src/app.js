app.areas = [ 'nav', 'content' ];

app.layout.docs = {
	component: 'layouts/Docs',
	areas: [ 'nav', 'content' ]
};

app.route[ '/' ] = {
	layout: 'docs',
	nav: 'docs/Nav',
	content: 'docs/Introduction'
};

app.route[ '/install' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Install' };

app.route[ '/theming' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Theming' };
app.route[ '/dark-light' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/DarkLight' };
app.route[ '/tokens' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Theming' };

app.route[ '/components' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Components' };

app.route[ '/components/accordion' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Accordion' };
app.route[ '/components/alert' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Alert' };
app.route[ '/components/avatar' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Avatar' };
app.route[ '/components/badge' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Badge' };
app.route[ '/components/breadcrumb' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Breadcrumb' };
app.route[ '/components/button' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Button' };
app.route[ '/components/button-group' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/ButtonGroup' };
app.route[ '/components/card' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Card' };
app.route[ '/components/calendar' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Calendar' };
app.route[ '/components/carousel' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Carousel' };
app.route[ '/components/chart' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Chart' };
app.route[ '/components/checkbox' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Checkbox' };
app.route[ '/components/combobox' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Combobox' };
app.route[ '/components/command' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Command' };
app.route[ '/components/context-menu' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/ContextMenu' };
app.route[ '/components/data-table' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/DataTable' };
app.route[ '/components/date-picker' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/DatePicker' };
app.route[ '/components/dialog' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Dialog' };
app.route[ '/components/dropdown' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Dropdown' };
app.route[ '/components/empty' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Empty' };
app.route[ '/components/field' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Field' };
app.route[ '/components/hover-card' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/HoverCard' };
app.route[ '/components/input' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Input' };
app.route[ '/components/input-group' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/InputGroup' };
app.route[ '/components/input-otp' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/InputOtp' };
app.route[ '/components/item' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Item' };
app.route[ '/components/kbd' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Kbd' };
app.route[ '/components/label' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Label' };
app.route[ '/components/menubar' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Menubar' };
app.route[ '/components/navigation-menu' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/NavigationMenu' };
app.route[ '/components/pagination' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Pagination' };
app.route[ '/components/popover' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Popover' };
app.route[ '/components/progress' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Progress' };
app.route[ '/components/radio' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Radio' };
app.route[ '/components/select' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Select' };
app.route[ '/components/separator' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Separator' };
app.route[ '/components/sheet' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Sheet' };
app.route[ '/components/sidebar' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Sidebar' };
app.route[ '/components/skeleton' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Skeleton' };
app.route[ '/components/slider' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Slider' };
app.route[ '/components/spinner' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Spinner' };
app.route[ '/components/stack' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Stack' };
app.route[ '/components/switch' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Switch' };
app.route[ '/components/table' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Table' };
app.route[ '/components/tabs' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Tabs' };
app.route[ '/components/textarea' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Textarea' };
app.route[ '/components/toast' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Toast' };
app.route[ '/components/toc' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Toc' };
app.route[ '/components/toggle' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Toggle' };
app.route[ '/components/toggle-group' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/ToggleGroup' };
app.route[ '/components/tooltip' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Tooltip' };
app.route[ '/components/typography' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Typography' };

app.route[ '/blocks/login' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Login' };
app.route[ '/blocks/login-simple' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/LoginSimple' };
app.route[ '/blocks/login-02' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/LoginSplit' };
app.route[ '/blocks/signup' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Signup' };
app.route[ '/blocks/otp' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Otp' };
app.route[ '/blocks/dashboard' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Dashboard' };
app.route[ '/blocks/charts' ] = { layout: 'docs', nav: 'docs/Nav', content: 'docs/Charts' };

app.route[ '/*' ] = {
	layout: 'docs',
	nav: 'docs/Nav',
	content: 'docs/NotFound'
};
