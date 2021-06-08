const dbconnect = require("../db/dbconnect");
const query = require("../db/query");
const usermodel = require("../models/usermodel");

export default async function sacar(username, discriminator, args) {
  var retorno = [];
  dbconnect();
  const docs = await query(username, discriminator);
  const context = parseInt(args[0]);
  if (docs[0] == undefined) {
    retorno = [
      "Conta não encontrada :moneybag:",
      "Primeiro se registre no banco de dados com o '>registrar', para poder sacar.",
    ];
  } else {
    if (docs[0].user.bank < context) {
      retorno = ["Saque :moneybag:", "Você ainda não tem todo esse cascalho."];
    } else {
      if (context < 50) {
        retorno = ["Saque :moneybag:", "O mínimo para saques é R$ 50."];
      } else {
        await usermodel
          .find({
            name: username,
            discriminator: discriminator,
          })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money + context);
        await usermodel
          .find({
            name: username,
            discriminator: discriminator,
          })
          .updateOne({}, {})
          .set("user.bank", docs[0].user.bank - context);
        const bank = await query(username, discriminator);
        retorno = [
          "Saque :moneybag:",
          `Você sacou R$ ${context}, agora você tem R$ ${bank[0].user.bank} muquiados e R$ ${bank[0].user.money} em mãos.`,
        ];
      }
    }
  }
  return retorno
}
