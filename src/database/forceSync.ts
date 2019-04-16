import conn from './conn';
import './associate';

conn
  .sync({ force: true })
  .then(() => {
    process.exit();
  });