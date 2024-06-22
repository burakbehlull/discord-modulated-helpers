# Discordjs Helper Pack

A helper library that shortens the classes and actions in the Discordjs library. Documents for installing and using npm are available below. It is an open source library.

| Class | Corresponding |
| ------- | ------- |
| **TextSelectBox** | StringSelectMenuBuilder, StringSelectMenuOptionBuilder | 
| **UserSelectBox** | UserSelectMenuBuilder | 
| **Button** | ButtonBuilder, ButtonStyle |
| **ButtonAction** | Collector Action | 
| **Modal** | ModalBuilder, TextInputBuilder, TextInputStyle  | 
| **ModalAction** | interactionCreate and isModalSubmit Action | 
| **MessageSender** | EmbedBuilder | 
| **Tools** | **ItentsAll**-> Receives all intents | 
| **Configuration** | Commands file,Prefix Commands File, Events file and isChatInputCommand() - (type: function) | 
| **ActionRow** | ActionRowBuilder() and addComponents() -  (type: function)  | 
| **Command** | SlashCommandBuilder | 
| **Event** | Event action | 
| **Affix** | Prefix Command | 

### Set up:
```js
// common
const { Modal, Button } = require('discordjs-helper-pack')

// module
import { Modal, Button } from 'discordjs-helper-pack'
```

### TextSelectBox Example:
```js
const { TextSelectBox } = require('discordjs-helper-pack')

const { ActionRow } = require('discord-helper-pack')

# customId, title
const textbox = new TextSelectBox('horoscope','Horoscope')

default: label, value
textbox.add(label, value, description, boxDefault, emoji)
textbox.add('Aquarius', 'aquarius', 'choose Aquarius')

const select = textbox.build()

// irrelevant
ActionRow(select)
```

### UserSelectBox Example:
```js
const { UserSelectBox } = require('discordjs-helper-pack')

default: customId, description
const select = new UserSelectBox(customId, description).build()
const select = new UserSelectBox(customId, placeholder, max, min, disabled,setUsers,addUsers).build()
```

### Button Example:
```js
const { Button } = require('discordjs-helper-pack')

default value: customId, label
new Button('btn1', 'Button One')
new Button(customId, label, emoji, disabled)

// style
new Button('btn1', 'Button One').danger()

.danger()
.secondary()
.primary()
.success()
.link()
```

### ButtonAction Example:
```js
const { ButtonAction } = require('discordjs-helper-pack')

const action = new ButtonAction(interaction)
action.on(async (interaction)=>{
    if(interaction.customId==="btn1"){
        await interaction.reply('btn1 clicked!')
    }
})
action.end(async (interaction)=>{})
```

### Modal Example:
```js
const { Modal } = require('discordjs-helper-pack')

new Modal(customId, title)

default: customId, label
.add(customId, label)

// other
.add(customId, label, value, {paragraph, required, placeholder, max, min})

// example
const modal = new Modal('user', 'User İnformation')

modal.add('firstname', 'First Name')
modal.add('lastname', 'Last Name')

// ready
const built = modal.build()


interaction.showModal(built)
// oth
interaction.showModal(modal.build())
```

### ModalAction Example:
```js
const { ModalAction } = require('discordjs-helper-pack') 
new ModalAction()
.on(async(interaction)=> {})

// Real Example
const modalAction = new ModalAction()

modalAction.on(async(interaction)=>{
	if(interaction.customId == "userform"){
		// codes
	}
})

```

### Configuration Example:
```js
const { Configuration } = require('discordjs-helper-pack') 

Configuration({
	// incessary information
	client: client,
	dirname: __dirname,

	commandsFileName: 'commands', // commands file
	eventsFileName: 'events', // events file
	chatInputCommand: true // command interaction

	//prefix configurations
    prefix: 'm!',
    prefixCommandsFileName: 'prefixCommands'
})
```

### Tools Examples:
```js
const { Tools } = require('discordjs-helper-pack') 
const { ItentsAll } = new Tools()

new Client({
	intents: ItentsAll()
})
```

### ActionRow Examples:
```js
const { ActionRow } = require('discord-helper-pack')

ActionRow(components)

ActionRow(btn1, btn2, btn3)
```

### Command Examples:
```js
const { Command } = require('discordjs-helper-pack') 

const c = new Command(command name, command description)
c.command.addRoleOption() // SlashCommandBuilder features 
c.build(async(interaction)=>{}) // function

// example
module.exports = new Command('command name', 'command description')
.build(async (interaction)=>{
	await interaction.reply('oldu')
})
```

### Event Examples:
```js
const { Event } = require('discordjs-helper-pack') 

once: default value = false
new Event('event name', once?)
.build(async(client, event)=>{})

new Event('ready', true).build(async(client, event)=>{})
```

### Affix Examples:
```js
const { Affix } = require('discordjs-helper-pack') 

module.exports = new Affix('Test Command', description?, usage?)
.build('test', async (message, helper)=>{})

enabled default value: true
.build(commandName, func, enabled)

// helper features
.client => client
.getUser() => message.author.id
.getArgs() => message.content.split(' ')
.bot() => message.author.bot
```