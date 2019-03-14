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

    async run(message, sides){

        var diceValue = sides.split('D')[1];

        if(!isNaN(diceValue)){

            let diceRoll = Math.floor(Math.random() * diceValue) + 1;
            message.reply('With a ' + sides + ' dice, I rolled a ' + diceRoll);
        }
        else{
            message.reply('What kind of dice do I roll, snowball?');
        }
    }
}

module.exports = DiceRollCommand;