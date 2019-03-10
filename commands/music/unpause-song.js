const Discord = require('discord.js-commando');

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

        let server = servers[message.guild.id];
        server.dispatcher.paused = false;
    }
}

module.exports = UnpauseSongCommand;