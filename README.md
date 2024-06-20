# Discord Modulated Helpers

| Class | Corresponding |
| ------- | ------- |
| TextSelectBox | StringSelectMenuBuilder, StringSelectMenuOptionBuilder | 
| UserSelectBox | UserSelectMenuBuilder | 

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