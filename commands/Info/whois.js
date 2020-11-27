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
    name: "whois",
    category: "Info",
    description: "Returns information on a given user",
    usage: "!help [@User's name] ",
    run: async (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member Variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r)
            .join(", ") || "none";

        //User Variables
        const created = formatDate(member.user.createdAt);

        const embed = new MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)

            .addField('Member information', stripIndents`**> Display name:** ${member.displayName}
            **> Joined at:** ${joined}
            **> Roles:** ${roles}`, true)

            .addField('User information', stripIndents`**> ID:** ${member.user.id}
            **> Username** ${member.user.username}
            **> Discord Tag** ${member.user.tag}
            **> Created at** ${created}`)

            .setTimestamp()

        message.channel.send(embed);

    }
}