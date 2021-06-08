const Discord = require("discord.js");
const embed = new Discord.MessageEmbed();
const dbconnect = require("./db/dbconnect");
const shopmodel = require("./models/shopmodel");
export default async function loja() {
  dbconnect();
  const prices = await shopmodel.find({
    name: "tabela de preços",
  });
  var embedjr;
  var embedjr = embed
    .setTitle("Loja :purse:")
    .addField(
      "Comando :computer:",
      `Para comprar algo na loja é só usar o prefixo '>comprar' e o nome do item, por exemplo '>comprar taurus'.`,
      false
    )
    .addField(
      "Sedas :no_smoking:",
      `R$ ${prices[0].itens.seda}, usado para fabricar becks`,
      false
    )
    .addField(
      "Pinos :eyes:",
      `R$ ${prices[0].itens.pino}, usado para fabricar pino de pó`,
      false
    )
    .addField(
      "Garrafinha :dash:",
      `R$ ${prices[0].itens.garrafinha}, usado para fabricar lança`,
      false
    )
    .addField(
      "Armas :gun:",
      `Taurus - R$ ${prices[0].armas.taurus}, 38 - R$ ${prices[0].armas.oitão}, Glock - R$ ${prices[0].armas.glock}, Fal - R$ ${prices[0].armas.fal}, AR15 - R$ ${prices[0].armas.AR15}, AK - R$ ${prices[0].armas.ak}, G3 - R$ ${prices[0].armas.g3}. Usado para fazer assaltos.`,
      false
    );
  return embedjr;
}
