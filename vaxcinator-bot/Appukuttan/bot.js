require('dotenv').config()

const Discord = require('discord.js')
const bot= new Discord.Client()
const https = require('https')
const { checkServerIdentity } = require('tls')


const db_name = process.env.MONGO_DBNAME // value of database name to db_name
const MongoClient = require('mongodb').MongoClient;
const mongoUri = "mongodb+srv://"+process.env.MONGO_USERNAME+":"+process.env.MONGO_PASSWORD+"@"+process.env.MONGO_CLUSTER+"/"+db_name; // hid details
const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });




client.connect(err => {
 console.log("database is connected")  // Displays that if Database is connected
});




bot.on('message', async (msg)=>{
// All will be explained in detail on video and it will be uploaded in our Git-Hub repo

    if(msg.author.bot) return; 

    console.log(`[${msg.author.tag}]: ${msg.content} `);



if(msg.channel.type=="dm")
{

    const cmds = msg.content.toLocaleLowerCase().split(' ')  // makes all commands in to different arrays 
    
    const User=msg.author.id;           

    if(cmds[0]=="register" && cmds[1] && cmds[2]){
       await addUser(User, cmds[1], cmds[2])                     
       await displayData(User)
       msg.reply("Add your name by the 'save' command check 'help' if needed")
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
        await help(User)
    }
    else if(cmds[0]=="check" && cmds[1] && cmds[2]){
        await check(User, cmds[1], cmds[2])
    }
    else{
        msg.channel.send("Im Sorry That Command is not available\nChoose a command from below")
        await help(User)
    }



}else{

        var Array=["\nHello There....And be Safe From Covid\nTo Check Vaccination Slot dm 'help'","Ahoy There!\nTo get Updates on availability of covid vaccine dm 'help' to me","Hi There!\nTo start Registration try direct messaging 'help' to me" ,"Helooooo!\nCheck availability of vaccine by registering, To start dm me 'help'" ,"Hi There!,Hope you Are fine\ndm me 'help' to begin registration" ,"hoooiii...! Good to See you!\nStart the process of checking vaccine slots by direct messaging 'help'" , ];
        var randomWord = Array[Math.floor(Math.random()* Array.length)];
    
        if(msg.content.toLowerCase() == "hello" )
        {
        msg.reply(randomWord);
        return 0;
        }
        if(msg.content.toLowerCase() == "helo" )
        {
        msg.reply(randomWord);
        return 0;
        }
        
        if(msg.content.toLowerCase() == "hi" )
        {
        msg.reply(randomWord);
        return 0;
        }
        
        if(msg.content.toLowerCase() == "hlo" )
        {
        msg.reply(randomWord);
        return 0;
        }
        
        if(msg.content.toLowerCase() == "lo" )
        {
        msg.reply(randomWord);
        return 0;
        }
        
        if(msg.content.toLowerCase() == "hai" )
        {
        msg.reply(randomWord);
        return 0;
        }


    }


})




bot.on('ready',()=>{
    console.log('logged in as '+bot.user.tag)
    bot.user.setActivity("Ekantha Chandrike, Try Help",{type:"LISTENING"})
})




bot.login(process.env.BOT_TOKEN)






async function addUser(id, pin, age){

    const database = client.db(db_name)
    let exists = await database.collection('users').countDocuments({id:id})

    if(!exists){
       await database.collection('users').insertOne({id: id,age:age,pin:pin})
    }

}

async function displayData(id){

    const database = client.db(db_name)        
    let exists = await database.collection('users').countDocuments({id:id})
    if(exists){
        const userData=await database.collection('users').findOne({id:id})
        let dataMessage = new Discord.MessageEmbed()
            .setColor('#C9FF00')
            .setTitle('Your Data')
            .addFields(
                { name: 'Name', value: userData.name},
                { name: 'Age', value: userData.age},
                { name: 'pincode', value: userData.pin},
                       
            );
        const fetchedUser=await bot.users.fetch(id).catch(() => console.log('could not find the user'));
        await fetchedUser.send(dataMessage)
    }else{
        const fetchedUser=await bot.users.fetch(id).catch(() => console.log('could not find the user'));
        await fetchedUser.send('You are not registered.')
        //send message to user
    }  
    console.log("displayData")
}

async function addName(id, name){
    const database =client.db(db_name)
    await database.collection('users').updateOne({id:id},{$set:{name:name}})  
    
}

async function addAge(id, age){
    const database =client.db(db_name)
    await database.collection('users').updateOne({id:id},{$set:{age:age}})  
    
}

async function addPincode(id, pin){
    const database =client.db(db_name)
    await database.collection('users').updateOne({id:id},{$set:{pin:pin}})     
}

async function help(id){
    const fetchedUser=await bot.users.fetch(id).catch(() => console.log('could not find the user'));
    await fetchedUser.send(embed)
}

const embed = new Discord.MessageEmbed()
.setColor('#C9FF00')
.setTitle('Your Help Is Here! :angel: ')
.addFields(
    { name: 'To Check For Vaccine Enter', value:'"check (pincode) (dd-mm-yyyy)"'},
    { name: 'To Register For Update Enter', value:'"Register (Pincode) (Age)"'},
    { name: 'To Display Your Data Enter', value:'"display data"'},
    { name: '\nIf You Have Entered Wrong User Information', value:'Use the "save" command given below to Update'},
    { name: 'To Change/Save Name Enter', value:'"save name (name)"\n(Consider To Enter you name without spaces\nIf needed to add full name use "-")'},
    { name: 'To Change/Save Age Enter', value:'"save age (age)"'},
    { name: 'To Change/Save Pincode Enter', value:'"save pincode (pincode)"'},
   
)




async function check(id, pin, date){

    https.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pin+'&date='+date,(resp)=>{

        if(resp.statusCode==200){
            let d=''
            resp.on('data',(c)=>{
                d+=c
            })
            resp.on('end',async()=>{
                let arr=[];
                const data=JSON.parse(d)
                const fetchedUser= await bot.users.fetch(id).catch(() => console.log('could not find user'));
               
                await data.sessions.forEach((i)=>{
                    if(i.available_capacity>0){                     
                        arr.push({name:i.name,value:`Date : ${i.date}\nCenter id : ${i.center_id}\nName : ${i.name}\nAddress : ${i.address}\nBlock name : ${i.block_name}\nPincode : ${i.pincode}\n\nFee type : ${i.fee_type}\nFee : ${i.fee}\nVaccine Name : ${i.vaccine}\nMinimum age : ${i.min_age_limit}\n\nDose 1 Capacity : ${i.available_capacity_dose1}\nDose 2 Capacity : ${i.available_capacity_dose2}`})
                    }
                })
                let regmsg=new Discord.MessageEmbed()
                            .setColor('#C9FF00')
                            .addFields({name:"To register,visit",value:"https://www.cowin.gov.in/home"})
                let nodata=new Discord.MessageEmbed()
                            .setTitle('No slots Currently : '+date)
                            .setColor('#00FFFF')
                            .setDescription('There are No available slots in this location right now!')        
                 if(arr.length>0){
                    arr.forEach(async(i)=>{
                        let datamsg=new Discord.MessageEmbed()
                            .setTitle(i.name)
                            .setColor('#00FFFF')
                            .setDescription(i.value)
                        await fetchedUser.send(datamsg)
                    })
                    await fetchedUser.send(regmsg) 
                }else{
                    await fetchedUser.send(nodata) 
                }                  
            })
        }
    })

}

setInterval(()=>{
    const database =client.db(db_name)
    const people =  database.collection('users').find({})
    let today=new Date()
    let month=today.getMonth()
    month++
    if(month<10){
        month=`0${month}`
    }
    let date=`${today.getDate()}-${month}-${today.getFullYear()}`
    people.forEach(async(person)=>{
    await check(person.id, person.pin, date)
    })
},60*60*1000)