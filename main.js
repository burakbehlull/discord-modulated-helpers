const { ActivityType, Client, Collection, GatewayIntentBits } = require('discord.js')
const fs = require('node:fs')
const path = require('node:path')
require('dotenv').config()


const client = new Client({
    intents: Object.keys(GatewayIntentBits).map((intent) => GatewayIntentBits[intent]),
})

client.commands = new Collection()

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command)
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
	}
}

console.log(`${commandFiles.length} commands has been loaded.`)

const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file)
	const event = require(filePath)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, ActivityType))
	} else {
		client.on(event.name, (...args) => event.execute(...args, client))
	}
}


client.on('interactionCreate', async (interaction)=>{
    if(interaction.customId=="burclar"){
        console.log("burç: ", interaction.values[0])
        if(interaction.values[0] == "terazi"){
            await interaction.reply('terazi seçildi')
        }
    }
})

client.login(process.env.TOKEN)
.then(() =>console.log("Token başarılı"))
.catch((err) => console.log("Hata: ", err))
