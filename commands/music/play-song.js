const Discord = require('discord.js-commando');
const play = require('./play.js');

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

                play.play(message.guild.voiceConnection, message, args);
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



module.exports = PlaySongCommand;