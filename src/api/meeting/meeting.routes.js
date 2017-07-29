import express from 'express';
import body_parser from 'body-parser';
import * as controller from './meeting.controller';

const router = express.Router();

router.use(body_parser.urlencoded({extended: false}));
router.use(body_parser.json());

router.post('/', controller.set);
router.post('/attend', controller.attend);
router.post('/check', controller.check);

export default router;
