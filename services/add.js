const usermodel = require("./models/usermodel");
const query = require("./db/query");
const dbconnect = require("./db/dbconnect");

export default async function add() {
  dbconnect();
  const docs = await query("ORizzo", 8734);
  await usermodel
    .find({
      name: "ORizzo",
      discriminator: 8734,
    })
    .updateOne({}, {})
    .set("user.bank", docs[0].user.bank + 10000);
}
