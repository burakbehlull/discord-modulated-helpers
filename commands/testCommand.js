const { SlashCommandBuilder, ActionRowBuilder, UserSelectMenuBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
const { TextSelectBox,UserSelectBox, Button, ButtonAction } = require('../helpers/index')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('testcommand')
		.setDescription('Komutları test eder'),
	async execute(interaction) {

		const btn = new Button('btn1','Birinci Buton').danger()
		const row = new ActionRowBuilder()
			.addComponents(btn)
	
		await interaction.reply({
			content: 'Seçiniz.',
			components: [row],
		});

		const action = new ButtonAction(interaction)
		action.on(async (msg)=>await msg.reply('tamam'))
		action.end(async (msg)=>await msg.reply('bitti'))
	},

	
};