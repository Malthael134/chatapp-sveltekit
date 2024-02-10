// import express from 'express';
import { Server } from 'socket.io';

const port = 8080;

const io = new Server(port, {
    /* options */
});

io.on('connection', () => {
    console.log('A client connected!')
});


// const app = express();

// app.get('/status', (req, res) => {
//     res.send('<h1>Server is live!</h1>');
// });


// app.listen(port, () => {
//     console.log(`App listening on: *:${port}`)
// });

console.log("Hi");
console.log("Hi");
console.log("Hi");