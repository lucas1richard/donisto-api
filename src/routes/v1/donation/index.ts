import { Router } from 'express';
import getDonationController from './controllers/getDonation';
import createDonationController from './controllers/createDonation';
import updateDonationController from './controllers/updateDonation';
import deleteDonationController from './controllers/deleteDonation';
import getDonationsByIdController from './controllers/getDonationsById';

const router = Router();

router.get('/', getDonationController);
router.post('/', createDonationController);
router.put('/', updateDonationController);
router.delete('/', deleteDonationController);

router.post('/id', getDonationsByIdController);

export default router;
