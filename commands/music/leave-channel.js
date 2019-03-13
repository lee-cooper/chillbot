const Discord = require('discord.js-commando');

class LeaveChannelCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel'
        });
    }

    async run(message){
        
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        }
        else{
            message.reply('You can\'t remove the snowman from the igloo if he was never in there!');
        }
    }
}

module.exports = LeaveChannelCommand;