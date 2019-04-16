import conn from './conn';
import './database/associate';

conn
  .sync({ force: true })
  .then(() => {
    process.exit();
  });