import { Request, Response, NextFunction } from 'express';
import NewsFeed from 'models/NewsFeed';
import Cause from 'models/Cause';

const getNewsFeedDetailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newsFeedItem = await NewsFeed.findOne({
      where: {
        uuid: req.params.newsItemUuid
      },
      include: [Cause]
    });

    res.json(newsFeedItem);
  } catch (err) {
    next(err);
  }
};

export default getNewsFeedDetailController;
