import express from 'express';
import body_parser from 'body-parser';
import * as controller from './clockin.controller';

const router = express.Router();

router.use(body_parser.urlencoded({extended: false}));
router.use(body_parser.json());

router.post('/', controller.clockin);

export default router;
