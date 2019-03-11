const Discord = require('discord.js-commando');
const Servers = require('./admin.js');

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

        let server = Servers[message.guild.id];
        server.dispatcher.paused = false;
    }
}

module.exports = UnpauseSongCommand;