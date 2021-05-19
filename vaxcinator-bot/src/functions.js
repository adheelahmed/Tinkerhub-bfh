

const { Client, Message, GuildMember, MessageMentions, User } = require('discord.js');
const client = new Client();
const PREFIX = ".";
const fetch = require("node-fetch").default;
const { chatBot } = require('reconlx');
const botsettings = require("./botsettings.json")
const prefix = ".";

   
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


   

client.login(process.env.DISCROD_BOT_TOKEN);
