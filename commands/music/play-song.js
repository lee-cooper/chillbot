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

    if(args != null && args != undefined && args != ''){
        server.queue.push(args);
        message.reply('Song added to queue');
    }

    if(!server.dispatcher && args != ''){
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {
            filter: "audioonly", 
            quality: "lowestaudio"
        }));

        server.dispatcher.setVolume(0.5);
    
        server.queue.shift();
    
        server.dispatcher.on('end', function(){
    
            server.dispatcher = null;
            if(server.queue[0]){
                
                play(connection, message, null);
            }
        });
    }
    else if(server.dispatcher && args == ''){
        message.reply('Chill maaaaan, the music is already on');
    }
    else if(server.dispatcher && args == '' && server.queue[0]){
        message.reply('Brrr! There\'s no ice cubes in the music queue!');
    }
    else if(server.dispatcher && args != ''){
        
    }
    else{
        message.reply('I\'m just a snowman, maaan. I don\'t know what just happened.');
    }
}

module.exports = PlaySongCommand;