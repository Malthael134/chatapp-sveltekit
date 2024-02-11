<script>
	import '$lib/css/main.css';

	/**
	 * @typedef link
	 * @property {string} name
	 * @property {string} href
	 */

	/** @type {link[]} */
	export let links = [];
</script>

<nav
	class="
        flex
        justify-around
        p-4
        bg-slate-100 dark:bg-slate-600 hover:opacity-90
        text-black dark:text-white"
>
	{#each links as { name, href }}
		<div>
			<a {href}>{name}</a>
		</div>
	{/each}
</nav>
