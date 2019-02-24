import { Request, Response, NextFunction } from 'express';
import NewsFeed from 'models/NewsFeed';

const getNewsFeedController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newsFeedItems = await NewsFeed.findAll();
    res.json(newsFeedItems);
  } catch (err) {
    next(err);
  }
};

export default getNewsFeedController;
