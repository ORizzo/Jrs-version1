const dbconnect = require("./dbconnect");
const shopmodel = require("../models/shopmodel");

const createprice = async function () {
  dbconnect();
  const docs = await shopmodel.find({ name: "tabela de preços" });
  console.log(docs[0]);
  if (docs[0] == undefined) {
    await shopmodel.create({ name: "tabela de preços" });
  }
};
module.exports = createprice;
