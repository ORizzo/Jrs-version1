const env = require("dotenv");
env.config();

const Discord = require("discord.js");
const client = new Discord.Client();
const embed = new Discord.MessageEmbed();
const shop = require("./services/shop/corre");
const shopp = require("./services/shop/comprar");
const inv = require("./services/inventario");
const sacar = require("./services/shop/sacar");
const dep = require("./services/shop/deposito");
const plantão = require("./services/shop/plantão");
const traficar = require("./services/shop/traficar");
const foguetar = require("./services/shop/foguetar");
const saldo = require("./services/shop/saldo");
const ajuda = require("./services/ajuda");
const registrar = require("./services/db/registrar");
const transfer = require("./services/shop/transferir");
const banktransfer = require("./services/shop/banktransfer");
const assalto = require("./services/assalto");
const loja = require("./services/loja");
const add = require("./services/add");

client.on("ready", () => {
  console.log(
    `Discord bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );
  console.log(`Serving ${client.guilds.cache.size} servers`);
  if (client.user !== null) {
    client.user.setActivity("Cobrindo o plantão no jacaré");
  }
  // console.log(men.slice(9).trim())
});
client.on("message", async (message) => {
  try {
    // ignora outros bots
    if (message.author.bot) return;

    // ignora mensagens que não começam com o prefixo do bot que é >
    if (!message.content.startsWith(">")) return;

    // Separa a mensagem em um responseay separado por espaço
    const args = message.content.slice(">".length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();

    const embedjr = embed
      .setAuthor(message.author.username, message.author.avatarURL())
      .setColor("#D55745")
      .setThumbnail(
        "https://media.discordapp.net/attachments/585595258948026419/825550994918211614/juninho.png?width=473&height=473"
      )
      .setDescription("")
      .spliceFields(0, 15);

    if (command === "registrar") {
      const response = await registrar(
        message.author.username,
        message.author.discriminator
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (command === "ajuda") {
      const response = await ajuda();
      message.channel.send(response);
    }
    if (command === "add") {
      if (
        message.author.username === "ORizzo" &&
        message.author.discriminator === "7716"
      ) {
        add();
        message.channel.send("Dinheiro adicionado!");
      } else {
        message.channel.send("Você não tem acesso a esse comando!");
      }
    }
    if (command === "saldo") {
      const response = await saldo(
        message.author.username,
        message.author.discriminator
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (command === "traficar") {
      const response = await traficar(
        message.author.username,
        message.author.discriminator
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (command === "foguetar") {
      const response = await foguetar(
        message.author.username,
        message.author.discriminator
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (command === "plantão" || command === "plantao") {
      const response = await plantão(
        message.author.username,
        message.author.discriminator
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (command === "depositar" || command === "dp" || command === "dep") {
      const response = await dep(
        message.author.username,
        message.author.discriminator,
        args
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (command === "transferir" || command === "transfer") {
      if (args[0] === "banco") {
        const response = await banktransfer(
          message.author.username,
          message.author.discriminator,
          args
        );
        message.channel.send(
          embedjr.setTitle(response[0]).setDescription(response[1])
        );
      } else {
        const response = await transfer(
          message.author.username,
          message.author.discriminator,
          args
        );
        message.channel.send(
          embedjr.setTitle(response[0]).setDescription(response[1])
        );
      }
    }
    if (command === "sacar" || command === "sq" || command === "saq") {
      const response = await sacar(
        message.author.username,
        message.author.discriminator,
        args
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (command === "comprar") {
      const response = await shopp(
        message.author.username,
        message.author.discriminator,
        args
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (
      command === "inventário" ||
      command === "inv" ||
      command === "inventario"
    ) {
      const response = await inv(
        message.author.username,
        message.author.discriminator
      );
      message.channel.send(response);
    }
    if (command === "corre") {
      const response = await shop(
        message.author.username,
        message.author.discriminator,
        args
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
    if (command === "loja") {
      const response = await loja();
      message.channel.send(
        response
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor("#D55745")
          .setThumbnail(
            "https://media.discordapp.net/attachments/585595258948026419/825550994918211614/juninho.png?width=473&height=473"
          )
      );
    }
    if (command === "assaltar") {
      const response = await assalto(
        message.author.username,
        message.author.discriminator,
        args
      );
      message.channel.send(
        embedjr.setTitle(response[0]).setDescription(response[1])
      );
    }
  } catch (e) {
    console.log(e);
  }
});

client.login(process.env.BOT_TOKEN);
