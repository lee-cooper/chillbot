const Discord = require('discord.js-commando');
const bot = new Discord.Client();

require('http').createServer().listen(3000);

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready', function(){
    console.log('ready');
});

bot.login(process.env.token);