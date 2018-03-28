/**
 * HTTP Requests module
 */

// Libraries
var request = require('request');

/**
 * Generic GET call
 * - url (String): Complete protocol+host+path URI.
 * - params (Array): Get parameters to be converted as a query string.
 * - callback (function): Callback receiving response body as parameter.
 *
 * It throws an exception if request error occurs.
 */
exports.get = (url,params,callback) => {
        request.get(url+'?'+buildQueryString(params),(err,res,body) => {
        if( err ) {
            throw new Error('HTTP Request ERROR');
        }
        callback(body);
    })
}

// Build a query string from parameters array
function buildQueryString(params) {
    if(params) {
        var query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        return query;
    }
}
