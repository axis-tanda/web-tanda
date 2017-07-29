'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _server = require('./../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should(); /* global describe, it */

var expect = _chai2.default.expect();
var request = (0, _supertest2.default)(_server2.default);

function todo() {
  expect(true, 'method not yet implemented');
}

describe('Meeting', function () {
  it('should get all the users', function (done) {
    todo();
  });

  it('should get a user by id', function (done) {
    todo();
  });
});
//# sourceMappingURL=meeting.tests.js.map