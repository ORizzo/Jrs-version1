const dbconnect = require("./dbconnect");
const usermodel = require("../models/usermodel");

export default async function find(username) {
  dbconnect();
  const docs = await usermodel.find({
    name: username
  });
  return docs;
}