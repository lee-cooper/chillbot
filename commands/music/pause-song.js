const Discord = require('discord.js-commando');
const Servers = require('./admin.js');

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
        server.dispatcher.paused = true;
    }
}

module.exports = PauseSongCommand;