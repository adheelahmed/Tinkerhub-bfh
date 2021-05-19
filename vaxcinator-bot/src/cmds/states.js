const api = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
const snekfetch = require("snekfetch");
const { args, storeOptionsAsProperties } = require("commander");
const { Client, Message, GuildMember, MessageMentions, User } = require('discord.js');
const { post } = require("snekfetch");
const client = new Client();
const PREFIX = ".";



store = require("./store.json")

client.on('ready', () =>{

    client.channels.cache.get('843877941108277308').send('\nHello There Iam Appukutan :wave: :zany_face: \n\n Im here to help you get Vaccinated!\n\nPlease Select Your State. Details on How to Select Are Given Below.');
    
  
    client.channels.cache.get('843877941108277308').send("\n1: 'Andhra Pradesh'\n2: 'Arunachal Pradesh'\n3: 'Assam'\n4: 'Bihar'\n5: 'Chandigarh'\n6: 'Chhattisgarh'\n7: 'Dadra and Nagar Haveli'\n8: 'Daman and Diu'\n9: 'Delhi'\n10: 'Goa'\n11: 'Gujarat'\n12: 'Haryana'\n13: 'Himachal Pradesh'\n14: 'Jammu and Kashmir'\n15: 'Jharkhand'\n16: 'Karnataka'\n17: 'Kerala'\n18: 'Ladakh'\n19: 'Lakshadweep'\n20: 'Madhya Pradesh'\n21: 'Maharashtra'\n22: 'Manipur'\n23: 'Meghalaya'\n24: 'Mizoram'\n25: 'Nagaland'\n26: 'Odisha'\n27: 'Puducherry'\n28: 'Punjab'\n29: 'Rajasthan'\n30: 'Sikkim'\n31: 'Tamil Nadu'\n32: 'Telangana'\n33: 'Tripura'\n34: 'Uttar Pradesh'\n35: 'Uttarakhand'\n36: 'West Bengal'\n\nTo Select Your State Enter the no. Next to it.\n(for eg:To Select Kerala Just Type in '17') ");
   
});


client.on('message',(message) =>
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
client.login(process.env.DISCROD_BOT_TOKEN);

