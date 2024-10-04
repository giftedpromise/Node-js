/*
4. HTTP Module
The http module allows Node.js to create a web server. It can handle requests and send responses.

Common Methods:
http.createServer(): Creates an HTTP server instance.
server.listen(): Makes the server listen for incoming requests.
Example: Creating a Basic HTTP Server

*/

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

const fs = require("fs");

// Reading a file
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});
