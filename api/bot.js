const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply("👋 Привет! Нажми кнопку ниже, чтобы открыть сделку:", {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Открыть Честно',
          web_app: { url: 'https://chestno.online' }
        }
      ]]
    }
  });
});

module.exports = async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
  } catch (e) {
    console.error(e);
  }
  res.end('ok');
};
