import 'dotenv/config';
import app from './app';
import connection from './models/connection';

const PORT = process.env.PORT || 3001;
connection()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });