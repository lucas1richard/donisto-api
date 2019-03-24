import jwt from 'jwt-simple';
import redisClient, { hmsetAsync } from 'redis-client';

async function handleToken(id: string, uuid: string) {
  const token = jwt.encode({
    id,
    uuid
  }, process.env.JWT_SECRET);

  const key = `donisto:contact:token:${token}`;

  await hmsetAsync(key, {
    user_id: id,
    uuid: uuid
  });

  redisClient.expire(key, 86400); // expire in 24 hours

  return token;
}

export default handleToken;
