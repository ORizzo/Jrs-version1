const Discord = require("discord.js");
const embed = new Discord.MessageEmbed();

export default async function ajuda() {
  var embedjr = embed
    .setTitle("Escola do tráfico :school:")
    .setDescription(
      "Para começar a trampar pro juninho você pode usar alguns comandos como:"
    )
    .addField(">foguetar :rocket:", "Ganha R$ 60 até R$90", true)
    .addField(">traficar :money_mouth:", "Ganha R$ 60 até R$90", true)
    .addField(">plantão :dash:", "Ganha R$ 60 até R$90", true)
    .addField(
      "Escola do tráfico :school:",
      "Com isso você levanta uma grana e um xp pra poder continuar nessa vida e ir evoluindo no mundo do tráfico. Se quiser saber mais sobre o Bot Juninho use '>sobre'."
    )
    .addField("Loja :computer:", "Use o comando '>loja' para comprar coisas como itens e armas.", true)
    .setColor("#D55745");
  return embedjr;
}
