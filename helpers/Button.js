const { ButtonBuilder, ButtonStyle } = require("discord.js");

class Button {
    constructor(customId, label, emoji, disabled){
        if(!customId) return
        this.customId = customId
        this.label = label
        this.btn = new ButtonBuilder()
            .setCustomId(customId)
            .setLabel(label)
        if(emoji) this.btn.setEmoji(emoji)
        if(disabled) this.btn.setDisabled(disabled)
    }
    danger(){
        this.btn.setStyle(ButtonStyle.Danger)
        return this.btn
    }
    secondary(){
        this.btn.setStyle(ButtonStyle.Secondary)
        return this.btn
    }   
    primary(){
        this.btn.setStyle(ButtonStyle.Primary)
        return this.btn
    }    
    success(){
        this.btn.setStyle(ButtonStyle.Success)
        return this.btn
    }   
    link(){
        this.btn.setStyle(ButtonStyle.Link)
        return this.btn
    }
}

module.exports = Button