var request = require('request')

// HTTP Server tests
describe('server', () => {
    it('should return http OK status', (done) => {
        request.get('http://localhost:3000/', (err,res) => {
            expect(res).toBeDefined();
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
})