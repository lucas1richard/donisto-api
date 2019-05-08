import { Router } from 'express';
import getAllOrganizationsController from './controllers/getAllOrganizations';
import createOrganizationController from './controllers/createOrganization';
import getContactOrganizationsController from './controllers/getContactOrganizations';
import getOrganizationDetailController from './controllers/getOrganizationDetail';
import updateOrganizationController from './controllers/updateOrganization';

const router = Router();

router.get('/all', getAllOrganizationsController);
router.get('/', getContactOrganizationsController);
router.post('/detail', getOrganizationDetailController);
router.put('/', updateOrganizationController);
router.post('/', createOrganizationController);

export default router;
