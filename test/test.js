var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hey world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hey world', done);
 });
});