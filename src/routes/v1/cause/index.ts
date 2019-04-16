import { Router } from 'express';
import createCauseController from './controllers/createCause';
import getCausesController from './controllers/getCauses';

const router = Router();

router.post('/', createCauseController);
router.get('/', getCausesController);

export default router;
