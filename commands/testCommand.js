const { Command } = require('../helpers/index') 
module.exports = new Command('testcommand', 'Komutlaru test eder')
.build(async (interaction)=>{
	await interaction.reply('oldu')
})