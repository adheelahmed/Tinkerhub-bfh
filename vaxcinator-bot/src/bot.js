require('dotenv').config();

const { Client, Message } = require('discord.js');
const client = new Client();
const PREFIX = "&"


client.on('ready', () =>{
    console.log( `${client.user.tag} has logged in.`);
});

var Arr=["hello","hi","lo"];




client.on('message',(message) =>
{
    console.log(`[${message.author.tag}]: ${message.content} `);

    var Array=["\nHello There....And be Safe From Covid","Ahoy There!","Hi There!" ,"Helooooo!" ,"Hi There!,Hope you Are fine" ,"hoooiii...! Good to See you!" , ];
    var randomWord = Array[Math.floor(Math.random()* Array.length)];
    Arr=["If You have meant 'Hello' :face_with_monocle:  ......Then Hi :sweat_smile: ","'lo'???? Whats lo? :thinking: ......Thinking on it......... :rofl: Hi there!...","If You have meant 'Hello' :face_with_monocle:  ......Then Hi :laughing:  ","Assuming What you said as 'Hello'....Hi:relaxed: " ];
    var loWord = Arr[Math.floor(Math.random()* Arr.length)];
    A=["What I Can Help You With?...Here are the things im able to do\n-I can do basic chatting\n-I can register you for Cowin (testing)\n-I can check regularly for Covid Vaccine Availability(testing)\n-I can play music from Youtube\n  -you can either search -play 'songname' or -play 'Link' (Testing)\n-I can moderate these channels also give automated roles "]
    var help = A;



    if(message.content == "hello" )
    {
    message.reply(randomWord);
    }

    if(message.content == "Hello" )
    {
    message.reply(randomWord);
    }

    if(message.content == "hi" )
    {
    message.reply(randomWord);
    }

    if(message.content == "Hi" )
    {
    message.reply(randomWord);
    }

    if(message.content == "hlo" )
    {
    message.reply(randomWord);
    }

    if(message.content == "Hlo" )
    {  
    message.reply(randomWord);
    }

    if(message.content == "lo" )
    {
    message.reply(loWord);
    }

    if(message.content == "Lo" )
    {
    message.reply(loWord);
    }

    if(message.content == "Hai" )
    {
    message.reply(randomWord);
    }

    if(message.content == "hai" )
    {
    message.reply(randomWord);
    }
    if(message.content == "kooi" )
    {
    message.reply(randomWord);
    }

    if(message.content == "-help")
    {
        message.reply(help)
    }





    
});





client.login(process.env.DISCROD_BOT_TOKEN);

