
const axios = require('axios');

module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai', 'assistant'],
  description: "Une commande IA avec l'API Hercai",
  usage: "ai [question]",
  credits: 'David Mpongo',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  const question = args.join(" ");
  if (!question) return api.sendMessage("❌ Veuillez entrer une question.\nExemple : /ai Bonjour !", event.threadID, event.messageID);

  try {
    const res = await axios.get(`https://openai-rest-api.vercel.app/hercai?ask=encodeURIComponent(question)   model=v3`);
    const reply = res.data.reply;

    api.sendMessage(`🤖 Davbot :{reply}`, event.threadID, event.messageID);
  } catch (err) {
    api.sendMessage("❌ Erreur lors de la requête à l'IA.", event.threadID, event.messageID);
  }
};
