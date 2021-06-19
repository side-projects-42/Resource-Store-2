var connect = require('connect');
var request = require('supertest');
var http = require('http');
var errorHandler = require('..');

describe('connect.errorHandler()', function () {
  var app, error, server;

  before(function () {
    app = connect();
    app.use(function (req, res, next) {
      next(error);
    });
    app.use(errorHandler());
    server = http.createServer(app).listen();
  });

  beforeEach(function () {
    error = null;
  });

  describe('status code', function () {
    it('should set the status code to 500 if a non error status code was given', function (done) {
      error = {status: 200};
      request(server)
      .get('/')
      .end(function (err, res) {
        if (err) throw err;
        res.statusCode.should.be.exactly(500);
        done();
      });
    });

    it('should pass an error status code to the response object', function (done) {
      error = {status: 404};
      request(server)
      .get('/')
      .end(function (err, res) {
        if (err) throw err;
        res.statusCode.should.be.exactly(404);
        done();
      });
    });
  });

  describe('response content type', function () {
    beforeEach(function () {
        error = new Error('');
    });

    it('should return a html response when html is accepted', function (done) {
      request(server)
      .get('/')
      .set('Accept', 'text/html')
      .end(function (err, res) {
        if (err) throw err;
        res.headers['content-type'].should.startWith('text/html');
        res.text.should.include('<title>');
        done();
      });
    });

    it('should return a json response when json is accepted', function (done) {
      request(server)
      .get('/')
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) throw err;
        var errorMessage = JSON.parse(res.text);

        res.headers['content-type'].should.startWith('application/json');
        errorMessage.should.be.a.Object;
        errorMessage.should.have.property('error');
        errorMessage.error.should.have.properties(['message', 'stack']);

        done();
      });
    });

    it('should return a plain text response when json or html is not accepted', function (done) {
      request(server)
      .get('/')
      .end(function (err, res) {
        if (err) throw err;
        res.headers['content-type'].should.startWith('text/plain');
        res.text.should.be.exactly(error.stack.toString());
        done();
      });
    });
  });
});
