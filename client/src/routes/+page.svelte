<script>
	import { Chat } from '$lib/components/index';
	import { io } from 'socket.io-client';

	import { PUBLIC_WSS_URL } from '$env/static/public';

	import '$lib/css/main.css';

	/** @type {import('socket.io-client').Socket} */
	const socket = io(`ws://${PUBLIC_WSS_URL}`, {
		autoConnect: false,
		transports: ['websocket']
	});

	socket.on('connect', () => {
		console.log('Connected to server');
	});

	socket.on('connect_error', (error) => {
		console.log('Connection error');
		console.log(error);
	});

	socket.on('disconnect', (reason) => {
		console.log('Disconnected from server');
		console.log(`Reason: ${reason}`);
	});

	/* 	function connect() {
		if ($connectedStore) return;
		console.log('Connecting to server...');
		socket.connect();
		$connectedStore = !$connectedStore;
	}

	function disconnect() {
		if (!$connectedStore) return;
		console.log('Disconnecting from server...');
		socket.disconnect();
		$connectedStore = !$connectedStore;
	} */

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

	<button
		class="bg-green-500 p-2"
		on:click={() => {
			socket.connect();
			console.log('Trying to connect to server...');
		}}>Connect</button
	>

	<button
		class="bg-red-500 p-2"
		on:click={() => {
			socket.disconnect();
		}}>Disconnect</button
	>

	<button disabled={true} class="{socket.connected ? 'bg-green-300' : 'bg-red-300'} p-2">
		{socket.connected ? 'Connected' : 'Disconnected'}
	</button>
</div>
