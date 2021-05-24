const api = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
const snekfetch = require("snekfetch");
const { args, storeOptionsAsProperties } = require("commander");
const { Client, Message, GuildMember, MessageMentions, User } = require('discord.js');
const { post } = require("snekfetch");
const client = new Client();
const PREFIX = ".";
const Discord = require("discord.js");
const newEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('States & Union Territories')
.setDescription('To Select Your State Check Below the embed')
.addFields({name: 'State 1', value: 'Andhra Pradesh'},
           {name: 'State 2', value: 'Arunachal Pradesh'},
           {name: 'State 3', value: 'Assam'},
           {name: 'State 4', value: 'Bihar'},
           {name: 'State 5', value: 'Chandigarh'},
           {name: 'State 6', value: 'Chhattisgarh'},
           {name: 'State 7', value: 'Dadra and Nagar Haveli'},
           {name: 'State 8', value: 'Daman and Diu'},
           {name: 'State 9', value: 'Delhi'},
           {name: 'State 10', value: 'Goa'},
           {name: 'State 12', value: 'Haryana'},
           {name: 'State 13', value: 'Himachal Pradesh'},
           {name: 'State 14', value: 'Jammu and Kashmir'},
           {name: 'State 15', value: 'Jharkhand'},
           {name: 'State 16', value: 'Karnataka'},
           {name: 'State 17', value: 'Kerala'},
           {name: 'State 18', value: 'Ladakh'},
           {name: 'State 19', value: 'Lakshadweep'},
           {name: 'State 20', value: 'Madhya Pradesh'},
           {name: 'State 21', value: 'Maharashtra'},
           {name: 'State 22', value: 'Manipur'},
           {name: 'State 23', value: 'Meghalaya'},
           {name: 'State 24', value: 'Mizoram'},
           {name: 'State 25', value: 'Nagaland'},
           {name: 'State 26', value: 'Odisha'},
 
           
)


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://@cluster0.oe0av.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongodb = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongodb.connect(err => {
  const collection = mongodb.db("test").collection("devices");
  // perform actions on the collection object
  mongodb.close();
});



const new2Embed = new Discord.MessageEmbed() 
.addFields(
    {name: 'State 27', value: 'Puducherry'},
           {name: 'State 28', value: 'Punjab'},
           {name: 'State 29', value: 'Rajasthan'},
           {name: 'State 30', value: 'Sikkim'},
           {name: 'State 31', value: 'Tamil Nadu'},
           {name: 'State 32', value: 'Telangana'},
           {name: 'State 33', value: 'Tripura'},
           {name: 'State 34', value: 'Uttar Pradesh'},
           {name: 'State 35', value: 'Uttarakhand'},
           {name: 'State 36', value: 'West Bengal'},
)
.setColor('#4ce8fc')
.setFooter('To Select Your State Enter the no. Next to it.\n(for eg:To Select Kerala Just Type in ".state  17" ')


store = require("./store.json")

client.on('ready', () =>{
    console.log( `${client.user.tag} states.js Up`);
/*

    client.channels.cache.get('843877941108277308').send('\nHello There Iam Appukutan :wave: :zany_face: \n\n Im here to help you get Vaccinated!\n\nPlease Select Your State. Details on How to Select Are Given Below.');
  
   */
  
});


client.on('message',(message) =>
    {    
        if(message.author.bot) return;
         if(message.channel.type === "dm"){
             
         

            console.log(message.content);
if(message.content.toLowerCase() === ".display states"){


        message.reply(newEmbed);
        message.reply(new2Embed);
    }


        //




          

            

             snekfetch.get(api).then(r => {
   /*abdul hadi code  */


   discord_bot.on('message',async (message)=>{
    const commands = message.content.toLocaleLowerCase().split(' ') //divide message to words and store in array
    
    if(!message.author.bot){
        if(message.channel.type=='dm'){ 
            const userId=message.author.id;           
            if(commands[0]=='show'){
                if(commands[1]=='states'||commands[1]=='state'){
                    message.channel.send(msg.states)
                    //show states
                }else if(commands[1]=='districts'||commands[1]=='district'){
                    if(commands[2]>0&&commands[2]<38){
                        message.channel.send(msg.district[commands[2]])
                        //show districts
                    }else{
                        message.channel.send('invalid state code')
                        //invalid state code
                    }
                }else if(commands[1]=='mydata'){
                    await showUser(userId)
                    //show user data
                }else{
                    message.channel.send(msg.showMessages)
                    //send show codes 
                }
            }else if(commands[0]=='check'){
                if(commands[1]=='district'&&commands[2]&&commands[3]){
                    const d= districtList.find(e=>e.district_id==commands[2])
                    if(d){
                        checkDistrict(userId,commands[2],commands[3])
                    }else{
                        message.channel.send('invalid district code')
                    }//check whether district code is valid
                }else if(commands[1]=='pincode'&&commands[2].length==6&&commands[3]){
                    checkPincode(userId,commands[2],commands[3])                
                }else{
                    message.channel.send(msg.checkMessages)
                    // send check codes
                }
            }else if(commands[0]=='register') {
                if(commands[1]&&commands[2]){
                    const d= districtList.find(e=>e.district_id==commands[1])
                    if(d){
                        await addUser(userId,message.author.username,commands[1],d.district_name,commands[2])
                        await addDistrict(commands[1],d.district_name)
                        await showUser(userId)
                    }else{
                        message.channel.send('invalid district code')
                    }                   
                    // add user db
                }else{
                    message.channel.send(msg.registerMessage)
                }
            }else if(commands[0]=='update'){
                if(commands[1]=='age'&&commands[2]){
                    await updateAge(userId,commands[2])
                    await showUser(userId)
                    //update age
                }else if(commands[1]=='district'&&commands[2]){
                    const d= districtList.find(e=>e.district_id==commands[2])
                    if(d){
                        await updateDistrict(userId,commands[2],d.district_name)
                        await showUser(userId)
                    }else{
                        message.channel.send('Invalid District code')
                    }                   
                    // update district
                }else{
                    message.channel.send(msg.updateMessage)
                    //send update code
                }
            }else if(commands[0]=='unregister'){
                await deleteUser(userId)
                message.channel.send('Unregistered from daily updates')
                // delete user
            }else if(commands[0]=='help'){
                message.channel.send(msg.commandsMessage);
            }else{
                message.channel.send("invalid command\n\n send 'help' to see all commands")
                //invalid command
            }
        }
        else if(message.channel.type=='text'){           
            if(commands[0]=='$vacbot'&&message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')){
                message.channel.send(msg.aboutMessage)
            }//respond with an about message to channels which bot have 'SEND_MESSAGES' permission
        }
    }
})





     //////////---------------------------------------- /*abdul hadi code  */

                
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
                    
                    const b = store.states[message.content].state_id;
                    
                    message.reply(store.states[message.content].state_name);


                 
                


                    
                    });  



        

                if(message.content ==="district"){

                


                    snekfetch.get(`"https://cdn-api.co-vin.in/api/v2/admin/location/districts/${message.content}"`).then(res => {
        
                        r : json


                       r.districts. forEach((d)=>{
                           console.log(d)
                           })

                        });                                              
                }
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



client.login(process.env.DISCROD_BOT_TOKEN);

