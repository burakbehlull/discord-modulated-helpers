const { Command } = require('../helpers/index') 
new Command().command.addRoleOption
module.exports = new Command('testcommand', 'Komutlaru test eder')
.build(async (interaction)=>{
	await interaction.reply('oldu')
})