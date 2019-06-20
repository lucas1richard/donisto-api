import express, { Request, Response, NextFunction } from 'express';
const app = express();

import compression from 'compression';  // compresses requests
import bodyParser from 'body-parser';
import lusca from 'lusca';
import dotenv from 'dotenv';
import path from 'path';
import expressValidator from 'express-validator';
import api from './routes/api';
// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env.example' });

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

app.get('/', (req: Request, res: Response) => {
  res.send('Donisto API');
});
app.use('/api', api);

app.use((err: any, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line no-unused-vars
  if (process.env.NODE_ENV !== 'test') {
    console.log(err);
    // logger.error(err);
  }
  if (err.isJoi) {
    const validationError = {
      validationError: true,
      message: err.details[0].message,
      context: err.details[0].context
    };
    res.status(400).send(validationError);
  } else {
    res.status(500).send(err.message);
  }
});

export default app;
