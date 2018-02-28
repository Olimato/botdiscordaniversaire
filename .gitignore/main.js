const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = ("/");
var aniversaire = 10
bot.on('ready', () => {
    bot.user.setPresence({game :{name : "C'est l'aniversiare de " + aniversaire +" personnes.",type : 0}})
    console.log("Bot Ready !"); 
});

bot.login('NDE3MjU4Mzg0MDAyMzgzODcy.DXVbcA.EBeFPng0wiyN-_dtcGMcsJ2Qmlc');

bot.on('message', message =>{
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed ()
        .setColor("#11E9CC")
        .addField("Commandes du bot","\n - /help pour afficher les commandes \n - /play pour jouer la musique joyeux anniversaire \n - /mybirthday pour ajouter sa date d'aniversaire \n - /today pour savoir la date d'aujourd'hui. \n - /creator pour savoir qui m'a crée ! \n - /lastconection! pour savoir quand a ete la dernière connection de cette personne")
        message.channel.sendEmbed(help_embed);
        //message.channel.send("Voici les commandes ! \n - /help pour afficher les commandes \n - /play pour jouer la musique joyeux anniversaire \n - /mybirthday pour ajouter sa date d'aniversaire \n - /today pour savoir la date d'aujourd'hui. \n - /creator pour savoir qui m'a crée !");      
    }
    
    if (message.content === prefix + "creator"){
        message.reply("Mon créateur est Pitivier Christophe , il est vraiment très fort !")
    }

    if (message.content === prefix +"today"){
        var jour = new Date
        var numero = new Date
        var annee = new Date
        var heure = new Date
        var mois = new Date
        var moisaff = ("")
        var jouraff = ("")

        if (jour.getDay()=== 1){
            jouraff = "Lundi"           
        }
        if (jour.getDay()=== 2){
            jouraff = "Mardi"           
        }
        if (jour.getDay()=== 3){
            jouraff = "Mercredi"           
        }
        if (jour.getDay()=== 4){
            jouraff = "Jeudi"           
        }
        if (jour.getDay()=== 5){
            jouraff = "Vendredi"           
        }
        if (jour.getDay()=== 6){
            jouraff = "Samedi"           
        }
        if (jour.getDay()=== 7){
            jouraff = "Dimanche"           
        }
        
        if (mois.getMonth()=== 1){
            moisaff = "Janvier"
        }
        if (mois.getMonth()=== 2){
            moisaff = "Fevrier"
        }
        if (mois.getMonth()=== 3){
            moisaff = "Mars"
        }
        if (mois.getMonth()=== 4){
            moisaff = "Avril"
        }
        if (mois.getMonth()=== 5){
            moisaff = "Mai"
        }
        if (mois.getMonth()=== 6){
            moisaff = "Juin"
        }
        if (mois.getMonth()=== 7){
            moisaff = "Juillet"
        }
        if (mois.getMonth()=== 8){
            moisaff = "Aôut"
        }
        if (mois.getMonth()=== 9){
            moisaff = "Septembre"
        }
        if (mois.getMonth()=== 10){
            moisaff = "Octobre"
        }
        if (mois.getMonth()=== 11){
            moisaff = "Novembre"
        }
        if (mois.getMonth()=== 12){
            moisaff = "Decembre"
        }


 

        message.reply("Nous sommes le " + " " +jouraff + " " + numero.getDate() + " " +moisaff+" "+ annee.getFullYear() +" et il est " +heure.getHours() + " : " + heure.getMinutes() + " .")
    }


    if (message.content === prefix+ "mybirthday"){
        message.reply("Merci d'ecrire la date en batton comme cela jj/mm/aaaa et mettez devant votre reponse /reply")
    }

    if (message.content === prefix +"reply"){
    }

    if (message.content === prefix +"lastconection!"){
        var Nom = ("")

        Nom = message.content
        Nom.substr(from,14)
        Discord.UserConnection.

    }














    /* if (message.content === prefix +"play"){
        
       let VoiceChannel = message.guild.channels
        .filter(function(channel){return channel.type === 'voice'})
        .first()
        VoiceChannel
        .join ()
        .then (function (connection){
            connection.playFile('‪U:\BotDiscord\Chanson Joyeux Anniversaire.mp3')
        })
    } */


});