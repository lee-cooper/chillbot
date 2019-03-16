const Discord = require('discord.js-commando');
const Servers = require('./admin.js');

class QueueDisplayCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'queue',
            group: 'music',
            memberName: 'queue',
            description: 'Shows all songs in the queue'
        });
    }

    async run(message){

        let server = Servers[message.guild.id];

        var songQueue = '';
        
        for(let i = 0; i < server.queue.length; i++){
            songQueue += '\n' + server.queue[i] 
        }

        if(songQueue == ''){
            message.reply('There are no songs in the playlist, igloo');
        }
        
        // TODO: fix to display urls rather than title names
        message.reply('Here\'s the current playlist, ice-cube' + songQueue); 
    }
}

module.exports = QueueDisplayCommand;