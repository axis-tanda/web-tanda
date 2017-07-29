/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
const log = debug('room.controller');
const mongoose = require('mongoose');
let Room = require('../../database/models/room');


export function getAllRooms(req, res, next) {
  Room.find({}, function (err, result) {
    if (!err) {
      res.status(200).send(result)
    } else {
      res.status(500).send(err);
    }
  })
}
