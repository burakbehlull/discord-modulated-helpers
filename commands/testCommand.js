const { SlashCommandBuilder, ActionRowBuilder } = require('discord.js');
const { TextSelectBox } = require('../helpers/index')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('testcommand')
		.setDescription('Komutları test eder'),
	async execute(interaction) {

	const textbox = new TextSelectBox('burclar', 'burçlar')
	textbox.add('Terazi', 'Terazi burcunu seçersiniz', 'terazi')
	textbox.add('Kova', 'Kova burcunu seçersiniz', 'kova')
	const select = textbox.box()

	const row = new ActionRowBuilder()
		.addComponents(select);

	await interaction.reply({
		content: 'Seçiniz.',
		components: [row],
	});
	},
};