const {
    getMember,
    formatDate
} = require("../../Userinfo.js");
const {
    MessageEmbed
} = require('discord.js');
const {
    stripIndents
} = require("common-tags");
module.exports = {
    name: 'reset',
    category: "Quiz",
    description: 'Resets the buzz command',
    usage: "!reset",
    run: async (client, message, args, buzzed) => {
        //801618217856401428
        if (message.member.roles.cache.has('801633275386658859')) {
                global.buzzed = false;

                message.channel.send('Buzzers have been reset')
        } else {
            message.channel.send('You do not have permission to use this command');
        }
    }
}