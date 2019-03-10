const Discord = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message){
    
    let server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on('end', function(){
        if(server.queue[0]){
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

                if(!servers[message.guild.id]){
                    servers[message.guild.id] = {
                        queue: []
                    };
                }

                let server = servers[message.guild.id];
                server.queue.push(args);

                Play(message.guild.voiceConnection, message);
            } 
        }
        else{
            message.reply('I must be in a voice channel to play songs!');
        }
    }
}

module.exports = PlaySongCommand;