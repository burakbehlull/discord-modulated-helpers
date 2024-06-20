const { SlashCommandBuilder, ActionRowBuilder, 
	UserSelectMenuBuilder, ButtonStyle, ButtonBuilder, 
	ModalBuilder, 
	TextInputBuilder,
	TextInputStyle} = require('discord.js');
const { Modal } = require('../helpers/index')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('testcommand')
		.setDescription('Komutları test eder'),
	async execute(interaction) {

		// BOŞ
	},

	
};