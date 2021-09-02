const dbconnect = require("../db/dbconnect");
const query = require("../db/query");

const saldo = async function(username, discriminator) {
  const docs = await query(username, discriminator);
  var retorno = [];
  if (docs[0] == undefined) {
    retorno = [
      "Conta não encontrada :moneybag:",
      "Primeiro se registre no banco de dados com o '>registrar', para poder verificar seu saldo.",
    ];
  } else {
    dbconnect();
    retorno = [
      "Banco do tráfico",
      `Você tá com R$ ${docs[0].user.money} na mão, e R$ ${docs[0].user.bank} muquiado.`,
    ];
  }
  return retorno;
}
module.exports = saldo
