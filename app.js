/**
 * PopVenue App v1.
 */

// Libraries
const http = require('http');

// HTTP Server parameters
const hostname = '127.0.0.1';
const port = 3000;

// Init HTTP Server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to PopVenue');
});

server.listen(port, hostname, () => {
  console.log(`PopVenue App Server listening at http://${hostname}:${port}/`);
});