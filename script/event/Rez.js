
module.exports.config = {
  name: "welcome",
  version: "1.0.0",
  role: 0,
  hasPrefix: false,
  description: "Souhaite la bienvenue automatiquement aux nouveaux membres",
  usage: "welcome",
  credits: "Davbot",
};

module.exports.run = async function({ api, event }) {
  const threadInfo = await api.getThreadInfo(event.threadID);
  const addedUser = event.logMessageData.addedParticipants.map(p => p.fullName).join(', ');

  const message = {
    body: `👋 Bienvenue à addedUser dans le groupe "${threadInfo.threadName}" !\n\nNous sommes heureux de t’avoir parmi nous. Respect, entraide et bonne ambiance sont au rendez-vous ✨`,
    attachment: null // Tu peux ajouter une image de bienvenue ici
  };

  return api.sendMessage(message, event.threadID);
};
