const Servers = require('./admin.js');
const YTDL = require('ytdl-core');

module.exports = {
    play: function(connection, message, songArguments){

        if(!Servers[message.guild.id]){
            Servers[message.guild.id] = {
                queue: []
            };
        }
    
        let server = Servers[message.guild.id];
    
        if(isNotNullOrEmpty(songArguments)){
            server.queue.push(songArguments);
            message.reply('Song added to queue');
        }
    
        if(!server.dispatcher && isNotNullOrEmpty(songArguments)){
            server.dispatcher = connection.playStream(YTDL(server.queue[0], {
                filter: "audioonly", 
                quality: "lowestaudio"
            }));
    
            server.dispatcher.setVolume(0.1);
        
            server.queue.shift();
        
            server.dispatcher.on('end', function(){
        
                server.dispatcher = null;
                if(server.queue[0]){
                    
                    this.play(connection, message, null);
                }
            });
        }
        else if(server.dispatcher && songArguments == ''){
            message.reply('Chill maaaaan, the music is already on');
        }
        else if(server.dispatcher && songArguments == '' && server.queue[0]){
            message.reply('Brrr! There\'s no ice cubes in the music queue!');
        }
        else if(server.dispatcher && isNotNullOrEmpty(songArguments)){
            
        }
        // else{
        //     message.reply('I\'m just a snowman, maaan. I don\'t know what just happened.');
        // }
    }
};

function isNotNullOrEmpty(songArguments){
    return songArguments != null && songArguments != '';
}
