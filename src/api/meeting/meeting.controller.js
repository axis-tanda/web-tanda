/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
import debug from 'debug';
import request from 'request';
import moment from 'moment';
import Meeting from '../../database/models/meeting';

const log = debug('meeting.controller');

export function set(req, res, next) {
  log('Set Meeting!');
  const { meeting_unix, meeting_id, data } = req.body;
  const meeting = new Meeting({
    meeting_id,
    meeting_unix,
    data
  });

  meeting
    .save()
    .then(data => {
      log(data);
    })
    .catch(err => {
      if(err) log(err);
    });

  res.end();
}

export function attend(req, res, next) {
  log('Attend Meeting!');
  const { meeting_id, user_id } = req.body;
  Meeting
    .findOne({'meeting_id': meeting_id}, 'meeting_id data', (err, meeting) => {
      if(err) {
        log(err);
      }

      meeting.data
        .push(user_id)

      meeting
        .save()
        .then(data => log(data))
        .catch(err => log(err))

    })
  res.end();
}

export function check(req, res, next) {
  // const { user_id, beacon_id, meeting_unix } = req.body
  // Temporary
  const meeting_unix = Date.now() / 1000;
  Meeting
    .findOne({'meeting_unix': meeting_unix}, 'meeting_id', (err, meeting) => {
      if(err) {
        log(err);
      }

      meeting
        ? res.send({check: true})
        : res.send({check: false})

    });

}
