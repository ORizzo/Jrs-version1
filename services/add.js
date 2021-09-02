const usermodel = require("./models/usermodel");
const query = require("./db/query");
const dbconnect = require("./db/dbconnect");

const add = async function () {
  dbconnect();
  const docs = await query("ORizzo", 7716);
  await usermodel
    .find({
      name: "ORizzo",
      discriminator: 7716,
    })
    .updateOne({}, {})
    .set("user.bank", docs[0].user.bank + 10000);
};
module.exports = add