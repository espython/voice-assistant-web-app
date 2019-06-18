/**
 * importing our modules
 */
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import { config } from 'dotenv';
import users from './routes/api/users';
import passportConfig from './config/passport';
/**
 * import DotEnv
 */

config();
// Dfine our server port
const port = process.env.PORT || 4000;

const app = express();
/**
 * Bodyparser middleware
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/**
 * DB Config
 */
const db = process.env.DB_URL;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Mongodb successfully connected'))
  .catch(err => console.log(err));

/**
 * Passport config
 */
passportConfig(passport);
/**
 * Routes
 */
app.use('/api/users', users);

/**
 * Initiallize the server
 */
app.listen(port, () => {
  console.log(`Server up and  running on port ${port} !`);
});
