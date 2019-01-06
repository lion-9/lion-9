const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const prefix = "#";
const adminprefix = "#";
client.on('message', message => { if (message.content.startsWith(prefix + "P")) { var mentionned = message.mentions.users.first(); var Taino; if(mentionned){ var Taino = mentionned; } else { var Taino = message.author; } const embed = new Discord.RichEmbed() .setColor("RANDOM") .setImage(`${Taino.avatarURL}`) message.channel.sendEmbed(embed); }});
 const devs = ['' , '496824761305792532' , ''];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**  ${argresult} ply .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**  ${argresult} wt .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**  ${argresult} ls .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Taino");
      message.channel.sendMessage(`**  ${argresult} st .. :white_check_mark:**`)
    }
  if (message.content.startsWith(adminprefix + 'us')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**us ..**${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'av')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**avatar ... :** `);
  }
  });




client.login(process.env.BOT_TOKEN);
