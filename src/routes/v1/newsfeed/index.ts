import { Router } from 'express';
import getNewsFeedController from './controllers/getNewsFeed';
import createNewsFeedController from './controllers/createNewsFeed';

const router = Router();

router.get('/get', getNewsFeedController);
router.post('/', createNewsFeedController);

export default router;
