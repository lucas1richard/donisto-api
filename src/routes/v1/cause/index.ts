import { Router } from 'express';
import createCauseController from './controllers/createCause';
import getCausesController from './controllers/getCauses';
import getCausesDetailController from './controllers/getCausesDetail';
import getContactCausesController from './controllers/getContactCauses';

const router = Router();

router.post('/', createCauseController);
router.post('/detail', getCausesDetailController);
router.get('/', getCausesController);
router.get('/contact', getContactCausesController);

export default router;
