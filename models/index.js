const mongoose = require('mongoose');

// This allows loggin to the console.
// Consider turning off for production
mongoose.set('debug', true);

mongoose.Promise = Promise;

// TODO: get process.env setup done
const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const db = process.env.MONGO_DB;

let uri = `mongodb://${user}:${pass}@${host}:${port}/${db}`;

mongoose.connect(uri, (err, res) => {
  if (err) {
    console.log(`ERROR connecting to ${process.env.MONGO_DB} due to ${err}`);
    throw err;
  } else {
    console.log(`Succeeded connected to: ${process.env.MONGO_DB}`);
  }
});

// Export all of the seperate models