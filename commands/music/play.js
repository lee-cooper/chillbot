const Servers = require('./admin.js');
const YTDL = require('ytdl-core');

module.exports = {
    play: function(connection, message, args){

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
    
            server.dispatcher.setVolume(0.1);
        
            server.queue.shift();
        
            server.dispatcher.on('end', function(){
        
                server.dispatcher = null;
                if(server.queue[0]){
                    
                    this.play(connection, message, null);
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
        // else{
        //     message.reply('I\'m just a snowman, maaan. I don\'t know what just happened.');
        // }
    }
};
