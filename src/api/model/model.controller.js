/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
import { exec } from 'child_process';
const log = debug('model.controller');
const data = require(__dirname + '/../../data/dummy');

export function train(req, res, next) {
  log('Train!');

  exec('python ' + __dirname + '/model.py', (err, stdout, stderr) => {
    if (err) {
      throw new Error(err);
    }

    log(stdout);
    log(stderr);

    res.send({
      message: 'Successfully trained!'
    });
  });
}
