// Init libraries
require('dotenv').config()
var request = require('request')

// Params
const basePath = 'http://' + process.env.SERVER_HOST + ':' + process.env.SERVER_PORT

// HTTP Server tests
describe('Server', () => {
    it('should return http OK status', (done) => {
        request.get(basePath, (err,res) => {
            expect(res).toBeDefined();
            if( res )
                expect(res.statusCode).toEqual(200)
            done()
        })
    })
})


// Foursquare API test
describe('Foursquare WS: Popular Venues', () => {
    it('should return http OK status for Lat/Lon request', (done) => {
        request.get(basePath + '/ws/venues/51.5182/-0.1084', (err,res) => {
            expect(res).toBeDefined();
            if( res )
                expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('should return a JSON object for Lat/Lon request', (done) => {
        request.get(basePath + '/ws/venues/51.5182/-0.1084', (err,res,body) => {
            expect(body.length).toBeGreaterThan(0);
            expect(JSON.parse(body)).toBeDefined();
            done()
        })
    })
    it('should return http OK status for location name request', (done) => {
        request.get('http://localhost:3000/ws/venues/london', (err,res) => {
            expect(res).toBeDefined();
            if( res )
                expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('should return a JSON object for location name request', (done) => {
        request.get(basePath + '/ws/venues/london', (err,res,body) => {
            expect(body.length).toBeGreaterThan(0);
            expect(JSON.parse(body)).toBeDefined();
            done()
        })
    })
    it('should return a page not found error', (done) => {
        request.get(basePath + '/ws/venues', (err,res) => {
            expect(res.statusCode).toEqual(404)
            done()
        })
    })
})
