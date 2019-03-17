const Servers = require('./admin.json');
const YTDL = require('ytdl-core');

module.exports = {
    play: function(connection, message, songArguments){

        if(!Servers.servers[message.guild.id]){
            Servers.servers[message.guild.id] = {
                queue: []
            };
        }

        let server = Servers.servers[message.guild.id];
    
        if(isNotNullOrEmpty(songArguments)){
            server.queue.push(songArguments);
            message.reply('Song added to queue');
        }
    
        if(!server.dispatcher && songArguments != ''){
            server.dispatcher = connection.playStream(YTDL(server.queue[0], {
                filter: "audioonly", 
                quality: "lowestaudio"
            }));
    
            server.dispatcher.setVolume(Servers.volume);
        
            server.queue.shift();
        
            server.dispatcher.on('end', function(){
        
                server.dispatcher = null;
                if(server.queue[0]){
                    
                    module.exports.play(connection, message, null);
                }
            });
        }
        else if(server.dispatcher && songArguments == ''){
            message.reply('Chill maaaaan, the music is already on');
        }
        else if(server.dispatcher && songArguments == '' && server.queue[0]){
            message.reply('Brrr! There\'s no ice cubes in the music queue!');
        }
        else{
            message.reply('I\'m just a snowman, maaan. I don\'t know what just happened. Talk to the boss.');
        }
    }
};

function isNotNullOrEmpty(songArguments){
    return songArguments != null && songArguments != '';
}
