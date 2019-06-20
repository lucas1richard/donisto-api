import { Router } from 'express';
import getAllOrganizationsController from './controllers/getAllOrganizations';
import createOrganizationController from './controllers/createOrganization';
import getContactOrganizationsController from './controllers/getContactOrganizations';
import getOrganizationDetailController from './controllers/getOrganizationDetail';
import updateOrganizationController from './controllers/updateOrganization';
import createOrganizationLinksController from './controllers/createOrganizationLinks';
import deleteOrganizationLinksController from './controllers/deleteOrganizationLinks';
import followOrganizationController from './controllers/followOrganization';
import unfollowOrganizationController from './controllers/unfollowOrganization';
import getDiscoverOrganizationsController from './controllers/getDiscoverOrganizations';

const router = Router();

router.get('/', getContactOrganizationsController);
router.put('/', updateOrganizationController);
router.post('/', createOrganizationController);

router.get('/all', getAllOrganizationsController);

router.post('/detail', getOrganizationDetailController);

router.get('/discover', getDiscoverOrganizationsController);

router.post('/links', createOrganizationLinksController);
router.delete('/links', deleteOrganizationLinksController);

router.post('/follow', followOrganizationController);
router.post('/unfollow', unfollowOrganizationController);

export default router;
