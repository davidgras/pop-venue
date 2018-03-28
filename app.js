/**
 * PopVenue App v1.
 */

// Init libraries
const express = require('express');
const foursquareApi = require('./foursquare-api.js');
require('dotenv').config();
var path = require('path');

// HTTP Server parameters
const hostname = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;
const app = express()

// Init HTTP Server
app.listen(port, (err) => {
    if (err)
        return console.log('Server is not running', err)
    console.log(`PopVenue App Server listening at http://${hostname}:${port}/`);
})
// Public HTML folder
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'popvenues.html'));
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
