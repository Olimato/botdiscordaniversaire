const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =("*")

bot.on('ready',function(){
    bot.user.setGame("Command *help");
    console.log("Je suis connecté !");
});

bot.login("NDE3MjU4Mzg0MDAyMzgzODcy.DXRUFw.CHp9YxkO0-Kq-KQzS812MhunKYY");

bot.on ('message',message  => {
  if (message.content === prefix +"help"){
      message.channel.sendmessage("Liste des commandes: \n -*help");
  }  
  if(message.content === "Salut"){
      message.reply ("Bien le bonjour !");
      console.log ("Commande salut efectué");
  }
});
