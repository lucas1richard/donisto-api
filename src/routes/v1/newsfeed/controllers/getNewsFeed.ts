import { Request, Response, NextFunction } from 'express';
import NewsFeed from 'models/NewsFeed';
import Organizations from 'models/Organization';

const getNewsFeedController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newsFeedItems = await NewsFeed.findAll({
      order: [
        ['id', 'DESC']
      ],
      include: [
        Organizations
      ],
      limit: 10,
    });
    res.json(newsFeedItems);
  } catch (err) {
    next(err);
  }
};

export default getNewsFeedController;
