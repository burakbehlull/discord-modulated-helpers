const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require("discord.js")


class TextSelectBox {
    constructor(customId, placeholder){
        this.customId = customId
        this.placeholder = placeholder
        this.options = []
        this.select = new StringSelectMenuBuilder()
        .setCustomId(this.customId)
        .setPlaceholder(this.placeholder)
    }
    optionComponent(label, description, value, boxDefault, emoji){
        const option = new StringSelectMenuOptionBuilder()
        .setLabel(label)
        .setDescription(description)
        .setValue(value)
        if(emoji){
            option.setEmoji(emoji)
        } 
        if(boxDefault){
            option.setDefault(boxDefault)
        }
        return option
    }
    add(label, description, value, boxDefault, emoji){
        this.options.push(this.optionComponent(label, description, value, boxDefault, emoji))
    }
    box(){
        console.log(this.options)
        return this.select.addOptions(...this.options)
    }
}

module.exports = TextSelectBox