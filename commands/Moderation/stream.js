module.exports = {
    name: 'stream',
    category: "Moderation",
    description: 'Adds stream role then removes after a given time',
    usage: "!stream <@User's name> <Time to give role for, e.g. 10m>",
    run: async (client, message, args) => {

        if (message.member.roles.cache.has('769560426723147808')) {
            const ms = require('ms');
            let person = message.guild.member(message.mentions.users.first() || message.guild.users.get(args[1]))
            if (!person) return message.reply("Couldn't find that member");

            let streamrole = message.guild.roles.cache.find(role => role.name === "Stream Team")

            if (!streamrole) return message.reply("Couldn't find the stream role");

            let time = args[1];

            if (!time) {
                return message.reply("You didn't specify a time!");
            }

            person.roles.add(streamrole.id);

            message.channel.send(`@${person.user.tag} has had the stream role added for ${ms(ms(time), { long: true }) }`);

            setTimeout(function () {
                person.roles.remove(streamrole.id);
            }, ms(time));
        } else {
            message.channel.send('You do not have permission to use this command');
        }
    }
}