const dbconnect = require("../db/dbconnect");
const query = require("../db/query");
const getRandomIntInclusive = require("../blackjack");
const usermodel = require("../models/usermodel");
const cooldown = require("../cooldown");

const plantão = async function(username, discriminator) {
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
    if (data.getTime() > docs[0].cooldownplantão) {
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
          .set({ cooldownplantão: data.getTime() + 120000 });
        switch (RInt) {
          case 1:
            var retorno = [
              "Ficou de plantão",
              `Você ficou a noite inteira cobrindo o turno na boca e rendeu R$ ${Rnumber}.`,
            ];
            break;
          case 2:
            var retorno = [
              "Ficou de plantão",
              `Os mano te deixou na responsabilidade de cuidar dos bagulho e te deram R$ ${Rnumber}.`,
            ];
            break;
          case 3:
            var retorno = [
              "Ficou de plantão",
              `Você virou a noite cuidando do forte e faturou R$ ${Rnumber}.`,
            ];
            break;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      var cd = await cooldown("plantão", username, discriminator);
      var retorno = [cd[0], cd[1]];
    }
    return retorno;
  }
}
module.exports = plantão
