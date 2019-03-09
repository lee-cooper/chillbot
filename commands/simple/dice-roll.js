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
        let diceRoll = Math.floor(Math.random() * (6) + 1);

        message.reply('You rolled a ' + diceRoll);
    }
}

module.exports = DiceRollCommand;