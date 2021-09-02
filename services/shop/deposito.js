const dbconnect = require("../db/dbconnect");
const query = require("../db/query");
const usermodel = require("../models/usermodel");

const dep = async function(username, discriminator, args) {
  var retorno = [];
  dbconnect();
  const docs = await query(username, discriminator);
  const context = parseInt(args[0]);
  if (docs[0] == undefined) {
    retorno = [
      "Conta não encontrada :moneybag:",
      "Primeiro se registre no banco de dados com o '>registrar', para poder depositar.",
    ];
  } else {
    if (docs[0].user.money < context) {
      retorno = [
        "Depósito :moneybag:",
        "Você ainda não tem todo esse cascalho.",
      ];
    } else {
      if (context < 250) {
        retorno = ["Depósito :moneybag:", "O mínimo de deposito é R$ 250."];
      } else {
        if (args[0] === "all") {
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set("user.money", 0);
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set("user.bank", docs[0].user.bank + docs[0].user.money);
          const bank = await query(username, discriminator);
          retorno = [
            "Depósito :moneybag:",
            `Você muquiou R$ ${docs[0].user.money}, agora você tem R$ ${bank[0].user.bank} muquiados.`,
          ];
          return retorno;
        }
        await usermodel
          .find({
            name: username,
            discriminator: discriminator,
          })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money - context);
        await usermodel
          .find({
            name: username,
            discriminator: discriminator,
          })
          .updateOne({}, {})
          .set("user.bank", docs[0].user.bank + context);
        const bank = await query(username, discriminator);
        retorno = [
          "Depósito :moneybag:",
          `Você muquiou R$ ${context}, agora você tem R$ ${bank[0].user.bank} muquiados.`,
        ];
      }
    }
  }
  return retorno;
}
module.exports = dep
