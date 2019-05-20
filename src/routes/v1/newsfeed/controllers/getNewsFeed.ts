import { RequestHandler } from 'express';
import { NewsFeed, Organizations } from 'models';

const getNewsFeedController: RequestHandler = async (req, res, next) => {
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
