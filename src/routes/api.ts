import { Router } from 'express';
import contact from './contact';
import organization from './organization';
import newsfeed from './newsfeed';

const router = Router();

router.use('/contact', contact);
router.use('/organization', organization);
router.use('/newsfeed', newsfeed);

export default router;
