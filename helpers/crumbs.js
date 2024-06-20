const { UserSelectMenuBuilder } = require("discord.js");

class crumbs {
    // init
}


class UserSelectBox {
    constructor(id, placeholder, max, min, disabled,setUsers,addUsers){
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

module.exports = {
    UserSelectBox
}

