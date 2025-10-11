
module.exports.config = {
  name: "emoji",
  version: "1.0.0",
  role: 0,
  hasPrefix: false,
  aliases: [],
  description: "Réagit automatiquement aux emojis",
  usage: "Automatique",
  credits: "David Mpongo",
  cooldown: 1,
};

module.exports.handleEvent = async function({ api, event }) {
  if (!event.body) return;
  const msg = event.body;

  const emojiReplies = {
    "😀": "Content de vous voir heureux 😄",
    "😂": "Haha 😂 ! Vous m'avez fait rire.",
    "🤣": "🤣 Incroyable !",
    "😭": "Oh non 😭 ! Qu'est-ce qu'il se passe ?",
    "🥰": "🥰 Trop mignon !",
    "😍": "😍 Je vous adore aussi !",
    "😡": "😡 Calmez-vous, je suis là.",
    "😴": "😴 Bonne nuit ou petite sieste ?",
    "🤒": "😷 Reposez-vous bien, la santé d’abord !",
    "🤕": "😢 Aïe ! Soignez-vous vite.",
    "🥺": "🥺 Ohh... je suis là si besoin.",
    "😎": "😎 Stylé comme toujours !",
    "🤑": "🤑 On parle d’argent ?",
    "🤓": "🤓 Intello mode activé !",
    "🤭": "🤭 Vous cachez quelque chose ?",
    "😏": "😏 Intéressant...",
    "👍": "👍 Bien reçu !",
    "👎": "👎 Oh... d'accord.",
    "🙏": "🙏 Merci à vous !","🤛": "🤛 Respect !",
    "🤜": "🤜 Force à vous !",
    "🙇": "🙇 Tout mon respect.",
    "🧑‍💻": "💻 En train de coder ? Continuez !",
    "🌸": "🌸 Fleurie comme votre humeur !",
    "🌞": "☀️ Belle journée à vous !",
    "✨": "✨ Brillez comme toujours.",
    "🌍": "🌍 Ensemble, on change le monde !",
    "🐱": "🐱 Miaou ~",
    "🐶": "🐶 Woof woof !",
    "🦁": "🦁 Majestueux comme un roi.",
    "🐍": "🐍 Attention au serpent !",
    "🦃": "🦃 Gobble gobble !",
    "🦅": "🦅 En plein vol !"
  };

  for (const emoji in emojiReplies) {
    if (msg.includes(emoji)) {
      return api.sendMessage(emojiReplies[emoji], event.threadID, event.messageID);
    }
  }
};

module.exports.run = async function() {};
