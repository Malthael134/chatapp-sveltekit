import WebSocket from 'ws';

export default class ArrayRoom {
    private users: WebSocket[] = [];

    constructor() {
        this.users = [];
    }

    add(user: WebSocket): void {
        if (!this.users.includes(user)) {
            this.users.push(user);
        }
    }

    remove(user: WebSocket): void {
        if (this.users.includes(user)) {
            this.users.splice(this.users.indexOf(user), 1);
        }
    }

    push(from: WebSocket, message: string): void {
        for (const user of this.users) {
            user.send(`${from} says ${message}`);
        }
    }
}