const dbconnect = require("./db/dbconnect");
const query = require("./db/query");
const usermodel = require("./models/usermodel");
const cooldown = require("./cooldown");
const find = require("./db/find")

export default async function assalto(username, discriminator, args) {
  dbconnect();
  const docs = await query(username, discriminator);
  const person = await find(args[0]);
  const data = new Date();
  if (docs[0] == undefined) {
    var retorno = [
      "Conta não encontrada :moneybag:",
      "Primeiro se registre no banco de dados com o '>registrar', para poder trampar pro Juninho.",
    ];
    return retorno;
  }
  if (data.getTime() > docs[0].cooldownassalto) {
    var mlrarma;
    var retorno = [];
    var percent; // per cent you can steal with each weapon
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
    if (mlrarma == "Nenhuma") {
      retorno = ["Assalto :gun:", "Você não tem uma arma!"];
      return retorno;
    }
    switch (mlrarma) {
      case "G3 que para tudo":
        percent = 1;
        break;
      case "Aktrovoada":
        percent = 0.8;
        break;
      case "Ar15":
        percent = 0.7;
        break;
      case "Fal no óleo":
        percent = 0.6;
        break;
      case "Glockada":
        percent = 0.45;
        break;
      case "Oitão":
        percent = 0.35;
        break;
      case "Taurus":
        percent = 0.2;
        break;
    }
    if (person[0].user.money < 200) {
      retorno = [
        "Assalto :gun:",
        "O fudido não tem R$ 200, mete o pé pra não lombrar pra você!",
      ];
      return retorno;
    } else {
        await usermodel
          .find({
            name: username,
            discriminator: discriminator,
          })
          .updateOne({}, {})
          .set({ cooldownassalto: data.getTime() + 300000 });
      await usermodel
        .find({
          name: username,
          discriminator: discriminator,
        })
        .updateOne({}, {})
        .set("user.money", docs[0].user.money + person[0].user.money * percent);
      await usermodel
        .find({
          name: args[0],
        })
        .updateOne({}, {})
        .set(
          "user.money",
          person[0].user.money - person[0].user.money * percent
        );
      retorno = [
        "Assalto :gun:",
        `Você roubou R$ ${person[0].user.money * percent} do otário(a) do ${
          args[0]
        }`,
      ];
    }
  } else {
    var cd = await cooldown("assalto", username, discriminator);
    var retorno = [cd[0], cd[1]];
  }
  return retorno
}
