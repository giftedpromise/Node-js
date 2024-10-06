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

// Writing to a file
const content = "This is a new file content!";
fs.writeFile("newfile.txt", content, (err) => {
  if (err) throw err;
  console.log("File has been written.");
});

/*

Day 2: Node.js Architecture and Event Loop
Understanding Node.js Architecture
Node.js is built on Chrome’s V8 JavaScript engine and follows a single-threaded, non-blocking architecture. Here’s what that means:

Single-Threaded: Unlike traditional web servers (such as Apache or IIS), which handle each request with a new thread, Node.js handles all requests on a single thread. This design helps conserve memory and scale more efficiently, but how does it manage concurrent tasks on just one thread?

Non-Blocking: Node.js uses non-blocking I/O, which means that tasks such as file reading, network requests, and database queries do not block the execution of other operations. Instead, these tasks are offloaded, and Node.js moves on to handle other requests while waiting for the offloaded tasks to complete.

Event-Driven: Node.js operates on an event-driven architecture, where tasks are triggered by events (like receiving a request or completing a file read). When an event is triggered, the associated callback is executed. This allows Node.js to efficiently manage multiple concurrent operations without creating multiple threads.

The Event Loop
At the heart of Node.js is the Event Loop. The Event Loop is what makes Node.js non-blocking and asynchronous. Here’s how it works:

Phases of the Event Loop:

Timers: The first phase, where callbacks scheduled by setTimeout() and setInterval() are executed.
Pending Callbacks: This is where callbacks for certain system-level operations are executed.
Idle/Prepare: Internal operations are processed here (not typically important for app-level development).
Poll: This is the most crucial phase, where the event loop retrieves new I/O events, such as reading from a file or network.
Check: The setImmediate() callbacks are executed in this phase.
Close Callbacks: If sockets or handles are closed, their callbacks are executed here.
The event loop continuously checks the call stack and event queue, processing events and running callbacks, making it possible for Node.js to handle many concurrent operations without blocking the main thread.

Asynchronous Processing in Node.js
Asynchronous processing is what allows Node.js to handle many operations at once without getting stuck waiting for tasks to complete.

Callbacks: The oldest method of handling asynchronous code in Node.js is using callbacks. For example:


*/
