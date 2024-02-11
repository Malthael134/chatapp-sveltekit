var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/ws/browser.js
var require_browser = __commonJS((exports, module) => {
  module.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
  };
});

// src/index.ts
var import_ws = __toESM(require_browser(), 1);

// src/chat/array-room.ts
class ArrayRoom {
  users = [];
  constructor() {
    this.users = [];
  }
  add(user) {
    if (!this.users.includes(user)) {
      this.users.push(user);
    }
  }
  remove(user) {
    if (this.users.includes(user)) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  }
  push(from, message) {
    for (const user of this.users) {
      user.send(`${from} says ${message}`);
    }
  }
}

// src/chat/set-room.ts
class SetRoom {
  users;
  constructor() {
    this.users = new Set;
  }
  add(user) {
    if (!this.users.has(user)) {
      this.users.add(user);
    }
  }
  remove(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
    }
  }
  push(from, message) {
    this.users.forEach((user) => {
      user.send(`${from} says ${message}`);
    });
  }
}

// src/chat/room.ts
function getImplementation(type) {
  if (type === "set") {
    return new SetRoom;
  }
  if (type === "array") {
    return new ArrayRoom;
  }
  throw new Error("Invalid type");
}

// src/index.ts
var room2 = getImplementation("set");
var port = 8080;
var server = new import_ws.default.Server({ port });
server.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
  });
  ws.send("Hello! Message From Server!!");
});
server.on("error", (err) => {
  console.log(`Error: ${err}`);
});
console.log(`Server is running on port ${port}`);
