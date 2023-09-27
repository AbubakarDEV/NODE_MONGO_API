const dbConnect = require("./mongodb");

const read = async () => {
  let db = await dbConnect();
  let data = await db.find({}).toArray();
  return data;
};

module.exports = read;
