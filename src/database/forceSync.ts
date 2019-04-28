import conn from './conn';
import './associate';

conn
  .sync({ force: true })
  .then(() => {
    console.log('forceSync executed');
    // process.exit();
  });