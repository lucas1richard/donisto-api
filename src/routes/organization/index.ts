import { Router } from 'express';
import getOrganizationController from './controllers/getOrganization';
import createOrganizationController from './controllers/createOrganization';

const router = Router();

router.get('/', getOrganizationController);
router.get('/create', createOrganizationController);

export default router;
