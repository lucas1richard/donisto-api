import { Router } from 'express';
import getContactController from './controllers/getContact';
import createContactController from './controllers/createContact';

const router = Router();

router.get('/', getContactController);
router.get('/create', createContactController);

export default router;
