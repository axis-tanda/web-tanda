import express from 'express';
import body_parser from 'body-parser';
import * as controller from './room.controller';

const router = express.Router();

router.use(body_parser.urlencoded({extended: false}));
router.use(body_parser.json());

router.get('/all', controller.getAllRooms);

export default router;
