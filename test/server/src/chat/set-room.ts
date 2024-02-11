import WebSocket from 'ws';

export default class SetRoom {
    private users: Set<WebSocket>;

    constructor() {
        this.users = new Set();
    }

    add(user: WebSocket): void {
        if (!this.users.has(user)) {
            this.users.add(user);
        }
    }

    remove(user: WebSocket): void {
        if (this.users.has(user)) {
            this.users.delete(user);
        }
    }

    push(from: WebSocket, message: string): void {
        this.users.forEach((user) => {
            user.send(`${from} says ${message}`);
        });
    }
}