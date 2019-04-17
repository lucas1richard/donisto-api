import errorHandler from 'errorhandler';
import conn from './config/database/conn';
import app from './app';
import './database/associate';

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());

conn.sync({ force: true });

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});



export default server;
