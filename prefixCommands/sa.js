const Affix = require("../helpers/index");

module.exports = new Affix('sa')
.build('sa', async (message)=>{
    await message.reply('sa')
})