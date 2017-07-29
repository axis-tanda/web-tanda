/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
import Meeting from '../../database/models/meeting';

const log = debug('meeting.controller');

export function set(req, res, next) {
  log('Set Meeting!');
  const newMeeting = new Meeting({
    meeting_id: req.body.meeting_id,
    meeting_day: req.body.meeting_day,
    meeting_time: req.body.meeting_time,
    data: req.body.data
  });

  Meeting.create(newMeeting)
    .then(function (data) {
      log(data);
    })
    .catch(function (err) {
      if (err) log(err);
    });

  res.end();
}

export function attend(req, res, next) {
  log('Attend Meeting!');

  res.end();
}
