import { Router } from 'express';
import getContactController from './controllers/getContact';
import loginController from './controllers/login';
import updateContactController from './controllers/updateContact';
import getOrgNewsFeedController from './controllers/getOrgNewsFeed';

const router = Router();

router.put('/', updateContactController);
router.post('/get', getContactController);
router.post('/login', loginController);
router.get('/orgnewsfeed', getOrgNewsFeedController);

export default router;
