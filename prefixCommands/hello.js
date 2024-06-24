const { Affix } = require("../helpers/index");
const EmojiReact = require("../helpers/EmojiReact");

module.exports = new Affix('hello')
.build('hello', async (message)=>{
    new EmojiReact('x', '1245026894165053590', client)
    .build('🦁', ()=>{
        console.log(1)
    }, ()=>{
        console.log(2)
    })
    await message.reply('aw')
})