import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", function (socket) {
  socket.on("message", (message) => {
    //@ts-ignore
    const parsedMessage = JSON.parse(message);
    // now we got the string -> obj
    if (parsedMessage.type == "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }

    if (parsedMessage.type == "chat") {
      console.log("Hi there red room people" + parsedMessage.payload.roomId);
      let currentUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i]!.socket == socket) {
          currentUserRoom = allSockets[i]!.room;
        }
      }

      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i]!.room == currentUserRoom) {
          allSockets[i]!.socket.send(parsedMessage.payload.message);
        }
      }
    }
  });
});
