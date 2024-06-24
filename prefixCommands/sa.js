const { Affix } = require("../helpers/index");

module.exports = new Affix('sa')
.build('sa', async (message)=>{
    await message.reply('as')
})

client?.on('messageCreate', async (message) => {
    if (message.content === '!reacttest') {
        const sentMessage = await message.channel.send('Bu mesaja tepki verin!');
        console.log()
        // Mesaja 👍 emojisi ekleyin
        await sentMessage.react('👍');

        // Reaksiyon koleksiyon filtresi
        const collectorFilter = (reaction, user) => {
            return reaction.emoji.name === '👍' && user.id === message.author.id;
        };

        // Reaksiyon koleksiyon oluşturucu
        const collector = sentMessage.createReactionCollector({
            filter: collectorFilter,
            time: 150000, // 150 saniye
        });

        // Tepki verildiğinde tetiklenir
        collector.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });

        // Koleksiyon tamamlandığında tetiklenir
        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
    }
});

// Tepki çekildiğinde tetiklenir
client?.on('messageReactionRemove', (reaction, user) => {
    if (reaction.emoji.name === '👍') {
        console.log(`Removed ${reaction.emoji.name} from ${user.tag}`);
    }
});