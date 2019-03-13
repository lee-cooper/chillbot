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

        if(message.member.voiceChannel){

            if(message.guild.voiceConnection){

                if(!Servers[message.guild.id]){
                    Servers[message.guild.id] = {
                        queue: []
                    };
                }
        
                let server = Servers[message.guild.id];
                
                if(args != null && args != undefined && args != ''){
                    server.queue.push(args);
                }
                else{
                    message.reply('Cannot add song, no URL was provided');
                }
            } 
            else {
                message.reply('You must be in an igloo with me to add songs!');
            }
        }
        else{
            message.reply('You must be in an igloo with me to add songs!');
        }
    }
}

module.exports = AddSongCommand;