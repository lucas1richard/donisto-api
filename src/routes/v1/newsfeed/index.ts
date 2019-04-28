import { Router } from 'express';
import getNewsFeedController from './controllers/getNewsFeed';
import createNewsFeedController from './controllers/createNewsFeed';
import getNewsFeedDetailController from './controllers/getDetail';

const router = Router();

router.get('/get', getNewsFeedController);
router.post('/', createNewsFeedController);
router.get('/detail/:newsItemUuid', getNewsFeedDetailController);

export default router;
