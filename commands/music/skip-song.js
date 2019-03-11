const Discord = require('discord.js-commando');
const Servers = require('./admin.js');

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

        let server = Servers[message.guild.id];
        
        if(server.dispatcher){
            server.dispatcher.end();
        }
    }
}

module.exports = SkipSongCommand;