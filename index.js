const Discord = require('discord.js-commando');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content.toLowerCase() == 'hello'){
        message.reply('Hello, how are you?');
    }
});

bot.on('ready', function(){
    console.log('ready');
});

bot.login(auth.token);