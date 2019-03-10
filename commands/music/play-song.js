const Discord = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message, args){
    
    if(!servers[message.guild.id]){
        servers[message.guild.id] = {
            queue: []
        };
    }

    let server = servers[message.guild.id];
    server.queue.push(args);
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {
        filter: "audioonly", 
        quality: "lowestaudio"
    }));

    server.dispatcher.on('end', function(){
        
        if(server.queue[0]){
            server.queue.shift();
            Play(connection, message);
        }
        else{
            connection.disconnect();
        }
    });
}

class PlaySongCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Plays the provided song'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel){

            if(message.guild.voiceConnection){

                Play(message.guild.voiceConnection, message, args);
            } 
        }
        else{
            message.reply('I must be in a voice channel to play songs!');
        }
    }
}

module.exports = PlaySongCommand;