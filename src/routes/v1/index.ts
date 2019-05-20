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

/* unsecured */ router.post('/login', loginController);
/* unsecured */ router.post('/contact/create', createContactController);

router.use(authMiddleware);

/* secured   */ router.use('/contact', contact);
/* secured   */ router.use('/organization', organization);
/* secured   */ router.use('/newsfeed', newsfeed);
/* secured   */ router.use('/cause', cause);
/* secured   */ router.use('/donation', donation);

export default router;
