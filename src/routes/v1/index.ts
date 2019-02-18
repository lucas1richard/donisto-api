import { Router } from 'express';
import contact from './contact';
import loginController from './contact/controllers/login';
import organization from './organization';
import newsfeed from './newsfeed';
import authMiddleware from 'middlewares/v1/auth';
import createContactController from './contact/controllers/createContact';

const router = Router();

router.post('/login', loginController); // unsecured route
router.post('/contact/create', createContactController); // unsecured route


router.use(authMiddleware);

router.use('/contact', contact); // secured route
router.use('/organization', organization); // secured route
router.use('/newsfeed', newsfeed); // secured route

export default router;
