const { SlashCommandBuilder } = require('discord.js');
const { Modal } = require('../helpers/index')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('testcommand')
		.setDescription('Komutları test eder'),
	async execute(interaction) {
		
		const modal = new Modal('userform', 'User Form')
		modal.add('username', 'Kullanıcı adı: ')
		await interaction.showModal(modal.build())
	},

	
};