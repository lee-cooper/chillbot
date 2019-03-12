const Discord = require('discord.js-commando');
const Servers = require('./admin.js');

class AddSongCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'add',
            group: 'music',
            memberName: 'add',
            description: 'Adds a song to the queue'
        });
    }

    async run(message, args){

        if(!Servers[message.guild.id]){
            Servers[message.guild.id] = {
                queue: []
            };
        }

        let server = Servers[message.guild.id];
        
        server.queue.push(args);
    }
}

module.exports = AddSongCommand;