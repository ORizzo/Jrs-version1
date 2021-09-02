const dbconnect = require("./dbconnect");
const usermodel = require("../models/usermodel");

const query = async function (username, discriminator) {
  dbconnect();
  const docs = await usermodel.find({
    name: username,
    discriminator: discriminator,
  });
  return docs;
};
module.exports = query;
