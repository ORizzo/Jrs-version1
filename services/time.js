const dbconnect = require("./db/dbconnect");

const time = async function (username, discriminator) {
  dbconnect();
  const data = new Date();
  const docs = await query(username, discriminator);
  const time = (docs[0].crime - data.getTime()) / 60000;
  const decimal = time.toFixed(5).toString().slice(2, 6) / 10000;
  if (time >= 1) {
    if (decimal * 60 <= 59 && decimal * 60 >= 1) {
      if (decimal * 60 < 10) {
        return `Os cana tá de olho, espere ${time
          .toString()
          .slice(0, 1)} minutos e ${(decimal * 60)
          .toString()
          .slice(0, 1)} segundos.`;
      } else {
        return `Os cana tá de olho, espere ${time
          .toString()
          .slice(0, 1)} minutos e ${(decimal * 60).toString().slice(0, 2)}.`;
      }
    } else {
      return `Os cana tá de olho, espere ${time
        .toString()
        .slice(0, 1)} minutos.`;
    }
  } else {
    return `Os cana tá de olho, espere ${(decimal * 60)
      .toString()
      .slice(0, 2)} segundos.`;
  }
};
module.exports = time
