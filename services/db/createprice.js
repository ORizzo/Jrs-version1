const dbconnect = require("./dbconnect");
const shopmodel = require("../models/shopmodel");

export default async function createprice() {
  dbconnect();
  const docs = await shopmodel.find({ name: "tabela de preços" });
  console.log(docs[0]);
  if (docs[0] == undefined) {
    await shopmodel.create({ name: "tabela de preços" });
  }
}
