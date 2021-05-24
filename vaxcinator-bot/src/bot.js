require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client({disbleEveryone: true});
const PREFIX = "."
const fetch = require("node-fetch").default;
const fs = require("fs");









chat = require("./functions")
apiCaller = require("./cmds/states")

bot.on('ready', () =>{
    
    console.log( `${bot.user.tag} has logged in.`);
    console.log( `${bot.user.tag} Ready to Message`);
  
    
});


bot.on('ready',() =>{
    console.log('ready to deploy')
})
bot.login(process.env.DISCROD_BOT_TOKEN);





