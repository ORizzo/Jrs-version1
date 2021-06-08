const shopmodel = require("../models/shopmodel");
const usermodel = require("../models/usermodel");
const query = require("../db/query");
const dbconnect = require('../db/dbconnect')

export default async function shopp(username, discriminator, args) {
  dbconnect();
  var retorno = [];
  const docs = await query(username, discriminator);
  if (docs[0] == undefined) {
    retorno = [
      "Conta não encontrada :moneybag:",
      "Primeiro se registre no banco de dados com o '>registrar', para poder sacar.",
    ];
    return retorno;
  }
  const tabela = await shopmodel.find({ name: "tabela de preços" });
  const multiplicador = parseInt(args[1]);
  switch (args[0].toLowerCase()) {
    case "taurus":
      if (docs[0].inventario.hasTaurus) {
        retorno = ["Loja :moneybag:", "Você já tem uma Taurus."];
        return retorno;
      }
      if (tabela[0].armas.taurus > docs[0].user.money) {
        retorno = [
          "Loja :moneybag:",
          `Você não tem esse cascalho! Faltam R$ ${
            tabela[0].armas.taurus - docs[0].user.money
          } para fazer a compra.`,
        ];
      } else {
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money - tabela[0].armas.taurus);
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("inventario.hasTaurus", true);
        retorno = ["Loja :moneybag:", "A compra foi feita com sucesso!"];
      }
      break;
    case "oitão":
      if (docs[0].inventario.has38) {
        retorno = ["Loja :moneybag:", "Você já tem um oitão."];
        return retorno;
      }
      if (tabela[0].armas.oitão > docs[0].user.money) {
        retorno = [
          "Loja :moneybag:",
          `Você não tem esse cascalho! Faltam R$ ${
            tabela[0].armas.oitão - docs[0].user.money
          } para fazer a compra.`,
        ];
      } else {
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money - tabela[0].armas.oitão);
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("inventario.has38", true);
        retorno = ["Loja :moneybag:", "A compra foi feita com sucesso!"];
      }
      break;
    case "glock":
      if (docs[0].inventario.hasGlock) {
        retorno = ["Loja :moneybag:", "Você já tem uma glockada."];
        return retorno;
      }
      if (tabela[0].armas.glock > docs[0].user.money) {
        retorno = [
          "Loja :moneybag:",
          `Você não tem esse cascalho! Faltam R$ ${
            tabela[0].armas.glock - docs[0].user.money
          } para fazer a compra.`,
        ];
      } else {
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money - tabela[0].armas.glock);
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("inventario.hasGlock", true);
        retorno = ["Loja :moneybag:", "A compra foi feita com sucesso!"];
      }
      break;
    case "fal":
      if (docs[0].inventario.hasFal) {
        retorno = ["Loja :moneybag:", "Você já tem um fal."];
        return retorno;
      }
      if (tabela[0].armas.fal > docs[0].user.money) {
        retorno = [
          "Loja :moneybag:",
          `Você não tem esse cascalho! Faltam R$ ${
            tabela[0].armas.fal - docs[0].user.money
          } para fazer a compra.`,
        ];
      } else {
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money - tabela[0].armas.fal);
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("inventario.hasFal", true);
        retorno = ["Loja :moneybag:", "A compra foi feita com sucesso!"];
      }
      break;
    case "ar15":
      if (docs[0].inventario.hasAr15) {
        retorno = ["Loja :moneybag:", "Você já tem um AR."];
        return retorno;
      }
      if (tabela[0].armas.AR15 > docs[0].user.money) {
        retorno = [
          "Loja :moneybag:",
          `Você não tem esse cascalho! Faltam R$ ${
            tabela[0].armas.AR15 - docs[0].user.money
          } para fazer a compra.`,
        ];
      } else {
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money - tabela[0].armas.AR15);
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("inventario.hasAr15", true);
        retorno = ["Loja :moneybag:", "A compra foi feita com sucesso!"];
      }
      break;
    case "ak":
      if (docs[0].inventario.hasAk) {
        retorno = ["Loja :moneybag:", "Você já tem um ak trovoada."];
        return retorno;
      }
      if (tabela[0].armas.ak > docs[0].user.money) {
        retorno = [
          "Loja :moneybag:",
          `Você não tem esse cascalho! Faltam R$ ${
            tabela[0].armas.ak - docs[0].user.money
          } para fazer a compra.`,
        ];
      } else {
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money - tabela[0].armas.ak);
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("inventario.hasAk", true);
        retorno = ["Loja :moneybag:", "A compra foi feita com sucesso!"];
      }
      break;
    case "g3":
      if (docs[0].inventario.hasG3) {
        retorno = [
          "Loja :moneybag:",
          "Você já tem o G3 que para tudo e faz a noite virar dia.",
        ];
        return retorno;
      }
      if (tabela[0].armas.g3 > docs[0].user.money) {
        retorno = [
          "Loja :moneybag:",
          `Você não tem esse cascalho! Faltam R$ ${
            tabela[0].armas.g3 - docs[0].user.money
          } para fazer a compra.`,
        ];
      } else {
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("user.money", docs[0].user.money - tabela[0].armas.g3);
        await usermodel
          .find({ name: username, discriminator: discriminator })
          .updateOne({}, {})
          .set("inventario.hasG3", true);
        retorno = ["Loja :moneybag:", "A compra foi feita com sucesso!"];
      }
      break;
    case "seda":
      if (typeof multiplicador === "number") {
        if (tabela[0].itens.seda * multiplicador > docs[0].user.money) {
          retorno = [
            "Loja :moneybag:",
            `Você não tem esse cascalho! Faltam R$ ${
              tabela[0].itens.seda * multiplicador - docs[0].user.money
            } para fazer a compra.`,
          ];
        } else {
          await usermodel
            .find({ name: username, discriminator: discriminator })
            .updateOne({}, {})
            .set(
              "user.money",
              docs[0].user.money - tabela[0].itens.seda * multiplicador
            );
          await usermodel
            .find({ name: username, discriminator: discriminator })
            .updateOne({}, {})
            .set("inventario.seda", docs[0].inventario.seda + multiplicador);
          retorno = ["Loja :moneybag:", "Compra concluida."];
        }
      } else {
        retorno = [
          "Loja :moneybag:",
          "Houve um problema com o comando, reveja e então o digite novamente!",
        ];
      }
      break;
    case "pino":
      if (typeof multiplicador === "number") {
        if (tabela[0].itens.pino * multiplicador > docs[0].user.money) {
          retorno = [
            "Loja :moneybag:",
            `Você não tem esse cascalho! Faltam R$ ${
              tabela[0].itens.pino * multiplicador - docs[0].user.money
            } para fazer a compra.`,
          ];
        } else {
          await usermodel
            .find({ name: username, discriminator: discriminator })
            .updateOne({}, {})
            .set(
              "user.money",
              docs[0].user.money - tabela[0].itens.pino * multiplicador
            );
          await usermodel
            .find({ name: username, discriminator: discriminator })
            .updateOne({}, {})
            .set("inventario.pino", docs[0].inventario.pino + multiplicador);
          retorno = ["Loja :moneybag:", "Compra concluida."];
        }
      } else {
        retorno = [
          "Loja :moneybag:",
          "Houve um problema com o comando, reveja e então o digite novamente!",
        ];
      }
      break;
    case "garrafinha":
      if (typeof multiplicador === "number") {
        if (tabela[0].itens.garrafinha * multiplicador > docs[0].user.money) {
          retorno = [
            "Loja :moneybag:",
            `Você não tem esse cascalho! Faltam R$ ${
              tabela[0].itens.garrafinha * multiplicador - docs[0].user.money
            } para fazer a compra.`,
          ];
        } else {
          await usermodel
            .find({ name: username, discriminator: discriminator })
            .updateOne({}, {})
            .set(
              "user.money",
              docs[0].user.money - tabela[0].itens.garrafinha * multiplicador
            );
          await usermodel
            .find({ name: username, discriminator: discriminator })
            .updateOne({}, {})
            .set("inventario.garrafinha", docs[0].inventario.garrafinha + multiplicador);
          retorno = ["Loja :moneybag:", "Compra concluida."];
        }
      } else {
        retorno = [
          "Loja :moneybag:",
          "Houve um problema com o comando, reveja e então o digite novamente!",
        ];
      }
      break;
  }
  return retorno
}