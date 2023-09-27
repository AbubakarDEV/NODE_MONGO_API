const { MongoClient } = require("mongodb");

const url = "mongodb://0.0.0.0:27017/?directConnection=true";

const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db("e-comm");
  return (collection = db.collection("products"));
}

module.exports = dbConnect;
