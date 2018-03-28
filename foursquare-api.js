/**
 * Foursquare API functions
 */

// Init libraries
require('dotenv').config()
// HTTP requests module
const http = require('./http-requests.js');

// Foursquare API params
const urlVenuesExplore = process.env.FOURSQUARE_VENUES_EXPLORE_URL;
var params = {
    client_id:      process.env.FOURSQUARE_CLIENT_ID,
    client_secret:  process.env.FOURSQUARE_CLIENT_SECRET,
    v:              process.env.FOURSQUARE_VENUES_EXPLORE_VERSION, 
    limit:          process.env.FOURSQUARE_VENUES_EXPLORE_AMOUNT 
};

// Get Popular venues from location name
exports.getPopularVenuesByLocation = (location,callback) => {

    // Location parameter
    params.near = location;
    getPopularVenues(params,callback);
}

// Get Popular venues from lat/lon coordinates
exports.getPopularVenuesByLatLon = (lat,lon,callback) => {

    // Lat/Lon parameter
    params.ll = lat + ',' + lon;
    getPopularVenues(params,callback);
}

/**
 * Generic Popular Venues call.
 * JSON response with either "error" message or "venues" array.
 * - params (Array): /venues/explore parameters
 * - callback (function): with JSON response
 * More info: https://developer.foursquare.com/docs/api/venues/explore
 */
function getPopularVenues(params,callback) {
    // API request
    http.get(urlVenuesExplore,params,(body) => {
        var result = JSON.parse( body );
        if( result.meta.code == 200 )
            callback({ venues: result.response.groups[0].items } )
        else
            callback({ error: `[${result.meta.code}] ${result.meta.errorType}: ${result.meta.errorDetail}` })
    });
}
