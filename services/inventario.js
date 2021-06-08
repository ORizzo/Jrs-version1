const Discord = require("discord.js");
const embed = new Discord.MessageEmbed();
const dbconnect = require("./db/dbconnect");
const query = require("./db/query");
export default async function inv(username, discriminator) {
  dbconnect();
  const docs = await query(username, discriminator);
  var retorno = [];
  var embedjr;
  if (docs[0] == undefined) {
    retorno = [
      "Conta não encontrada :moneybag:",
      "Primeiro se registre no banco de dados com o '>registrar', para poder sacar.",
    ];
    return retorno;
  } else {
    var mlrarma;
    if (docs[0].inventario.hasG3) {
      var mlrarma = "G3 que para tudo";
    } else if (docs[0].inventario.hasAk) {
      var mlrarma = "Aktrovoada";
    } else if (docs[0].inventario.hasAr15) {
      var mlrarma = "Ar15";
    } else if (docs[0].inventario.hasFal) {
      var mlrarma = "Fal no óleo";
    } else if (docs[0].inventario.hasGlock) {
      var mlrarma = "Glockada";
    } else if (docs[0].inventario.has38) {
      var mlrarma = "Oitão";
    } else if (docs[0].inventario.hasTaurus) {
      var mlrarma = "Taurus";
    } else {
      var mlrarma = "Nenhuma";
    }
    var embedjr =
    embed
      .setTitle("Inventário :school_satchel:")
      .addField("Sedas :no_smoking:", docs[0].inventario.seda, true)
      .addField("Maconha :no_smoking:", docs[0].inventario.maconha, true)
      .addField("LSD :scroll:", docs[0].inventario.LSD, false)
      .addField("Pinos :eyes:", docs[0].inventario.pino, true)
      .addField("Pó :eyes:", docs[0].inventario.po, true)
      .addField("Ecstasy :candy:", docs[0].inventario.ecstasy, false)
      .addField("Garrafinha :dash:", docs[0].inventario.garrafinha, true)
      .addField("Lança :dash:", docs[0].inventario.lança, true)
      .addField("Mlr Arma :gun:", mlrarma, false);
  }
  return embedjr;
}
