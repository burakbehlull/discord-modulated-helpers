# Discordjs Helper Pack

A helper library that shortens the classes and actions in the Discordjs library. Documents for installing and using npm are available below. It is an open source library.

| Class | Corresponding |
| ------- | ------- |
| TextSelectBox | StringSelectMenuBuilder, StringSelectMenuOptionBuilder | 
| UserSelectBox | UserSelectMenuBuilder | 
| Button | ButtonBuilder, ButtonStyle |
| ButtonAction | Collector Action | 
| Modal | ModalBuilder, TextInputBuilder, TextInputStyle  | 
| ModalAction | interactionCreate and isModalSubmit Action | 
| MessageSender | EmbedBuilder | 
| Tools | **configuration** -> Commands file, Events file and isChatInputCommand() **ItentsAll**-> Receives all intents | 
| ActionRow | ActionRowBuilder() and addComponents(), (type: function)  | 

### Set up:
```js
// common
const { Modal, Button } = require('./helpers/index')

// module
import { Modal, Button } from './helpers/index.js'
```

### TextSelectBox Example:
```js
const { ActionRow } = require('discord-helper-pack')

# customId, title
const textbox = new TextSelectBox('burclar','burçlar')

default: label, value
textbox.add(label, value, description, boxDefault, emoji)
textbox.add('Kova', 'kova', 'Kova burcunu seçersiniz')

const select = textbox.box()

// irrelevant
ActionRow(select)
```

### UserSelectBox Example:
```js
default: customId, description
const select = new UserSelectBox(customId, description).box()
const select = new UserSelectBox(customId, placeholder, max, min, disabled,setUsers,addUsers).box()
```

### Button Example:
```js
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

### ActionRow Examples:
```js
const { ActionRow } = require('discord-helper-pack')

ActionRow(components)

ActionRow(btn1, btn2, btn3)
```

### Tools /Configuration Example:
```js
const { Configuration } = new Tools()

configuration({
	// incessary information
	client: client,
	dirname: __dirname,

	commandsFileName: 'commands', // commands file
	eventsFileName: 'events', // events file
	chatInputCommand: true // command interaction
})
```

### Tools Examples:
```js
const { ItentsAll } = new Tools()

new Client({
	intents: ItentsAll()
})
```