const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('bbc')){
                if (message.author.id !== '376113456690233354') return message.reply('** This command for the bot owner. **')
               message.channel.sendMessage('> **: Reserved**')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bc')){
if (message.author.id !== '682943393831190528') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.TOKEN);
