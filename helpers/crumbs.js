const { UserSelectMenuBuilder } = require("discord.js");
const chalk = require("chalk");
class crumbs {
    // init
}

class UserSelectBox {
    constructor(id, placeholder, max, min, disabled,setUsers,addUsers){
        if(!id || !placeholder) return
        this.id = id
        this.placeholder = placeholder
        this.select = new UserSelectMenuBuilder()
            .setCustomId(id)
            .setPlaceholder(placeholder)
        if(max) this.select.setMaxValues(max)
        if(min) this.select.setMinValues(min)
        if(disabled) this.select.setDisabled(disabled)
        if(setUsers) this.select.setDefaultUsers(setUsers)
        if(addUsers) this.select.addDefaultUsers(addUsers)
    }

    box(){
        return this.select
    }
}

class ButtonAction {
    constructor(interaction){
        if(!interaction) return
        this.interaction = interaction
        const filter = i => i.user.id === this.interaction.user.id
        this.collector = this.interaction.channel.createMessageComponentCollector({ filter, time: 60000 })
    }
    async on(func){
		await this.collector.on('collect', async interaction => {
            await func(interaction)
        })
        return;
    }
    async end(func){
        this.collector.on('end', async collected => {
            await func(collected)
        })
        return
    }
}

class ModalAction {  
    async on(func){
        await client.on('interactionCreate', async interaction => {
            if(interaction.isModalSubmit()){
                await func(interaction)
            }
        })
        return;
    }
}


class Logger {
    constructor(){
        this.estate = chalk
        this.log = console.log
    }
    success(text){
        if(!text) return text
        this.log(chalk.bgGreen.white("[SUCCESS]: "+text+ " ")) 
    }
    error(text){
        if(!text) return text
        this.log(chalk.bgRed.white("[ERROR]: "+text+ " ")) 
    }
    warn(text){
        if(!text) return text
        this.log(chalk.bgYellow.black("[WARN]: "+text+ " ")) 
    }
    debug(text){
        if(!text) return text
        this.log(chalk.bgGray.black("[DEBUG]: "+text+ " ")) 
    }
}

module.exports = {
    UserSelectBox,
    ButtonAction,
    ModalAction,
	
	Logger
}

