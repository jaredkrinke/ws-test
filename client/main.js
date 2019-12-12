var server = "ws://localhost:5454";
var protocol = "t";

var button = document.getElementById("ping");
var output = document.getElementById("log");

function log(message) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(message));
    output.appendChild(p);
}

log("Connecting...");

// TODO: add content to messages
var socket = new WebSocket(server, protocol);
var timeStart;
socket.onopen = function () {
    log("Connected.");
    socket.onmessage = function () {
        var timeStop = window.performance.now();
        log("Received response: " + (timeStop - timeStart));
    };

    button.onclick = function () {
        timeStart = window.performance.now();
        socket.send("ping");
        log("Sent ping.");
    };
};
