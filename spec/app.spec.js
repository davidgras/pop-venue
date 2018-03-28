var request = require('request')

// HTTP Server tests
describe('Server', () => {
    it('should return http OK status', (done) => {
        request.get('http://localhost:3000/', (err,res) => {
            expect(res).toBeDefined();
            if( res )
                expect(res.statusCode).toEqual(200)
            done()
        })
    })
})


// Foursquare API test
describe('Foursquare WS: Popular Venues', () => {
    it('should return http OK status for Venues WS', (done) => {
        request.get('http://localhost:3000/ws/venues/0/0', (err,res) => {
            expect(res).toBeDefined();
            if( res )
                expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('should return a JSON object', (done) => {
        request.get('http://localhost:3000/ws/venues/0/0', (err,res,body) => {
            expect(body.length).toBeGreaterThan(0);
            expect(JSON.parse(body)).toBeDefined();
            done()
        })
    })
    it('should return a page not found error', (done) => {
        request.get('http://localhost:3000/ws/venues', (err,res) => {
            expect(res.statusCode).toEqual(404)
            done()
        })
    })
})
