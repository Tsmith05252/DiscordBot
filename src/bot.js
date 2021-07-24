 require('dotenv').config(); 

//console.log(process.env.DISCORD_BOT_TOKEN);

const {Client} = require('discord.js');

//create a new instance of Client (above) class 
const bot = new Client(); 
const PREFIX = "$";


bot.on('ready', () => {
    console.log("Doctor Leonard McCoy beaming up!");
});



// greeting function
bot.on('message', (message)=> {

    // stop the bot if it detects itself
    if (message.author.bot) return;

     // grabs the author of the message
    console.log('[${message.author.tag}]: ${message.content}');

   // user sends a greeting  
    if (message.content === 'BONES')
    {
        message.channel.send("I'm right here, you don't need to yell. How y'all doin'?");
    }
});

// create reminder function 
bot.on('message', (message) => {
    // stop if the bot detects itself 
    if (message.author.bot) return; 
    if (message.content.startsWith(PREFIX))
    {
        const [CMD_NAME, ...args] = message.content
            .trim() 
            .substring(PREFIX.length) 
            .split (' ');


        // if the user types 'remind' and a certain user 
        if (CMD_NAME === "remind" ) 
        {

            // bot pings user and reminds them to drink water 
            message.channel.send("Do me a favor and just drink some water- you " + 
            "can't imagine how much of a pain cleaning those hydrospray containers is");
        }
    }

})



bot.login(process.env.DISCORD_BOT_TOKEN);


