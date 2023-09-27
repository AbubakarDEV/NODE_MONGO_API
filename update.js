const dbConnect = require("./mongodb");

const updateData = async (data) => {
  let db = await dbConnect();
  let result = await db.updateOne(
    { name: data.name },
    {
      $set: data,
    }
  );
  return result;
};

module.exports = updateData;
