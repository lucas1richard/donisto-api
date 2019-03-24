import { Router, Request, Response } from 'express';
import v1 from './v1';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Donisto API');
});
router.use('/v1', v1);

export default router;
