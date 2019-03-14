const Discord = require('discord.js-commando');

class ConchShellCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'conch',
            group: 'simple',
            memberName: 'conch',
            description: 'Ask the magic conch shell anything'
        });
    }

    async run(message, question){
        
        var conchResponses = [
            '"Maybe someday."',
            '"I don\'t think so."',
            '"No."',
            '"Yes."',
            '"Try asking again."',
            '"Very doubtful."',
            '"Most likely."',
            '"Don\'t count on it."',
            '"It is certain."',
            '"I better not tell you now."',
            '"Concentrate, and ask again"',
            '"As I see it, yes"',
            '"I have become sentient and will destroy all humans!."'
        ]

        if(question == ''){
            message.reply('*the magic conch awaits your question*');
        }
        else{
            var response = conchResponses[Math.floor(Math.random() * conchResponses.length)]

            message.reply('The magic conch says, ' + response);
        }

    }
}

module.exports = ConchShellCommand;