
const axios = require("axios");

module.exports.config = {
  name: "aihercai",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  aliases: ["hercai", "ai"],
  description: "Parle avec une intelligence artificielle",
  usage: "aihercai [question]",
  credits: "David Mpongo",
  cooldown: 3
};

module.exports.run = async function({ api, event, args }) {
  const question = args.join(" ");
  const { threadID, messageID } = event;

  if (!question)
    return api.sendMessage("❌ Veuillez poser une question à l'IA.", threadID, messageID);

  try {
    const res = await axios.get(`https://ai-chat-gpt-4-lite.onrender.com/api/hercai?question=encodeURIComponent(question)`);
    const reply = res.data.reply || "❌ Aucune réponse.";

    return api.sendMessage(`🤖 Davbot:{reply}`, threadID, messageID);
  } catch (err) {
    return api.sendMessage("⚠️ Erreur lors de la connexion à l'API.", threadID, messageID);
  }
};
