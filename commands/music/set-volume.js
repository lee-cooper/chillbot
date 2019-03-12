const Discord = require('discord.js-commando');
const Servers = require('./admin.js');

class SetVolumeCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'volume',
            group: 'music',
            memberName: 'volume',
            description: 'Sets volume for the bot from 0.0 - 2.0'
        });
    }

    async run(message, volume){

        let server = Servers[message.guild.id];

        if(volumeIsValid(volume)){
            message.reply('Volume must be a number between 0 and 2');
        }
        else if(volume === ''){
            message.reply('The current volume is: ' + server.dispatcher.volume);
        }
        else{
            server.dispatcher.setVolume(volume);
        }
    }
}

function volumeIsValid(volume){
    return isNaN(volume) || volume < 0.0 || volume > 2.0;
}

module.exports = SetVolumeCommand;