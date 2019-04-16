import conn from './conn';

conn
  .sync({ force: true })
  .then(() => {
    process.exit();
  });