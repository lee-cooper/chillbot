const Discord = require('discord.js-commando');
const Servers = require('./admin.json');

class PauseSongCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: 'Pauses the current song'
        });
    }

    async run(message){

        let server = Servers[message.guild.id];

        if(!server){
            message.reply('The music hasn\'t started yet, frostbite.')
        }
        else if(!server.dispatcher){
            message.reply('Brrr! There\'s no music playing, icicle.')
        }
        else if(server.dispatcher){
            server.dispatcher.paused = true;
        }
    }
}

module.exports = PauseSongCommand;