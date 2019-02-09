import { Request, Response, NextFunction } from 'express';

const getNewsFeedController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json([{
      id: '1',
      title: 'News Item 1',
      subtitle: 'From organization 1'
    }, {
      id: '2',
      title: 'News Item 2',
      subtitle: 'From organization 2'
    }, {
      id: '3',
      title: 'News Item 3',
      subtitle: 'From organization 3'
    }]);
  } catch (err) {
    next(err);
  }
};

export default getNewsFeedController;
