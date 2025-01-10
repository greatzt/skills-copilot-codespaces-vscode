// Create web server
// Create a route for POST /comments
// Read the request body and parse it as JSON
// Add the parsed object to the comments array
// Send a response with the added object
// Start the server
// Test the route with curl or Postman
// Use the comments array as a data store

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json)