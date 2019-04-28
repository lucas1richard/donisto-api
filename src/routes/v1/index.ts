import { Router } from 'express';
import contact from './contact';
import loginController from './contact/controllers/login';
import organization from './organization';
import newsfeed from './newsfeed';
import cause from './cause';
import donation from './donation';
import authMiddleware from 'middlewares/v1/auth';
import createContactController from './contact/controllers/createContact';

const router = Router();

router.post('/login', loginController); // unsecured route
router.post('/contact/create', createContactController); // unsecured route


router.use(authMiddleware);

router.use('/contact', contact); // secured route
router.use('/organization', organization); // secured route
router.use('/newsfeed', newsfeed); // secured route
router.use('/cause', cause); // secured route
router.use('/donation', donation); // secured route

export default router;
