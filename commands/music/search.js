const Discord = require('discord.js-commando');
const YTSearch = require('yt-search');
const play = require('./play.js');

class SearchCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'search',
            group: 'music',
            memberName: 'search',
            description: 'Searches for a song to play'
        });
    }

    async run(message, args){

        console.log(args);

        YTSearch(args, function(err, r){
            if ( err ) throw err;

            let video = r.videos[0];
    
            console.log(video);
    
            if(message.member.voiceChannel){

                if(message.guild.voiceConnection){
    
                    play.play(message.guild.voiceConnection, message, video.url);
                } 
                else {
                    message.reply('I must be in a voice channel to play songs!');
                }
            }
            else{
                message.reply('You must be in a voice channel to play songs!');
            }
        })
    }
}

module.exports = SearchCommand;