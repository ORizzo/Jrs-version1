const dbconnect = require("./dbconnect");
const usermodel = require("../models/usermodel");

export default async function query(username, discriminator) {
  dbconnect();
  const docs = await usermodel.find({
    name: username,
    discriminator: discriminator,
  });
  return docs;
}
