const Discord = require('discord.js-commando');
const Global = require('./admin.json');

class SkipSongCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: 'Skips the current song'
        });
    }

    async run(message){

        let server = Global.servers[message.guild.id];
        
        if(!server){
            message.reply('The music hasn\'t started yet, carrot.')
        }
        else if(!server.dispatcher){
            message.reply('Brrr! There\'s no music playing, icicle.')
        }
        else if(server.dispatcher){
            server.dispatcher.end();
        }
    }
}

module.exports = SkipSongCommand;