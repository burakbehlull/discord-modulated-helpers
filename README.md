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

### Set up:
```js
// common
const { Methods } = require('./helpers/index')

// module
import { Methods } from './helpers/index.js'

// example (use methods)
const { Modal }
```

### TextSelectBox Example:
```js
# customId, title
const textbox = new TextSelectBox('burclar','burçlar')

default: label, value
textbox.add(label, value, description, boxDefault, emoji)
textbox.add('Kova', 'kova', 'Kova burcunu seçersiniz')

const select = textbox.box()

// outside the library action
const row = new ActionRowBuilder()
	.addComponents(select);
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

### Bot Setup:
To enter bot settings, create an .env file, there is an example ` .env ` file named **.env-example** in the project.

```
TOKEN = 
BOT_ID = 
```
