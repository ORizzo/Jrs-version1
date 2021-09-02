const dbconnect = require("../db/dbconnect");
const query = require("../db/query");
const getRandomIntInclusive = require("../blackjack");
const usermodel = require("../models/usermodel");
const cooldown = require("../cooldown");

const shop = async function (username, discriminator, args) {
  const RInt = getRandomIntInclusive(1, 3);
  dbconnect();
  const docs = await query(username, discriminator);
  const data = new Date();
  const Rnumber = getRandomIntInclusive(3, 7);
  var retorno = [];
  if (docs[0] == undefined) {
    var retorno = [
      "Conta não encontrada :moneybag:",
      "Primeiro se registre no banco de dados com o '>registrar', para poder sacar.",
    ];
    return retorno;
  }
  if (data.getTime() > docs[0].cooldowncorre) {
    switch (args[0].toLowerCase()) {
      case "maconha":
        dbconnect();
        try {
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set("inventario.maconha", docs[0].inventario.maconha + Rnumber);
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set({ cooldowncorre: data.getTime() + 120000 });
          switch (RInt) {
            case 1:
              var retorno = [
                "Fez o corre :shamrock:",
                `Fez o corre e isso te rendeu ${Rnumber} g de maconha.`,
              ];
              break;
            case 2:
              var retorno = [
                "Fez o corre :shamrock:",
                `Desceu na boca e a paranga tava bem servida você conseguiu ${Rnumber} g do verde.`,
              ];
              break;
            case 3:
              var retorno = [
                "Fez o corre :shamrock:",
                `Tinha promoção no Jaca e você descolou ${Rnumber} g da fedorenta.`,
              ];
              break;
          }
        } catch (error) {
          console.log(error);
        }
        return retorno;
        break;
      case "pó":
        dbconnect();
        try {
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set("inventario.po", docs[0].inventario.po + Rnumber);
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set({ cooldowncorre: data.getTime() + 120000 });
          switch (RInt) {
            case 1:
              var retorno = [
                "Fez o corre :fog:",
                `Fez o corre e isso te rendeu ${Rnumber} g de pó.`,
              ];
              break;
            case 2:
              var retorno = [
                "Fez o corre :fog:",
                `O pó de 3 do vidigal tava em promoção c descolou ${Rnumber} g da branca de neve.`,
              ];
              break;
            case 3:
              var retorno = [
                "Fez o corre :fog:",
                `Desceu na boca e o pó tava barato você conseguiu ${Rnumber} g da branquinha.`,
              ];
              break;
          }
        } catch (error) {
          console.log(error);
        }
        return retorno;
        break;
      case "lança":
        dbconnect();
        try {
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set("inventario.lança", docs[0].inventario.lança + Rnumber);
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set({ cooldowncorre: data.getTime() + 120000 });
          switch (RInt) {
            case 1:
              var retorno = [
                "Fez o corre :dash:",
                `Fez o corre e isso te rendeu ${Rnumber} ml de bico verde.`,
              ];
              break;
            case 2:
              var retorno = [
                "Fez o corre :dash:",
                `Misturou os produtos de limpeza da sua mãe e fez ${Rnumber} ml lança.`,
              ];
              break;
            case 3:
              var retorno = [
                "Fez o corre :dash:",
                `Tinha promoção no sapé e você desenrolou ${Rnumber} ml de bico verde.`,
              ];
              break;
          }
        } catch (error) {
          console.log(error);
        }

        return retorno;
        break;
      case "LSD":
        dbconnect();
        try {
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set("inventario.LSD", docs[0].inventario.LSD + Rnumber);
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set({ cooldowncorre: data.getTime() + 120000 });
          switch (RInt) {
            case 1:
              var retorno = [
                "Fez o corre :scroll:",
                `Fez o corre e isso te rendeu ${Rnumber} papéis.`,
              ];
              break;
            case 2:
              var retorno = [
                "Fez o corre :scroll:",
                `Trocou ideia com um boyzin isso te rendeu ${Rnumber} g do papel do diabo.`,
              ];
              break;
            case 3:
              var retorno = [
                "Fez o corre :scroll:",
                `O vapor tava de bom humor por isso vc conseguiu ${Rnumber} papéis.`,
              ];
              break;
          }
        } catch (error) {
          console.log(error);
        }
        return retorno;
        break;
      case "ecstasy":
        dbconnect();
        try {
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set("inventario.ecstasy", docs[0].inventario.ecstasy + Rnumber);
          await usermodel
            .find({
              name: username,
              discriminator: discriminator,
            })
            .updateOne({}, {})
            .set({ cooldowncorre: data.getTime() + 120000 });
          switch (RInt) {
            case 1:
              var retorno = [
                "Fez o corre :candy:",
                `Fez o corre e isso te rendeu ${Rnumber} balas.`,
              ];
              break;
            case 2:
              var retorno = [
                "Fez o corre :candy:",
                `Trocou ideia com um boyzin isso te rendeu ${Rnumber} balas.`,
              ];
              break;
            case 3:
              var retorno = [
                "Fez o corre :candy:",
                `O vapor tava de bom humor por isso vc conseguiu ${Rnumber} balas.`,
              ];
              break;
          }
        } catch (error) {
          console.log(error);
        }

        return retorno;
        break;
    }
  } else {
    var cd = await cooldown("corre", username, discriminator);
    var retorno = [cd[0], cd[1]];
  }
  return retorno;
}
module.exports = shop