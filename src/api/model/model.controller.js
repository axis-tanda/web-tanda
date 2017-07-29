/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
import { exec } from 'child_process';
const log = debug('model.controller');
const data = require(__dirname + '/../../data/dummy');

export function train(req, res, next) {
  log('Train!');

  exec('python ' + __dirname + '/model.py', function callback(err, stdout, stderr) {
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

export function predict(req, res, next) {
  log('Predict!');

  exec(`python ${__dirname}/model.py ${req.params.day}`, function callback(err, stdout, stderr) {
    if (err) {
      throw new Error(err);
    }

    const result = JSON.parse(stdout);

    res.send({
      message: 'Successfully predicted!',
      accuracy: result[0],
      prediction: result[1]
    });
  });
}
