import express from 'express';
import * as controller from './clockin.controller';

const router = express.Router();

router.post('/', controller.clockin);

export default router;
