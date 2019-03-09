const Discord = require('discord.js-commando');

class DiceRollCommand extends Discord.Command{
    constructor(client){
        super(client, {
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a D6 dice'
        });
    }

    async run(message, args){
        let roll = Math.floor(Math.random() * (6) + 1);

        switch(roll)
        {
            case 1:
                message.reply('You rolled a 1');
                break;
            case 2:
                message.reply('You rolled a 2');
                break;
            case 3:
                message.reply('You rolled a 3');
                break;
            case 4:
                message.reply('You rolled a 4');
                break;
            case 5:
                message.reply('You rolled a 5');
                break;
            case 6:
                message.reply('You rolled a 6');
                break;
        }
    }
}

module.exports = DiceRollCommand;