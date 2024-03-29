const Discord = require('discord.js-commando');
const Global = require('./admin.json');

class UnpauseSongCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'unpause',
            group: 'music',
            memberName: 'unpause',
            description: 'Unpauses the current song'
        });
    }

    async run(message){

        let server = Global.servers[message.guild.id];

        if(!server){
            message.reply('The music hasn\'t started yet, snowflake.')
        }
        else if(!server.dispatcher){
            message.reply('Brrr! There\'s no music playing, snowboots.')
        }
        else if(server.dispatcher){
            server.dispatcher.paused = false;
        }
    }
}

module.exports = UnpauseSongCommand;