const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const Mongo_Url = process.env.URL;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(Mongo_Url)
    .then((client) => {
      callback();
      _db = client.db("airbnb");
    })
    .catch((err) => {
      console.log("Error while connecting Mongo", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Mongo not Connected");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
