const { UserSelectMenuBuilder, ActionRowBuilder } = require("discord.js");
class Crumbs {
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

function ActionRow(...childrens){
    const rows = childrens.map((component) => new ActionRowBuilder().addComponents(component))
    return rows
}

module.exports = {
    UserSelectBox,
    ButtonAction,
    ModalAction,
    ActionRow
}

