const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require(./settings.json);

client.on('message', (message) => {

    // Commands

    if (message.content.startsWith(settings.prefix + 'trigger')) {
      message.reply(':warning: G A Y R R I G E D :warning:');
    }

    if (message.content.startsWith(settings.prefix + 'WAKEup')) {
      message.channel.send('WAKE UP');
    }

    // Automatic Text Detection

    if (message.content == 'doom') {
      message.reply('he gay for females :joy:');
    }

    if (message.content == 'henry') {
      message.channel.send('hm');
    }

    if (message.content == 'jexel') {
      message.reply('he meme :joy:');
    }

    if (message.content == 'cand') {
      message.reply('lovely person ^o^');
    }

    if (message.content == 'vex') {
      message.reply('who me');
    }

    if (message.content == 'ellis') {
      message.reply('a chill guy');
    }

    if (message.content == 'loki') {
      message.channel.send('is gay');
    }

    if (message.content == 'coco') {
      message.channel.send('awe');
    }

    if (message.content == 'eudalca') {
      message.channel.send('wants fully automated luxury gay space communism');
    }

});
