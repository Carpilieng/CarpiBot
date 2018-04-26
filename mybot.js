const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Ready for duty.");
});

client.on("message", (message) => {
  switch (message.content){
    case ";json":
     message.channel.send("JA-SOOON ~ **sees his lost son smashed by a car**");
    break;

    case ";shawn":
    message.channel.send("SHA-AAAAWN! **gets shot by the villain that tried to drown his son**");
    break;

  }
});

client.login("process.env.BOT_TOKEN");
