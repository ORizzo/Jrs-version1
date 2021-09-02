const dbconnect = require("./dbconnect");
const usermodel = require("../models/usermodel");

const create = async function (username, discriminator) {
  dbconnect();
  await usermodel.create({ name: username, discriminator: discriminator });
};
module.exports = create;
