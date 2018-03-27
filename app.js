/**
 * PopVenue App v1.
 */

// Libraries
const express = require('express');
const foursquareApi = require('./foursquare-api.js');

// HTTP Server parameters
const hostname = '127.0.0.1';
const port = 3000;
const app = express()

// Init HTTP Server
app.get('/', (req, res) => {
  res.send('Welcome to PopVenue')
})
app.listen(port, (err) => {
  if (err)
    return console.log('Server is not running', err)
  console.log(`PopVenue App Server listening at http://${hostname}:${port}/`);
})


// Web Services: get popular venues
app.get('/ws/venues', (req, res) => {
  res.sendStatus(200);
});