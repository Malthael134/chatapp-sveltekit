<script>
	import '$lib/css/main.css';

	/**
	 * @typedef message
	 * @property {string} user
	 * @property {string} text
	 * @property {string} date
	 */

	/** @type {message} */
	export let message = {
		user: 'user',
		date: 'date',
		text: 'text'
	};
</script>

<div class="w-full message grid grid-cols-2">
	<div class="flex justify-center items-center">
		<div class="box-border border-s-slate-400">
			<img src="https://via.placeholder.com/50" alt="User Avatar" />
		</div>
	</div>
	<div>
		<div class="flex gap-2">
			<div class="font-bold">{message.user}</div>
			<div class="font-light">{message.date}</div>
		</div>
		<div>
			<div>{message.text}</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.message {
		grid-template-columns: 70px auto;
	}
</style>
