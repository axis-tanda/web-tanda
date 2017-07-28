/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
import Meeting from '../../database/models/meeting';

const log = debug('meeting.controller');

export function set(req, res, next) {
  log('Set Meeting!');
  const { meeting_time, meeting_day, meeting_id, data } = req.body;
  const meeting = new Meeting({
    meeting_id,
    meeting_day,
    meeting_time,
    data
  });

  meeting
    .save()
    .then(function(data) {
      log(data);
    })
    .catch(function(err) {
      if(err) log(err);
    });

  res.end();
}

export function attend(req, res, next) {
  log('Attend Meeting!');

  res.end();
}
