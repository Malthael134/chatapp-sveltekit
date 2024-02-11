<script>
	import { Chat } from '$lib/components/index';
	import '$lib/css/main.css';

	let messages = [
		{
			user: 'User A',
			date: '2022-01-01',
			text: 'Hello from User A'
		},

		{
			user: 'User B',
			date: '2022-01-02',
			text: 'Hi there! This is User B'
		},

		{
			user: 'User C',
			date: '2022-01-03',
			text: 'Greetings from User C'
		}
	];
</script>

<div class="w-full h-full">
	<div class="w-3/12">
		<div></div>
	</div>
	<div class="w-9/12 h-full">
		<Chat {messages} />
	</div>
</div>
