import WebSocket from 'ws';
import { getImplementation } from './chat/room';
const port = 8080;
const wss = new WebSocket.Server({ port: port });

const room = getImplementation('set');


wss.on('connection', (ws) => {
    room.add(ws);    
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    ws.send('Hello! Message From Server!!');

    ws.on('close', () => {
        room.remove(ws);
        console.log('Client disconnected');
        
    });

})

wss.on('error', (err) => {
    console.log(`Error: ${err}`);
})

console.log(`Server is running on port ${port}`);

