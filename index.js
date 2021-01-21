const Discord = require('discord.js');
const client = new Discord.Client();

const {
    prefix,
    token,
    bot_info
} = require('./config.json');

const fs = require('fs');

global.buzzed = false;

client.commands = new Discord.Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
})

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('This bot is online!');

    client.user.setActivity('with Max')
});

client.on('guildMemberAdd', member => {
    const channelId = '668624493039714317'
    const channel = member.guild.channels.cache.get(channelId);

    const message = `Hello there! <@${member.id}>`;
    channel.send(message);

    member.roles.add('731258629868486699');
    member.roles.add('769557789172826122');
    member.roles.add('769558980989026315');
    member.roles.add('769560277510389790');

});

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    try {
        let command = client.commands.get(cmd);

        if (command) {
            command.run(client, message, args, );
        }
    } catch (error) {
        console.log("That command is not recognised")
    }


})

client.login(token);