/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
const log = debug('clockin.controller');

export function clockin(req, res, next) {
  log('Ping!');

  request({
    url: 'https://my.tanda.co/api/v2/clockins',
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${process.env.TANDA_TOKEN}`
    },

  }, function(err, response, body) {
    
  });
  res.end();
}
