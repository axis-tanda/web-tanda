/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
const log = debug('room.controller');
const data = require(__dirname + '/../../data/dummy');

export function getAllRooms(req, res, next) {
  log('Get All Rooms!');

  // log(data);

  res.status(200).send(data);
}


