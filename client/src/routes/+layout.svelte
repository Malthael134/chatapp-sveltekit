<script>
	import { Navbar } from '$lib/components/index';

	import '$lib/css/main.css';

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<Navbar links={navLinks} />

<main class="h-full">
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		background-color: theme('colors.gray.100');
	}
</style>
