require('dotenv').config();


const PREFIX = ".";
const fetch = require("node-fetch").default;
const fs = require("fs");
const { Client, Message, GuildMember, MessageMentions, User } = require('discord.js');
const { chatBot } = require('reconlx');
const botsettings = require("./botsettings.json");
const prefix = botsettings.prefix;
const api = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
const https = require("https");
const { args, storeOptionsAsProperties } = require("commander");
const { post } = require("snekfetch");
const client = new Client();
const bot = client;
const Discord = require("discord.js");






bot.on('ready', () =>{
    
    console.log( `${bot.user.tag} has logged in.`);
    console.log( `${bot.user.tag} Ready to Message`);
  
    
});


bot.on('ready',() =>{
    console.log('ready to deploy')
})


client.on('ready', () =>{

    client.channels.cache.get('843877941108277308').send('\nHello There Iam Appukutan :wave: :zany_face: \n\n Im here to help you get Vaccinated!\n\nPlease Select Your State. Details on How to Select Are Given Below.');
    
  
    client.channels.cache.get('843877941108277308').send("\n1: 'Andhra Pradesh'\n2: 'Arunachal Pradesh'\n3: 'Assam'\n4: 'Bihar'\n5: 'Chandigarh'\n6: 'Chhattisgarh'\n7: 'Dadra and Nagar Haveli'\n8: 'Daman and Diu'\n9: 'Delhi'\n10: 'Goa'\n11: 'Gujarat'\n12: 'Haryana'\n13: 'Himachal Pradesh'\n14: 'Jammu and Kashmir'\n15: 'Jharkhand'\n16: 'Karnataka'\n17: 'Kerala'\n18: 'Ladakh'\n19: 'Lakshadweep'\n20: 'Madhya Pradesh'\n21: 'Maharashtra'\n22: 'Manipur'\n23: 'Meghalaya'\n24: 'Mizoram'\n25: 'Nagaland'\n26: 'Odisha'\n27: 'Puducherry'\n28: 'Punjab'\n29: 'Rajasthan'\n30: 'Sikkim'\n31: 'Tamil Nadu'\n32: 'Telangana'\n33: 'Tripura'\n34: 'Uttar Pradesh'\n35: 'Uttarakhand'\n36: 'West Bengal'\n\nTo Select Your State Enter the no. Next to it.\n(for eg:To Select Kerala Just Type in '17') ");
   
});


client.on('message',(message) =>
    { 

            console.log(message.content);

       
        if(message.channel.id ==="843877941108277308"){
           
         


             https.get(api, r => {

                
                    let body = r.body;
                    let id = message.content;
                    let store = body
                    store.states.type;                                
                    if(message.author.bot) return;
                    let valueGreater = message.content;
                    let valueSmaller = message.content;
                    if (valueSmaller < 1) return message.reply("This Value Dosen't Exist");
                    if(valueGreater > 36 ) return message.channel.send("This Value Dosen't Exist");
                    console.log(store.states[message.content].state_id);
                    const a = store.states[message.content].state_name;
                    const b = store.states[message.content].state_id;
                    message.reply(`\nYou Have Selected : ${a}`);
                    
                    
                    });  
                    
                    
                    
                            
    }
        
});


/*client.on('message',(message) =>
    { 

            console.log(message.content);

       
        if(message.channel.id ==="843877941108277308"){
           
           
                snekfetch.get(api).then(r => {
                
                    let body = r.body;
                    let id = message.content;
                    let store = body
                    store.states.type;
               
                    
                    if(message.author.bot) return;
                    console.log(store.states[message.content].state_id);
                    const a = store.states[message.content].state_name;
                    message.reply(`\nYou Have Selected : ${a} `);
                  
                });
            
            
         
    }

});
*/
client.on('ready', () =>{
    
    console.log( `${client.user.tag} has logged in.`);
    console.log( `${client.user.tag} Ready to Message`);
   
    client.channels.cache.get('843434093482868769').send('\nThe Second Is Running Now on General channel');
});
client.on('message',(message) =>
{ 

console.log(`[${message.author.tag}]: ${message.content} `);

var Array=["\nHello There....And be Safe From Covid","Ahoy There!","Hi There!" ,"Helooooo!" ,"Hi There!,Hope you Are fine" ,"hoooiii...! Good to See you!" , ];
var randomWord = Array[Math.floor(Math.random()* Array.length)];
Arr=["If You have meant 'Hello' :face_with_monocle:  ......Then Hi :sweat_smile: ","'lo'???? Whats lo? :thinking: ......Thinking on it......... :rofl: Hi there!...","If You have meant 'Hello' :face_with_monocle:  ......Then Hi :laughing:  ","Assuming What you said as 'Hello'....Hi:relaxed: " ];
var loWord = Arr[Math.floor(Math.random()* Arr.length)];
A=["What I Can Help You With?...Here are the things im able to do\n-I can do basic chatting\n-I can register you for Cowin (testing)\n-I can check regularly for Covid Vaccine Availability(testing)\n-I can play music from Youtube\n  -you can either search -play 'songname' or -play 'Link' (Testing)\n-I can moderate these channels also give automated roles \n-Vaccinator Mode Command(.Vaccinator Mode) "]
var help = A;

if(message.content.toLowerCase() == ".hello" )
{
message.reply(randomWord);
return 0;
}

if(message.content.toLowerCase() == ".hi" )
{
message.reply(randomWord);
return 0;
}

if(message.content.toLowerCase() == ".hlo" )
{
message.reply(randomWord);
return 0;
}

if(message.content.toLowerCase() == ".lo" )
{
message.reply(loWord);
return 0;
}

if(message.content.toLowerCase() == ".hai" )
{
message.reply(randomWord);
return 0;
}

if(message.content.toLowerCase() == ".kooi" )
{
message.reply(randomWord);
return 0;
}

if(message.content.toLowerCase() == ".who created you" )
{  
    message.reply("\nI Was Created By Team Appukuttan\nThey work for me:laughing: ");
 return 0;
   
}
if(message.content.toLowerCase() == ".dwho made you" )
{  
    message.reply("\nI Was Created By Team Appukuttan\nThey work for me:laughing: ");
 return 0;
   
}


if(message.content.toLowerCase() == ".what is your name" )
{  
    message.reply("\nIm Appukuttan.....Call Me Appu");
 return 0;
   
}


if(message.content.toLowerCase() == ".whats your name" )
{  
    message.reply("\nIm Appukuttan.....Call Me Appu");
 return 0;
   
}
if(message.content.toLowerCase() == ".what's your name" )
{  
    message.reply("\nIm Appukuttan.....Call Me Appu");
 return 0;
   
}
if(message.content.toLowerCase() == ".your name" )
{  
    message.reply("\nThe Name is Appukuttan.....People Call Me Appu");
 return 0;
   
}

if(message.content.toLowerCase() == ".who are you" )
{  
    message.reply("\nIm Appukuttan.....simple dress idunna purushanmaare penkuttikalk ishtamalle....dont they like???:sneezing_face: ");
 return 0;
   
}
if(message.content.toLowerCase() == ".appu" )
{  
    message.reply("\nyes.....???:eyes: ");
 return 0;
   
}

if(message.content.toLowerCase() == ".who is appu" )
{  
    message.reply("\nI Go By That Nickname!:hugging:  ");
 return 0;
   
}

if(message.content.toLowerCase() == ".vaccinator mode" )
{  
    message.reply("\nVaccinator Mode Online! :syringe: \n\n\nI Can help you find Place Near you to get vaccinated..\n\nEnter Your Pincode by firstly initializing by typing pincode \n\nEnter Your Pincode");

   
  
   return 0;

}


if(message.content == ".help")

{
    message.reply(help)
    return 0;
}




if(message.author.bot){
    return 0;
}
else { 
    if(message.channel.id ==="843434093482868769"){
     
           if(message.content.startsWith(prefix)){

          
            console.log(message.content);
            

        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
    .then(response => response.json())
    .then(data =>{
        message.channel.send(data.response)
    })    

    
}
    }

}
});





bot.login(process.env.DISCROD_BOT_TOKEN);





