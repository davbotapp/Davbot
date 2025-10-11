
module.exports.config = {
  name: "resendAuto",
  eventType: ["message_unsend"],
  version: "1.0",
  credits: "Davbot",
  description: "Renvoie automatiquement le contenu d’un message supprimé",
};

const cache = global._unsendCache || {};
global._unsendCache = cache;

module.exports.handleEvent = async function ({ api, event }) {
  if (event.type !== "message_unsend") return;

  const { threadID, messageID, senderID } = event;

  try {
    const history = await api.getMessageInfo(messageID, threadID);
    const msg = history?.messageReply || {};
    const name = (await api.getUserInfo(senderID))[senderID]?.name || "Quelqu’un";

    const body = msg.body || "[Contenu non texte ou pièce jointe]";
    const text = `🕵️‍♂️ name a supprimé un message :{body}`;

    return api.sendMessage(text, threadID);
  } catch (e) {
    return api.sendMessage("❗ Un message a été supprimé, mais n’a pas pu être récupéré.", threadID);
  }
};
