const dbconnect = require("../db/dbconnect");
const query = require("../db/query");
const usermodel = require("../models/usermodel");
const find = require("../db/find");

const banktransfer = async function(username, discriminator, args) {
  var retorno = [];
  dbconnect();
  const docs = await query(username, discriminator);
  const tax = 40 / 100;
  // A simple bank transference let your money become safe, but you lose a quarter of the context.
  var context = parseInt(args[1]);
  if (context == NaN) {
    retorno = ["Erro", "O valor que você quer transferir não é um número."];
    return retorno;
  }
  var person = await find(args[2]);
  if (docs[0] == undefined || person[0] == undefined) {
    retorno = [
      "Conta não encontrada :moneybag:",
      "Ocorreu um erro veja se o comando foi escrito certo. Lembre-se de usar o '>registrar' para se registrar no banco de dados, caso não tenha feito.",
    ];
    return retorno;
  }
  if (docs[0].user.bank < context) {
    retorno = [
      "Transferência Bancária :moneybag:",
      "Você ainda não tem todo esse cascalho.",
    ];
  } else {
    if (context < 100) {
      retorno = [
        "Trasferência Bancária :moneybag:",
        "O mínimo para transferir é R$ 100.",
      ];
    } else {
      await usermodel
        .find({
          name: username,
          discriminator: discriminator,
        })
        .updateOne({}, {})
        .set("user.bank", docs[0].user.bank - context);
      await usermodel
        .find({
          name: args[2],
        })
        .updateOne({}, {})
        .set("user.bank", person[0].user.bank + (context - context * tax));
      retorno = [
        "Transferência Bancária :moneybag:",
        `Você passou R$ ${context - context * tax} para o banco do(a) ${
          args[2]
        }`,
      ];
    }
  }
  return retorno;
}
module.exports = banktransfer
