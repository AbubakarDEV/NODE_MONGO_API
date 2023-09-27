const dbConnect = require("./mongodb");

const insert = async (data) => {
  const db = await dbConnect();
  const result = await db.insertOne(data);
  return result;
};

module.exports = insert;
