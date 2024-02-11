import WebSocket from 'ws';
import ArrayRoom from './array-room.ts';
import SetRoom from './set-room.ts';

export interface IRoom {
    add(user: WebSocket): void;
    remove(user: WebSocket): void;
    push(from: WebSocket, message: string): void;
}

export type RoomType = "set" | "array";

export function getImplementation(type: string): IRoom {
    if (type === "set") {
        return new SetRoom();
    }
    if (type === "array") {
        return new ArrayRoom();
    }

    throw new Error("Invalid type");

}

