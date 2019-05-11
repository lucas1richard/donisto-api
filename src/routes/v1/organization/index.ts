import { Router } from 'express';
import getAllOrganizationsController from './controllers/getAllOrganizations';
import createOrganizationController from './controllers/createOrganization';
import getContactOrganizationsController from './controllers/getContactOrganizations';
import getOrganizationDetailController from './controllers/getOrganizationDetail';
import updateOrganizationController from './controllers/updateOrganization';
import createOrganizationLinksController from './controllers/createOrganizationLinks';
import deleteOrganizationLinksController from './controllers/deleteOrganizationLinks';

const router = Router();

router.get('/all', getAllOrganizationsController);
router.get('/', getContactOrganizationsController);
router.post('/detail', getOrganizationDetailController);
router.post('/links', createOrganizationLinksController);
router.delete('/links', deleteOrganizationLinksController);
router.put('/', updateOrganizationController);
router.post('/', createOrganizationController);

export default router;
