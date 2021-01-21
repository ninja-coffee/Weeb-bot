const {
    getMember,
    formatDate
} = require("../../Userinfo.js");
const {
    MessageEmbed, Guild
} = require('discord.js');
const {
    stripIndents
} = require("common-tags");
module.exports = {
    name: 'dc',
    category: "Quiz",
    description: 'Disconnect the bot the from voice channel',
    usage: "!dc",
    run: async (client, message, args) => {
        connection.disconnect();
    }
}