const { GatewayIntentBits, ActivityType } = require('discord.js');
const path = require('path');
const fs = require('fs');
class Tools {
    ItentsAll(){
        return Object.keys(GatewayIntentBits).map((intent) => GatewayIntentBits[intent])
    }
    configuration({
        client=null,
        dirname=undefined,
        eventsFileName=undefined,
        commandsFileName=undefined,
        chatInputCommand=false
    }){
        if(!dirname) return console.log('[ERROR]: dirname is undefined')
        if(commandsFileName){
            const commandsPath = path.join(dirname, commandsFileName);
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

        }
        if(eventsFileName){
            const eventsPath = path.join(dirname, eventsFileName)
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
            console.log(`${eventFiles.length} events has been loaded.`)


            
        }
        if(chatInputCommand){
            if(!client) return console.log('[ERROR]: in configuration to client is undefined')
            client.on('interactionCreate', async (interaction)=>{
                if (!interaction.isChatInputCommand()) return;

                const command = interaction.client.commands.get(interaction.commandName);
        
                if (!command) {
                    console.error(`No command matching ${interaction.commandName} was found.`);
                    return;
                }
        
                try {
                    await command.execute(interaction);
                } catch (error) {
                    console.error(`Error executing ${interaction.commandName}`);
                    console.error(error);
                }
            })
        }
    }
}

module.exports = Tools