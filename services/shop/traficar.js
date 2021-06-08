const dbconnect = require("../db/dbconnect");
const query = require("../db/query");
const getRandomIntInclusive = require("../blackjack");
const usermodel = require("../models/usermodel");
const cooldown = require("../cooldown");

export default async function traficar(username, discriminator) {
  const RInt = getRandomIntInclusive(1, 3);
  dbconnect();
  const docs = await query(username, discriminator);
  const data = new Date();
  var retorno = [];
  if (docs[0] == undefined) {
    var retorno = [
      "Conta não encontrada :moneybag:",
      "Primeiro se registre no banco de dados com o '>registrar', para poder trampar pro Juninho.",
    ];
    return retorno;
  } else {
    if (data.getTime() > docs[0].cooldowntraficar) {
      const Rnumber = getRandomIntInclusive(65, 90);
      try {
        await usermodel
          .find({
            name: username,
            discriminator: discriminator,
          })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money + Rnumber);
        await usermodel
          .find({
            name: username,
            discriminator: discriminator,
          })
          .updateOne({}, {})
          .set({ cooldowntraficar: data.getTime() + 90000 });
        switch (RInt) {
          case 1:
            var retorno = [
              "Traficou",
              `Você vendeu as parada e o chefe te deu R$ ${Rnumber}.`,
            ];
            break;
          case 2:
            var retorno = [
              "Traficou",
              `Você passou droga pros noia na pracinha e faturou R$ ${Rnumber}.`,
            ];
            break;
          case 3:
            var retorno = [
              "Traficou",
              `Depois de traficar a noite inteira você arranjou R$ ${Rnumber}.`,
            ];
            break;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      var cd = await cooldown("traficar", username, discriminator);
      var retorno = [cd[0], cd[1]];
    }
    return retorno;
  }
}