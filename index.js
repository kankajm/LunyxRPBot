const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', async (message) => {
    if (!message.author.bot) {
        message.delete();
        message.channel.send(message.content);
    }
});

client.login(process.env.DISCORD_TOKEN);