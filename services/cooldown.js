const query = require("./db/query");
const dbconnect = require("./db/dbconnect");

const cooldown = async function(arg, username, discriminator) {
  dbconnect();
  const docs = await query(username, discriminator);
  const data = new Date();
  var cdname;
  var retorno = [];
  switch (arg) {
    case "corre":
      var cdname = await docs[0].cooldowncorre;
      break;
    case "traficar":
      var cdname = await docs[0].cooldowntraficar;
      break;
    case "foguetar":
      var cdname = await docs[0].cooldownfoguetar;
      break;
    case "plantão":
      var cdname = await docs[0].cooldownplantão;
      break;
      case "assalto":
      var cdname = await docs[0].cooldownassalto;
      break;
  }
  const time = (cdname - data.getTime()) / 60000;
  const decimal2 = time.toFixed(5).toString().slice(2, 6) * 60;
  const decimal = parseInt(decimal2.toString().slice(0, 2))
  
  if (time >= 1) {
    if (decimal <= 59 && decimal >= 1) {
      if (decimal < 10) {
        var retorno = [
          "Cooldown :hourglass_flowing_sand:",
          `Os cana tá de olho, espere ${time
            .toString()
            .slice(0, 1)} minutos e ${decimal
            .toString()
            .slice(0, 1)} segundos. :skunk:`,
        ];
      } else {
        var retorno = [
          "Cooldown :hourglass_flowing_sand:",
          `Os cana tá de olho, espere ${time
            .toString()
            .slice(0, 1)} minutos e ${decimal
            .toString()
            .slice(0, 2)} segundos. :skunk:`,
        ];
      }
    } else {
      var retorno = [
        "Cooldown :hourglass_flowing_sand:",
        `Os cana tá de olho, espere ${time
          .toString()
          .slice(0, 1)} minutos. :skunk:`,
      ];
    }
  } else {
    var retorno = [
      "Cooldown :hourglass_flowing_sand:",
      `Os cana tá de olho, espere ${decimal
        .toString()
        .slice(0, 2)} segundos. :skunk:`,
    ];
  }
  return retorno;
}
module.exports = cooldown