/**
 * Foursquare API functions
 */

// HTTP requests module
const http = require('./http-requests.js');

// Foursquare API params
const urlVenuesExplore = 'https://api.foursquare.com/v2/venues/explore';
const clientId = 'LC5U5DYCADZVTWUZCXVGK53QUZKTNTMXTWJ1VNHS3CAH2KSO';
const clientSecret = 'Y0YBZ0LTWADEXX5RJS0CMD5QZBAVVUCC3AEAWMSPKEAKHW3S';
var params = {
    client_id: clientId,
    client_secret: clientSecret,
    v: '20170801', 
    limit: '5' 
};

// Get Popular venues from location name
exports.getPopularVenuesByLocation = (location,callback) => {

    // Location parameter
    params.near = location;
    
    // API request
    http.get(urlVenuesExplore,params,(body) => {
        callback( JSON.parse( body ).meta )
    });
}

// Get Popular venues from lat/lon coordinates
exports.getPopularVenuesByLatLon = (lat,lon,callback) => {

    // Lat/Lon parameter
    params.ll = lat + ',' + lon;
    
    // API request
    http.get(urlVenuesExplore,params,(body) => {
        callback( JSON.parse( body ).meta )
    });
}
