const dbconnect = require("./dbconnect");
const query = require("./query");
const create = require("./create");

export default async function registrar(username, discriminator) {
  try {
    dbconnect();
    var retorno = [];
    const docs = await query(username, discriminator);
    if (docs[0] !== undefined) {
      retorno = [
        "Você já ta no tráfico. Começa a fazer seus corre",
        "Para saber como começar a fazer uma grana, digite '>ajuda'",
      ];
    } else {
      await create(username, discriminator);
      retorno = [
        "Você agora trampa pro Juninho, não ramele.",
        "Se tiver moscando use '>ajuda'.",
      ];
    }
  } catch (error) {
    console.log(error);
  }
  return retorno;
}
