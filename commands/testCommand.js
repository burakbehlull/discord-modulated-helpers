const { SlashCommandBuilder, ActionRowBuilder, UserSelectMenuBuilder } = require('discord.js');
const { TextSelectBox,UserSelectBox } = require('../helpers/index')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('testcommand')
		.setDescription('Komutları test eder'),
	async execute(interaction) {

	const textbox = new TextSelectBox('burclar', 'burçlar')
	textbox.add('Terazi', 'Terazi burcunu seçersiniz', 'terazi')
	textbox.add('Kova', 'Kova burcunu seçersiniz', 'kova')
	const select = textbox.box()

	const x = new UserSelectBox('chooseuser', 'aciklama').box()


	const row = new ActionRowBuilder()
		.addComponents(x);

	await interaction.reply({
		content: 'Seçiniz.',
		components: [row],
	});
	},
};