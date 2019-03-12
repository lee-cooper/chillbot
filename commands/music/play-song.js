const Discord = require('discord.js-commando');
const Servers = require('./admin.js');
const YTDL = require('ytdl-core');

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

                play(message.guild.voiceConnection, message, args);
            } 
            else {
                message.reply('I must be in a voice channel to play songs!');
            }
        }
        else{
            message.reply('You must be in a voice channel to play songs!');
        }
    }
}

function play(connection, message, args){

    if(!Servers[message.guild.id]){
        Servers[message.guild.id] = {
            queue: []
        };
    }

    let server = Servers[message.guild.id];

    if(args != null){
        server.queue.push(args);
    }

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {
        filter: "audioonly", 
        quality: "lowestaudio"
    }));

    server.queue.shift();

    server.dispatcher.on('end', function(){
        
        if(server.queue[0]){
            
            play(connection, message, null);
        }
    });
}

module.exports = PlaySongCommand;