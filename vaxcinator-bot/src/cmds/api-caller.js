
const api = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
const snekfetch = require("snekfetch");
const { args, storeOptionsAsProperties } = require("commander");
const { Client, Message, GuildMember, MessageMentions, User } = require('discord.js');
const { post } = require("snekfetch");
const client = new Client();
const PREFIX = ".";
const Discord = require("discord.js");



client.on('message',(message) =>
{    
    if(message.author.bot) return;
     if(message.channel.type === "dm"){
         
     

        
if(message.content.toLowerCase() === ".display states"){


    message.reply(newEmbed);
    message.reply(new2Embed);

}






        
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "1"){


    message.reply(newEmbed);
   

}
if(message.content.toLowerCase() === "36"){


    message.reply(newEmbed);
   

}




    


       snekfetch.get(api).then(r => {

            
        let body = r.body;
        let id = message.content;
        let store = body
        store.states.type;                                
        if(message.author.bot) return;
        let valueGreater = message.content;
        let valueSmaller = message.content;
        if (valueSmaller < 1) return message.reply("This Value Dosen't Exist");
        if(valueGreater > 36 ) return message.channel.send("This Value Dosen't Exist");
   
        console.log(store.states[message.content]);
        
        const b = store.states[message.content].state_id;
        
        message.reply(`"${store.states[message.content].state_name} Selected" `);
       
        return;
   
                        
        });


        
       snekfetch.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${message.content}`).then(r => {

            
        let body = r.body;
        let id = message.content;
        let stored = body
        stored.districts.type;                                
      
       
   
        console.log(stored.districts[message.content]);
        let did =stored.districts;
        console.log(message.content)
        message.reply(did.district_id);


       
     
   
        return;
        
      

   
                        
        });



      
      /*  message.reply(`"${did[0].district_id} and ${did[0].district_name}"`);*/
        

    

    }

     });

     client.login(process.env.DISCROD_BOT_TOKEN);