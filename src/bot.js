import Telegraf from 'telegraf';
import { logger } from './utils/logger';

const { TELEGRAM_TOKEN } = process.env;

const bot = new Telegraf(TELEGRAM_TOKEN);

bot.start(ctx => ctx.reply('Welcome!'));
bot.help(ctx => ctx.reply('Send me a sticker'));
bot.on('sticker', ctx => ctx.reply('👍'));
bot.hears('hi', ctx => ctx.reply('Hey there'));

logger.info('bot running!');

export default bot;
