/*

On Day 6, we'll focus on error handling in Node.js. Properly handling errors is crucial for building robust applications that can gracefully manage exceptions without crashing or producing unexpected results. Let's break it down into simple concepts and examples.

Why Error Handling is Important
Errors can happen for various reasons, such as:

Trying to read a file that doesn’t exist.
Making a network request to a server that is down.
Incorrectly processing user input.
If your application doesn’t handle these errors properly, it may crash or behave unexpectedly. Effective error handling allows your application to respond to errors in a controlled way, providing better user experiences and easier debugging.

Common Error Types in Node.js
Synchronous Errors: These errors occur during the execution of your code, typically in blocking functions. For example, a typo in a variable name can throw an error immediately.
*/

try {
  const result = someUndefinedFunction(); // This will throw an error
} catch (error) {
  console.error("An error occurred:", error.message);
}

/*
Asynchronous Errors: These occur in asynchronous operations, such as reading files or making HTTP requests. 
Node.js typically uses callback functions to handle these errors
*/

const fs = require("fs");

fs.readFile("nonexistent-file.txt", (err, data) => {
  if (err) {
    return console.error("Error reading file:", err.message);
  }
  console.log(data);
});
