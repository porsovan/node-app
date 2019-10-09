var request = require('supertest');
var app = require('../index.js');
var should = require("should");

describe('GET /', function() {
 it('respond with hey world', function(done) {
 //navigate to root and check the the response is "hello world"
    request(app)
    .get('/')
    .expect('hey world')
    .end(function(err,res){
        // HTTP status should be 200
        res.status.should.equal(200);
        done();
     });
     
 });
});