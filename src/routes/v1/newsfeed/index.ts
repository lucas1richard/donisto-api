import { Router } from 'express';
import getNewsFeedController from './controllers/getNewsFeed';

const router = Router();

router.get('/get', getNewsFeedController);

export default router;
