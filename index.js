const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "bat!"
client.login(process.env.TOKEN)

client.on("ready", async () =>{
  const stat = [`${prefix}help`, `${prefix}shop`, `& chill`]

  setInterval (function() {
      const statues = stat[Math.floor(Math.random() * stat.length)]
      client.user.setActivity(statues, {type: "WATCHING"})
  }, 10000)
    console.log(`${client.user.username} est allumé !`)
})

// Commande de help

client.on("message", async message => {
  if(message.content.startsWith(prefix + "help")) {
    const embed = new Discord.MessageEmbed()
    .setAuthor("Voici toute les commandes !", message.author.displayAvatarURL())
    .setColor("GREEN")
    .setDescription("Test de la moula à grailler")
    message.channel.send(embed)
  }
})

// Par rapport au shop de dealos !
client.on("message", async message => {
    if(message.content.startsWith(prefix +"shop")) {

        const images = ["https://media.discordapp.net/attachments/818152359195574323/818191239185956904/Z.png", "https://media.discordapp.net/attachments/818152359195574323/818191156453965844/Z.png", "https://media.discordapp.net/attachments/818152359195574323/818190890178183188/2Q.png", "https://media.discordapp.net/attachments/818152359195574323/818190939549597736/9k.png", "https://media.discordapp.net/attachments/818152359195574323/818190973242441728/9k.png", "https://media.discordapp.net/attachments/818152359195574323/818191012106993694/2Q.png"];
const image = images[Math.floor(Math.random() * images.length)];

        const embed = new Discord.MessageEmbed()
        .setAuthor("Voici la boutique !", message.author.displayAvatarURL())
        .setDescription("Boutique pour commander du pochon !")
        .setThumbnail(image)
        .setColor("GREEN")
        .addField("- 1 pochon", "**PRIX** 2 euros.")
        .addField("- 3 pochons", "**PRIX** 5 euros.")
        .addField("- 5 pochons", "**PRIX** 8 euros.")
        .setFooter(`Pour payement | ${prefix}pay`, message.guild.iconURL())
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "pay")) {
        const embed = new Discord.MessageEmbed()
        .setAuthor("Le moyen de payement !", message.author.displayAvatarURL())
        .setColor("GREEN")
        .setDescription("[ - **mini.lukeen@gmail.com** - ]")
        .setFooter(`Plus de choix | ${prefix}shop`)
        message.channel.send(embed)
    }
})
