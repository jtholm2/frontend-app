const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../dist/server')

describe('Unit testing the / route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/')
        .then(function(response){
            assert.strictEqual(response.status, 200)
        })
    });

});