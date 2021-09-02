const dbconnect = require("./dbconnect");
const usermodel = require("../models/usermodel");

const find = async function (username) {
  dbconnect();
  const docs = await usermodel.find({
    name: username,
  });
  return docs;
};
module.exports = find