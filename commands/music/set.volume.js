const Discord = require('discord.js-commando');
const Servers = require('./admin.js');

class SetVolumeCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'volume',
            group: 'music',
            memberName: 'volume',
            description: 'Sets volume for the bot'
        });
    }

    async run(message, volume){

        let server = Servers[message.guild.id];

        server.dispatcher.setVolume(volume);
    }
}

module.exports = SetVolumeCommand;