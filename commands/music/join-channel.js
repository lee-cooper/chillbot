const Discord = require('discord.js-commando');
const YTDL = require('ytdl-core');

// function Play(connection, message){
    
//     let server = servers[message.guild.id];
//     server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
//     server.queue.shift();
//     server.dispatcher.on('end', function(){
//         if(server.queue[0]){
//             Play(connection, message);
//         }
//         else{
//             connection.disconnect();
//         }
//     });
// }

class JoinChannelCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel){

            if(!message.guild.voiceConnection){
                
                message.member.voiceChannel.join();
            } 
        }
        else{

            message.reply('You must be in a voice channel to summon me!');
        }
    }
}

module.exports = JoinChannelCommand;