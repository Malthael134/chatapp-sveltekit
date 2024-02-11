<script>
	import '$lib/css/main.css';
	import { Message } from '$lib/components/index';

	/**
	 * @typedef Msg
	 * @property {string} user
	 * @property {string} date
	 * @property {string} text
	 */

	/** @type {Msg[]} */
	export let messages;
</script>

<div class="h-full">
	<div class="p-4 h-full flex-row-reverse space-y-6">
		{#each messages as message}
			<div class="w-auto ">
				<Message {message} />
			</div>
		{/each}
	</div>
</div>
