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

        if(!Servers[message.guild.id]){
            Servers[message.guild.id] = {
                queue: []
            };
        }

        if(!message.member.voiceConnection){

            if(message.guild.voiceConnection){

                play(message.guild.voiceConnection, message, args);
            } 
        }
        else{
            message.reply('I must be in a voice channel to play songs!');
        }
    }
}

function play(connection, message, args){

    let server = Servers[message.guild.id];

    console.log(Servers);

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
        else{
            connection.disconnect();
        }
    });
}

module.exports = PlaySongCommand;