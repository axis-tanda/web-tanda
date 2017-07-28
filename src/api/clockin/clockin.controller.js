/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
const log = debug('clockin.controller');

export function clockin(req, res, next) {
  log('Clock In!');
  log(`Employee id ${req.body.user_id}`);

  const config = {
    method: 'POST',
    url: 'https://my.tanda.co/api/v2/clockins',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.TANDA_TOKEN}`
    },
    form: {
      user_id: parseInt(req.body.user_id),
      type: 'clockin',
      time: Date.now()
    }
  };

  request(config, (err, response, body) => {
    if (err) {
      throw new Error(err);
    }
    log(body);

    res.send({
      message: 'Successfully clocked in!'
    });
  });
}
