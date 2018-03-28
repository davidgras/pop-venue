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

// GET Popular Venues by location parameter
app.get('/ws/venues/:location', (req, res) => {
    try {
        var response = foursquareApi.getPopularVenuesByLocation(req.params.location, (result) => {
           res.send(result);
        });
    }
    catch(ex) {
        res.send({ error: ex.message });
    }
});

// GET Popular Venues by lat/lon parameters
app.get('/ws/venues/:lat/:lon', (req, res) => {
    try {
        var response = foursquareApi.getPopularVenuesByLatLon(req.params.lat, req.params.lon, (result) => {
           res.send(result);
        });
    }
    catch(ex) {
        res.send({ error: ex.message });
    }
});
