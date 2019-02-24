import { Router } from 'express';
import getAllOrganizationsController from './controllers/getAllOrganizations';
import createOrganizationController from './controllers/createOrganization';
import getContactOrganizationsController from './controllers/getContactOrganizations';

const router = Router();

router.get('/all', getAllOrganizationsController);
router.get('/', getContactOrganizationsController);
router.post('/', createOrganizationController);

export default router;
