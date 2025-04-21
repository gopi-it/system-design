const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

// Event listener for when a new client connects
wss.on("connection", (ws) => {
  console.log("New client connected");

  // Event listener for when the server receives a message from a client
  ws.on("message", (message) => {
    console.log(`Received message from client: ${message}`);

    setTimeout(() => {
      // Send a response back to the client
      ws.send(`Server reply to: ${message}`);
    }, 500);
  });

  // Event listener for when the client disconnects
  ws.on("close", () => {
    console.log("Client disconnected");
  });

  // Send a welcome message when a new client connects
  ws.send("Hi from server!");
});

console.log("WebSocket server is listening on ws://localhost:8080");
