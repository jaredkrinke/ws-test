const WebSocket = require("ws");
const port = 5454;

const wss = new WebSocket.Server({
    port: port,
});

wss.on("connection", function (ws) {
    console.log("New connection");
    ws.on("message", function (message) {
        console.log("Received ping");
        ws.send("pong");
        console.log("Sent response");
    });
});

console.log(`Listening on port ${port}`);
