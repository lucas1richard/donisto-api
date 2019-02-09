import { Router } from 'express';
import getContactController from './controllers/getContact';
import createContactController from './controllers/createContact';

const router = Router();

router.post('/get', getContactController);
router.post('/create', createContactController);

export default router;
