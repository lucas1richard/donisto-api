import { Request, Response, NextFunction } from 'express';

const getDonationController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json([{
      id: '1',
      text: 'Donation 1',
      organization_uuid: '1',
      organization: {
        id: '1',
        name: 'Organization 1'
      }
    }, {
      id: '2',
      text: 'Donation 2',
      organization_uuid: '2',
      organization: {
        id: '2',
        name: 'Organization 2'
      }
    }, {
      id: '3',
      text: 'Donation 3',
      organization_uuid: '3',
      organization: {
        id: '3',
        name: 'Organization 3'
      }
    }]);
  } catch (err) {
    next(err);
  }
};

export default getDonationController;
