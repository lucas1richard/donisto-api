/**
 * @fileOverview This is where all available api routes are defined, including
 * open vs protected routes. There is a redisClient used to save the contact token
 * and id to allow caching to reduce unnecessary database pings to authenticate
 * a contact.
 */
import Contact from 'models/Contact';
import { Request, Response, NextFunction } from 'express';
import express from 'express';
import nodepath from 'path';
import jwt from 'jwt-simple';
// import chalk from 'chalk';
import redisClient, { hgetAllAsync, hmsetAsync } from 'redis-client';
import ContactKeys from 'models/Contact/types/ContactKeys';

const authMiddleware = express.Router();

authMiddleware.use(async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    res.locals = {
      jwtSecret: process.env.JWT_SECRET
    };

    const { authorization } = req.headers;
    if (process.env.NODE_ENV !== 'test') {
      const { user_id, uuid } = await checkSecureRoute(Array.isArray(authorization) ? authorization[0] : authorization);
      Object.assign(res.locals, { user_id, uuid });
    } else {
      Object.assign(res.locals, { user_id: req.headers.user_id || 1 });
    }
    next();
  } catch (err) {
    // if (req.method === 'GET') {
    //   res.sendFile(
    //     nodepath.join(
    //       __dirname, '..', 'public', 'unauthorized.html'
    //     )
    //   );
    // } else {
    res.status(401).send(err.message);
    // }
  }
});

export default authMiddleware;

/**
 * If a valid token is provided, otherwise **throw an error**
 */
async function checkSecureRoute(token: string) {
  const key = `donisto:contact:token:${token}`;
  const redisStored = await hgetAllAsync(key);
  if (redisStored && redisStored.user_id) {
    return redisStored;
  }

  redisClient.expire(key, 86400); // expire in 24 hours
  if (!token || token === '[object Object]') {
    throw Error('You must have an account and be logged in');
  }

  const secret = process.env.JWT_SECRET;
  const decoded = jwt.decode(token, secret);

  const user_id = decoded.id || decoded.token;
  const { uuid } = decoded;
  console.log(decoded);
  const contact = await Contact.find({
    where: {
      [ContactKeys.UUID]: uuid
    }
  });

  if (!contact) {
    throw Error('You must have an account and be logged in');
  }

  hmsetAsync(key, { user_id, uuid });
  return decoded;
}
