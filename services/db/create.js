const dbconnect = require("./dbconnect");
const usermodel = require("../models/usermodel");

export default async function create(username, discriminator) {
  dbconnect();
  await usermodel.create({ name: username, discriminator: discriminator });
}
