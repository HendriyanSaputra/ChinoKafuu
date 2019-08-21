const Command = require("../../structures/command")
module.exports = class EmojiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'emoji',
            category: 'util',
            aliases: [],
            UserPermission: null,
            ClientPermission: null,
            OnlyDevs: false,
            hidden: false,
        })
    } 
    execute({message, args, server}, t) {
        
        if (!args[0]) return message.chinoReply('error', t('commands:emoji.args-null'))
	    let emoji = Discord.Util.parseEmoji(args[0]) || message.guild.emojis.find(e => e.name === args.join(' '))
	    message.channel.send({files: [`https://cdn.discordapp.com/emojis/${emoji.id}.png`]})
    }
}       