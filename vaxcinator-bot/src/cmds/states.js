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
.addFields(
           {name: 'State 1', value: 'Andaman and Nicobar Islands'},
           {name: 'State 2', value: 'Andhra Pradesh'},
           {name: 'State 3', value: 'Arunachal Pradesh'},
           {name: 'State 4', value: 'Assam'},
           {name: 'State 5', value: 'Bihar'},
           {name: 'State 6', value: 'Chandigarh'},
           {name: 'State 7', value: 'Chhattisgarh'},
           {name: 'State 8', value: 'Dadra and Nagar Haveli'},
           {name: 'State 9', value: 'Daman and Diu'},
           {name: 'State 10', value: 'Delhi'},
           {name: 'State 11', value: 'Goa'},
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


const AndamanEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Andaman & Nicobar')
.setDescription('To Select Your District')
.addFields({name: 'District id 3', value: 'Nicobar'},
           {name: 'District id 1', value: 'North and Middle Andaman'},
           {name: 'District id 2', value: 'South Andaman'},
           
)
const AndraEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Andhra Pradesh')
.setDescription('To Select Your District')
.addFields(
           {name: 'District id 9', value: 'Anantapur'},
           {name: 'District id 10', value: 'Chittoor'},
           {name: 'District id 11', value: 'East Godavari'},
           {name: 'District id 5', value: 'Guntur'},
           {name: 'District id 4', value: 'Krishna'},
           {name: 'District id 7', value: 'Kurnool'},
           {name: 'District id 12', value: 'Prakasam'},
           {name: 'District id 13', value: 'Sri Potti Sriramulu Nellore'},
           {name: 'District id 14', value: 'Srikakulam'},
           {name: 'District id 8', value: 'Visakhapatnam'},
           {name: 'District id 15', value: 'Vizianagaram'},
           {name: 'District id 16', value: 'West Godavari'},
           {name: 'District id 6', value: 'YSR District, Kadapa (Cuddapah)'},
           
)
const ArunaEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Andhra Pradesh')
.setDescription('To Select Your District')
.addFields(
           {name: 'District id 9', value: 'Anjaw'},
           {name: 'District id 10', value: 'Changlang'},
           {name: 'District id 11', value: 'Dibang Valley'},
           {name: 'District id 5', value: 'East Kameng'},
           {name: 'District id 4', value: 'East Siang'},
           {name: 'District id 7', value: 'Itanagar Capital Complex'},
           {name: 'District id 12', value: 'Kamle'},
           {name: 'District id 13', value: 'Kra Daadi'},
           {name: 'District id 14', value: 'Kurung Kumey'},
           {name: 'District id 8', value: 'Lepa Rada'},
           {name: 'District id 15', value: 'Lohit'},
           {name: 'District id 16', value: 'Longding'},
           {name: 'District id 6', value: 'Lower Dibang Valley'},
           {name: 'District id 13', value: 'Lower Siang'},
           {name: 'District id 14', value: 'Lower Subansiri'},
           {name: 'District id 8', value: 'Namsai'},
           {name: 'District id 15', value: 'Pakke Kessang'},
           {name: 'District id 16', value: 'Papum Pare'},
           {name: 'District id 6', value: 'Shi Yomi'},
           {name: 'District id 6', value: 'Siang'},
           {name: 'District id 13', value: 'Tawang'},
           {name: 'District id 14', value: 'Tirap'},
           {name: 'District id 8', value: '"Upper Siang'},
           {name: 'District id 15', value: 'Upper Subansiri'},
           {name: 'District id 16', value: 'West Kameng'},
           {name: 'District id 6', value: 'West Siang'},
           
)
const AssamEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Assam')
.setDescription('To Select Your District')
.addFields(
           {name: 'District id 9', value: 'Baksa'},
           {name: 'District id 10', value: 'Barpeta'},
           {name: 'District id 11', value: 'Biswanath'},
           {name: 'District id 5', value: 'Bongaigaon'},
           {name: 'District id 4', value: 'Cachar'},
           {name: 'District id 7', value: 'Charaideo'},
           {name: 'District id 12', value: 'Chirang'},
           {name: 'District id 13', value: 'Darrang'},
           {name: 'District id 14', value: 'Dhemaji'},
           {name: 'District id 8', value: 'Dhubri'},
           {name: 'District id 15', value: 'Dibrugarh'},
           {name: 'District id 16', value: 'Dima Hasao'},
           {name: 'District id 6', value: 'Goalpara'},
           {name: 'District id 13', value: 'Golaghat'},
           {name: 'District id 14', value: 'Hailakandi'},
           {name: 'District id 8', value: 'Hojai'},
           {name: 'District id 15', value: 'Jorhat'},
           {name: 'District id 16', value: 'Kamrup Metropolitan'},
           {name: 'District id 6', value: 'Kamrup Rural'},
           {name: 'District id 6', value: 'Karbi-Anglong'},
           {name: 'District id 13', value: 'Karimganj'},
           {name: 'District id 14', value: 'Kokrajhar'},
           {name: 'District id 8', value: '"Lakhimpur'},
           {name: 'District id 15', value: 'Majuli'},
           {name: 'District id 16', value: 'Morigaon'},
           {name: 'District id 6', value: 'Nagaon'},
           {name: 'District id 13', value: 'Nalbari'},
           {name: 'District id 14', value: 'Sivasagar'},
           {name: 'District id 8', value: '"Sonitpur'},
           {name: 'District id 15', value: 'South Salmara Mankachar'},
           {name: 'District id 16', value: 'Tinsukia'},
           {name: 'District id 6', value: 'Udalguri'},
           {name: 'District id 6', value: 'West Karbi Anglong'},
           
)
const BiharEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Bihar')
.setDescription('To Select Your District')
.addFields(
           {name: 'District id 9', value: 'Araria'},
           {name: 'District id 10', value: 'Arwal'},
           {name: 'District id 11', value: 'Aurangabad'},
           {name: 'District id 5', value: 'Banka'},
           {name: 'District id 4', value: 'Begusarai'},
           {name: 'District id 7', value: 'Bhagalpur'},
           {name: 'District id 12', value: 'Bhojpur'},
           {name: 'District id 13', value: 'Buxar'},
           {name: 'District id 14', value: 'Darbhanga'},
           {name: 'District id 8', value: 'East Champaran'},
           {name: 'District id 15', value: 'Gaya'},
           {name: 'District id 16', value: 'Gopalganj'},
           {name: 'District id 6', value: 'Jamui'},
           {name: 'District id 13', value: 'Jehanabad'},
           {name: 'District id 14', value: 'Kaimur'},
           {name: 'District id 8', value: 'Katihar'},
           {name: 'District id 15', value: 'Khagaria'},
           {name: 'District id 16', value: 'Kishanganj'},
           {name: 'District id 6', value: 'Lakhisarai'},
           {name: 'District id 6', value: 'Madhepura'},
           {name: 'District id 13', value: 'Madhubani'},
           {name: 'District id 14', value: 'Munger'},
           {name: 'District id 8', value: '"Muzaffarpur'},
           {name: 'District id 15', value: 'Nalanda'},
           {name: 'District id 16', value: 'Nawada'},
           {name: 'District id 6', value: 'Patna'},
           {name: 'District id 13', value: 'Purnia'},
           {name: 'District id 14', value: 'Rohtas'},
           {name: 'District id 8', value: '"Saharsa'},
           {name: 'District id 15', value: 'Samastipur'},
           {name: 'District id 16', value: 'Saran'},
           {name: 'District id 6', value: 'Sheikhpura'},
           {name: 'District id 6', value: 'Sheohar'},
           {name: 'District id 8', value: '"Sitamarhi'},
           {name: 'District id 15', value: 'Siwan'},
           {name: 'District id 16', value: 'Supaul'},
           {name: 'District id 6', value: 'Vaishali'},
           {name: 'District id 6', value: 'West Champaran'},
)  


const ChandigarhEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Chandigarh')
.setDescription('To Select Your District')
.addFields(
           {name: 'District id 9', value: 'Chandigarh'},

           )

const ChhattisgarhEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Chhattisgarh')
.setDescription('To Select Your District')
.addFields(

           {name: 'District id 9', value: 'Balod'},
           {name: 'District id 10', value: 'Baloda bazar'},
           {name: 'District id 11', value: 'Balrampur'},
           {name: 'District id 5', value: 'Bastar'},
           {name: 'District id 4', value: 'Bemetara'},
           {name: 'District id 7', value: 'Bijapur'},
           {name: 'District id 12', value: 'Bilaspur'},
           {name: 'District id 13', value: 'Dantewada'},
           {name: 'District id 14', value: 'Dhamtari'},
           {name: 'District id 8', value: 'Durg'},
           {name: 'District id 15', value: 'Gariaband'},
           {name: 'District id 16', value: 'Gaurela Pendra Marwahi'},
           {name: 'District id 6', value: 'Janjgir-Champa'},
           {name: 'District id 13', value: 'Jashpur'},
           {name: 'District id 14', value: 'Kanker'},
           {name: 'District id 8', value: 'Kawardha'},
           {name: 'District id 15', value: 'Kondagaon'},
           {name: 'District id 16', value: 'Korba'},
           {name: 'District id 6', value: 'Koriya'},
           {name: 'District id 6', value: 'Mahasamund'},
           {name: 'District id 13', value: 'Mungeli'},
           {name: 'District id 14', value: 'Narayanpur'},
           {name: 'District id 8', value: '"Raigarh'},
           {name: 'District id 15', value: 'Raipur'},
           {name: 'District id 16', value: 'Rajnandgaon'},
           {name: 'District id 6', value: 'Sukma'},
           {name: 'District id 13', value: 'Surajpur'},
           {name: 'District id 14', value: 'Surguja'},
      
)  


const DadraEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Dadra and Nagar Haveli')
.setDescription('To Select Your District')
.addFields(
           {name: 'District id 9', value: 'Dadra and Nagar Haveli'},

           )

  
  
  
  
  
  
           const DelhiEmbed = new Discord.MessageEmbed()
.setColor('#4ce8fc')
.setTitle('Delhi')
.setDescription('To Select Your District')
.addFields(
    
           {name: 'District id 141', value: 'Central Delhi'},
           {name: 'District id 10', value: 'Baloda bazar'},
           {name: 'District id 11', value: 'Balrampur'},
           {name: 'District id 5', value: 'Bastar'},
           {name: 'District id 4', value: 'Bemetara'},
           {name: 'District id 7', value: 'Bijapur'},
           {name: 'District id 12', value: 'Bilaspur'},
           {name: 'District id 13', value: 'Dantewada'},
           {name: 'District id 14', value: 'Dhamtari'},
           {name: 'District id 8', value: 'Durg'},
           {name: 'District id 15', value: 'Gariaband'},
           {name: 'District id 16', value: 'Gaurela Pendra Marwahi'},
           {name: 'District id 6', value: 'Janjgir-Champa'},
           {name: 'District id 13', value: 'Jashpur'},
           {name: 'District id 14', value: 'Kanker'},
          
      
)  























const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://@cluster0.oe0av.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongodb = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongodb.connect(err => {
  const collection = mongodb.db("test").collection("devices");
  // perform actions on the collection object
  mongodb.close();
});



  


apiLoader = require("./api-caller");

store = require("./store.json");

client.on('ready', () =>{
    console.log( `${client.user.tag} states.js Up`);
/* client.channels.cache.get('843877941108277308').send('\nHello There Iam Appukutan :wave: :zany_face: \n\n Im here to help you get Vaccinated!\n\nPlease Select Your State. Details on How to Select Are Given Below.');*/
  
});




    


client.login(process.env.DISCROD_BOT_TOKEN);

