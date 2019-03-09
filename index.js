const Discord = require('discord.js');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.login(auth.token);

bot.on('message', function(message){
    if(message.content.toLowerCase() == 'Hello'){
        message.reply('Hello, how are you?');
    }
});

bot.on('ready', function(){
    console.log('ready');
});