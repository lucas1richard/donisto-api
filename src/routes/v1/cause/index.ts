import { Router } from 'express';
import createCauseController from './controllers/createCause';
import getCausesController from './controllers/getCauses';
import getCausesDetailController from './controllers/getCausesDetail';

const router = Router();

router.post('/', createCauseController);
router.post('/detail', getCausesDetailController);
router.get('/', getCausesController);

export default router;
