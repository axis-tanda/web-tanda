/* global describe, it */
import chai from 'chai';
import supertest from 'supertest';
import app from './../../server';

const should = chai.should();
const expect = chai.expect();
const request = supertest(app);

function todo() {
  expect(true, 'method not yet implemented');
}

describe('Room', () => {
});
