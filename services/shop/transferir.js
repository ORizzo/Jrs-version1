const dbconnect = require("../db/dbconnect");
const query = require("../db/query");
const usermodel = require("../models/usermodel");
const find = require("../db/find");
const transfer = async function (username, discriminator, args) {
  var retorno = [];
  dbconnect();
  const docs = await query(username, discriminator);
  var context = parseInt(args[0]);
  if (context == NaN) {
    retorno = ["Erro", "O valor que você quer transferir não é um número."];
    return retorno;
  }
  var person = await find(args[1]);
  // A simple money transference you don't lose anything, but the money can be stealed.
  if (docs[0] == undefined || person[0] == undefined) {
    retorno = [
      "Conta não encontrada :moneybag:",
      "Ocorreu um erro veja se o comando foi escrito certo. Lembre-se de usar o '>registrar' para se registrar no banco de dados, caso não tenha feito.",
    ];
    return retorno;
  }
  if (docs[0].user.money < context) {
    retorno = [
      "Transferência :moneybag:",
      "Você ainda não tem todo esse cascalho.",
    ];
  } else {
    if (context < 100) {
      retorno = [
        "Trasferência :moneybag:",
        "O mínimo para transferir é R$ 100.",
      ];
    } else {
      await usermodel
        .find({
          name: username,
          discriminator: discriminator,
        })
        .updateOne({}, {})
        .set("user.money", docs[0].user.money - context);
      await usermodel
        .find({
          name: args[1],
        })
        .updateOne({}, {})
        .set("user.money", person[0].user.money + context);
      retorno = [
        "Transferência :moneybag:",
        `Você passou R$ ${context} para o bolso do(a) ${args[1]}`,
      ];
    }
  }
  return retorno;
};
module.exports = transfer
