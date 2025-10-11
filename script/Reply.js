
module.exports.config = {
  name: "autoreply",
  version: "1.4.0",
  role: 0,
  hasPrefix: false,
  aliases: [],
  description: "Répond automatiquement à plus de messages avec style",
  usage: "Automatique",
  credits: "David Mpongo",
  cooldown: 1,
};

module.exports.handleEvent = async function({ api, event }) {
  if (!event.body) return;
  const msg = event.body.toLowerCase();
  const hour = new Date().getHours();

  let greeting = "👋 Salut";
  if (hour >= 5 && hour < 12) greeting = "🌅 Bonjour";
  else if (hour >= 12 && hour < 18) greeting = "🌞 Bon après-midi";
  else greeting = "🌙 Bonsoir";

  const fixedReplies = {
    "salut": `greeting à vous ¡,
    "bonjour": `{greeting} ! Je suis Davbot.`,
    "bonsoir": "🌙 Bonsoir à vous.",
    "yo": "✌️ Yo !",
    "cv": "✅ Je vais bien, et vous ?",
    "comment tu vas": "😊 Je vais très bien, merci !",
    "merci": "🙏 Avec plaisir !",
    "je t'aime": "❤️ Moi aussi je vous aime beaucoup !",
    "tu es qui": "🤖 Je suis *Davbot*, créé par David Mpongo.",
    "ta créé qui": "👨‍💻 Mon créateur est David Mpongo.","t'es qui": "🤖 Davbot, à votre service.",
    "ta été créé par qui": "👑 David Mpongo bien sûr !",
    "bonjour davbot": `${greeting} 👋 Je suis là.`,
    "je suis fatigué": "🛌 Reposez-vous bien, votre santé passe avant tout.",
    "tu dors": "😴 Les IA ne dorment jamais.",
    "tu m’aimes": "❤️ Bien sûr que oui !",
    "j’ai faim": "🍽️ Vous devriez manger quelque chose !",
    "je suis triste": "💙 Courage. Je suis là si vous avez besoin de parler.",
  };

  const randomReplies = {
    "ok": ["👌 D'accord.", "👍 Reçu !", "🆗 C’est noté."],
    "cool": ["😎 Trop stylé !", "🔥 Carrément cool.", "✅ On adore ça !"],
    "super": ["💯 Génial !", "🚀 Au top !", "🔝 Parfait !"],
    "lol": ["😂", "🤣", "😄 Haha bien vu !"],
    "mdr": ["😆 MDR !", "😂 Trop drôle !", "😁 Excellent !"],
    "haha": ["😄 Haha !", "😆", "🤣"],
    "oui": ["👍 Parfait.", "👌 Très bien !", "✅ C’est ça."],
    "non": ["🙁 D’accord...", "😕 Dommage.", "🔇 Compris."]
  };

  for (const key in fixedReplies) {
    if (msg.includes(key)) {
      return api.sendMessage(fixedReplies[key], event.threadID, event.messageID);
    }
  }

  for (const key in randomReplies) {
    if (msg.includes(key)) {
      const replies = randomReplies[key];
      const random = replies[Math.floor(Math.random() * replies.length)];return api.sendMessage(random, event.threadID, event.messageID);
    }
  }
};

module.exports.run = async function() {};
