import debug from 'debug';
import { red, green, blue } from 'chalk';

const log = debug('app-routes');

// Routes
const clockinRoutes = require('./api/clockin/clockin.routes').default;
const modelRoutes = require('./api/model/model.routes').default;
const roomRoutes = require('./api/room/room.routes').default;
const meetingRoutes = require('./api/meeting/meeting.routes').default;


export default (app) => {
  // logger
  app.use((req, res, next) => {
    log(`${blue(new Date().toISOString())} [${red(req.method)}] ${green(req.url)}`);
    next();
  });

  // Insert routes below
  app.use('/api/tanda/clockin', clockinRoutes);
  app.use('/api/tanda/model', modelRoutes);
  app.use('/api/tanda/room', roomRoutes);
  app.use('/api/tanda/meeting', meetingRoutes);
};
