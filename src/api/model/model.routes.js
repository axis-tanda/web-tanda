import express from 'express';
import body_parser from 'body-parser';
import * as controller from './model.controller';

const router = express.Router();

router.use(body_parser.urlencoded({extended: false}));
router.use(body_parser.json());

router.get('/train', controller.train);
router.get('/predict', controller.predict);

export default router;
