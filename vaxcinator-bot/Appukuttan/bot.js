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

    const cmds = msg.content.toLocaleLowerCase().split(' ')  // makes all commands in to different arrays 
    
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
        await help(User)
    }
    else if(cmds[0]=="check" && cmds[1] && cmds[2]){
        await check(User, cmds[1], cmds[2])
    }
    else{
        msg.channel.send("Invalid Command To chat with me Start with Prefix (.)\nChoose a command from below")
        await help(User)
    }
})




bot.on('ready',()=>{
    console.log('logged in as '+bot.user.tag)
   bot.user.setActivity("EkanthaChandrike",{type:"LISTENING"})
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
            .setTitle('User Data')
            .addFields(
                { name: 'Name', value: userData.name},
                { name: 'Age', value: userData.age},
                { name: 'pincode', value: userData.pin},
                       
            );
        const fetchedUser=await bot.users.fetch(id).catch(() => console.log('could not find user'));
        await fetchedUser.send(dataMessage)
    }else{
        const fetchedUser=await bot.users.fetch(id).catch(() => console.log('could not find user'));
        await fetchedUser.send('You are not a registered user.')
        //send message to user
    }  
    console.log("displayData")
}


const embed = new Discord.MessageEmbed()
.setColor('#C9FF00')
.setTitle('Help')
.addFields(
    { name: 'To Register Type', value:'Register (Pincode) (Age)'},
    { name: 'To Save Name', value:'save (name)'},
    { name: 'To Save Age', value:'save (age)'},
    { name: 'To Save Pincode', value:'save (pincode)'},
)

async function help(id){
    const fetchedUser=await bot.users.fetch(id).catch(() => console.log('could not find user'));
    await fetchedUser.send(embed)
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
                        arr.push({name:i.name,value:`date : ${i.date}\ncenter id : ${i.center_id}\nname : ${i.name}\naddress : ${i.address}\nblock name : ${i.block_name}\npincode : ${i.pincode}\n\nfee type : ${i.fee_type}\nfee : ${i.fee}\nvaccine : ${i.vaccine}\nminimum age : ${i.min_age_limit}\n\ndose 1 capacity : ${i.available_capacity_dose1}\ndose 2 capacity : ${i.available_capacity_dose2}`})
                    }
                })
                let regMsg=new Discord.MessageEmbed()
                            .setColor('#C9FF00')
                            .addFields({name:"To register,visit",value:"https://www.cowin.gov.in/home"})
                let nodataMsg=new Discord.MessageEmbed()
                            .setTitle('Available slots : '+date)
                            .setColor('#ff1111')
                            .setDescription('No available slots in this location')        
                 if(arr.length>0){
                    arr.forEach(async(i)=>{
                        let dataMsg=new Discord.MessageEmbed()
                            .setTitle(i.name)
                            .setDescription(i.value)
                        await fetchedUser.send(dataMsg)
                    })
                    await fetchedUser.send(regMsg) 
                }else{
                    await fetchedUser.send(nodataMsg) 
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