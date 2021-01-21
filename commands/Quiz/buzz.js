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
    name: 'buzz',
    category: "Quiz",
    description: 'Buzz command for quizzes (only usable in The Quiz Zone)',
    usage: "!buzz",
    run: async (client, message, args, ) => {
        if (buzzed == false) {
            let person = message.member.displayName

            const path = require('path')

            const userVoiceChannel = message.member.voice.channel

            if(!userVoiceChannel) return message.channel.send('You need to be in a voice channel to use this command');

            if (userVoiceChannel.id == '778738050016477226') {

                global.connection = await userVoiceChannel.join();
                connection.play((path.join(__dirname, 'buzz.mp3')), {seek: 0, volume: 0.4})

                await message.channel.send(`${person} has buzzed first`)

                global.buzzed = true;
            } else {
                message.channel.send('You have to be in The Quiz Zone to use this command')
            }
        }
    }
}