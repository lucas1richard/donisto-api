import { Router } from 'express';
import getAllOrganizationsController from './controllers/getAllOrganizations';
import createOrganizationController from './controllers/createOrganization';

const router = Router();

router.get('/', getAllOrganizationsController);
router.get('/create', createOrganizationController);

export default router;
