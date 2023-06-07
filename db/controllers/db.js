const MongoClient = require('mongodb').MongoClient;
let mongoDB;

const setupDB = callback => {
  MongoClient.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, _) => {
      if (err) {
        return callback(err);
      }
      return callback(null, 'DB connection successful!');
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };