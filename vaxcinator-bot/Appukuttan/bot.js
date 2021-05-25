require('dotenv').config()

const Discord = require('discord.js')
const bot= new Discord.Client()
const https = require('https')
const { checkServerIdentity } = require('tls')



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ahmed:@Dheelahmed1212@cluster0.oe0av.mongodb.net/appukutan";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
 console.log("db connected")
});


bot.on('message', async (msg)=>{

    const cmds = msg.content.toLocaleLowerCase().split(' ')
    
    const User=msg.author.id;           

    if(cmds[0]=="register" && cmds[1] && cmds[2]){
       await addUser(User, cmds[1], cmds[2])
       await displayData(User)
    }
    else if(cmds[0]=="save" && cmds[1]=="name" && cmds[2]) {

        await addName(User, cmds[2])
        await displayData(User)
    }
    else if(cmds[0]=="save" && cmds[1]=="age" && cmds[2]) {

        await addAge(User, cmds[2])
        await displayData(User)
    }
    else if(cmds[0]=="save" && cmds[1]=="pincode" && cmds[2]) {

        await addPincode(User, cmds[2])
        await displayData(User)
    }
    else if(cmds[0]=="display" && cmds[1]=="data"){

        await displayData(User)
    }

    else if(cmds[0]=="help"){
        await help()
    }
    else if(cmds[0]=="check" && cmds[1] && cmds[2]){

        await check()
    }
    else{
        msg.channel.send("Invalid Syntax\nChoose a command from below")
        await help()
    }
    
})





bot.on('ready',()=>{
    console.log('logged in as '+bot.user.tag)
   bot.user.setActivity('$Appukuttan',{type:"LISTENING"})
})



bot.login(process.env.DISCROD_BOT_TOKEN)





async function addUser(id, pin, age){
    const database = client.db("appukutan")
  //  let exists = await database.collection('user').countDocuments({id:id})
    //if(!exists){
       await database.collection('user').insertOne({id: id,age:age,pin:pin})
   // }
   
}
async function displayData(id){
    console.log("displayData")
}