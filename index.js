const Discord = require('discord.js'); 
const bot = new Discord.Client();

var prefix = "$"
bot.on('message', (message) => {

    if(message.content.startsWith(prefix + 'trigger')) {
        message.reply(':warning: G A Y R R I G E D :warning:');
    }

});

bot.on('message', (message) => {
    
    if(message.content == 'doom') {
        message.reply('he gay for females :joy:');
        }
    
    });

    bot.on('message', (message) => {
        
        if(message.content == 'henry') {
            message.channel.sendMessage('hm');
            }
        
        });

bot.on('message', (message) => {
        
    if(message.content == 'jexel') {
        message.reply('he meme :joy:');
            }
        
        });

bot.on('message', (message) => {

    if(message.content == 'cand') {
        message.reply('lovely person ^o^');
           }

        });
        
bot.on('message', (message) => {
            
        if(message.content == 'vex') {
            message.reply('who me');
            }
            
         });

         bot.on('message', (message) => {

            if(message.content == 'ellis') {
                message.reply('a chill guy');
            }

        });

        bot.on('message', (message) => {
            
                if(message.content.startsWith(prefix + 'WAKEup')) {
                    message.channel.sendMessage('WAKE UP');
                }
            });

            bot.on('message', (message) => {
                
                if(message.content == 'loki') {
                    message.channel.sendMessage('is gay');
                    }
                
                });

                bot.on('message', (message) => {
                    
                    if(message.content == 'coco') {
                        message.channel.sendMessage('awe');
                        }
                    
                    });

                    bot.on('message', (message) => {
                        
                        if(message.content == 'eudalca') {
                            message.channel.sendMessage('wants fully automated luxury gay space communism');
                            }
                        
                        });
