import { Router } from 'express';
import getContactController from './controllers/getContact';
import createContactController from './controllers/createContact';
import loginController from './controllers/login';
import updateContactController from './controllers/updateContact';

const router = Router();

router.put('/', updateContactController);
router.post('/get', getContactController);
router.post('/create', createContactController);
router.post('/login', loginController);

export default router;
