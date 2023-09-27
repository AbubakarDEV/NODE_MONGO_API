const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const deleteData = async (id) => {
  let db = await dbConnect();
  let result = await db.deleteOne({ _id: new mongodb.ObjectId(id) });
  return result;
};

module.exports = deleteData;
