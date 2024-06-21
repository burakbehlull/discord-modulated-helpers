const { ActivityType, Client, Collection, GatewayIntentBits } = require('discord.js')
const fs = require('node:fs')
const path = require('node:path')
require('dotenv').config()

const { Tools } = require('./helpers/index')
const { ItentsAll, configuration } = new Tools()
const client = (global.client = new Client({
    intents: ItentsAll()
}))

client.commands = new Collection()

configuration({
	client: client,
	dirname: __dirname,
	commandsFileName: 'commands',
	eventsFileName: 'events',
	chatInputCommand: true
})


/*
client.on('interactionCreate', async (interaction)=>{
    if(interaction.customId=="burclar"){
        console.log("burç: ", interaction.values[0])
        if(interaction.values[0] == "terazi"){
            await interaction.reply('terazi seçildi')
        }
    }
})
*/

client.login(process.env.TOKEN)
.then(() =>console.log("Token başarılı"))
.catch((err) => console.log("Hata: ", err))
