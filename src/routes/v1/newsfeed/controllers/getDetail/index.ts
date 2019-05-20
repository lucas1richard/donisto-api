import { RequestHandler } from 'express';
import { NewsFeed, Causes } from 'models';

const getNewsFeedDetailController: RequestHandler = async (req, res, next) => {
  try {
    const newsFeedItem = await NewsFeed.findOne({
      where: {
        uuid: req.params.newsItemUuid
      },
      include: [Causes]
    });

    res.json(newsFeedItem);
  } catch (err) {
    next(err);
  }
};

export default getNewsFeedDetailController;
