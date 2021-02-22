module.exports = {
    name: 'clear',
    category: "Moderation",
    description: 'Clears a given number of messages (max:100)',
    usage: "!clear <number of messages to clear>",
    run: async (clientInformation, message, args) => {
        if (message.deletable) {
            message.delete();
        }

        // Member doesn't have permission
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You don't have permission to delete messages").then(m => m.delete({
                timeout: 5000
            }));
        }

        // Check is args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("You need to enter a valid number of messages to delete...").then(m => m.delete({
                timeout: 5000
            }));
        }

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`${deleted.size} message(s) have been deleted.`))
            .then(m => m.delete({ timeout: 5000 }));
    }
}
