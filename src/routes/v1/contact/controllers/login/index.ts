import { Request, Response, NextFunction } from 'express';
import Contact from 'models/Contact';
import { bodySchema } from './validate';
import jwt from 'jwt-simple';
import redisClient, { hmsetAsync } from 'redis-client';

const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bodySchema.validate(req.body);

    const contact = await Contact.findByPassword({
      email: req.body.email,
      password: req.body.password
    });
    if (contact) {
      const token = jwt.encode({
        id: contact.id,
        uuid: contact.uuid
      }, process.env.JWT_SECRET);

      const key = `donisto:contact:token:${token}`;

      await hmsetAsync(key, {
        user_id: contact.id,
        uuid: contact.uuid
      });

      redisClient.expire(key, 86400); // expire in 24 hours

      res
        .status(200)
        .set('token', token)
        .json(contact);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

export default loginController;
