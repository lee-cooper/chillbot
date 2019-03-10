const Discord = require('discord.js-commando');

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

        let server = servers[message.guild.id];
        server.dispatcher.paused = true;
    }
}

module.exports = PauseSongCommand;