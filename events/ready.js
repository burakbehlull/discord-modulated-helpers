const { Event } = require('../helpers/index')

module.exports = new Event('ready', true).build(async(client, ActivityType)=> {
	console.log(`${client.user.tag} giriş yaptı!`)

	client.user.setPresence({
		activities: [
			{
				name: "Latosx - Nerdesin",
				type: ActivityType.Listening
			}
		],
		status: "dnd",
		shardId: 0
	})
})