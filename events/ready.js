const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client, ActivityType) {
		console.log(`${client.user.tag} giriş yaptı!`)

		client.user.setPresence({
			activities: [
				{
					name: `${songs[randomIndex]}`,
					type: ActivityType.Listening
				}
			],
			status: "dnd"
		})
	},
}