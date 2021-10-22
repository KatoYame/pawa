let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan teksnya', m)

  await m.reply('Wait...')
	//let buff = ('http://lolhuman.herokuapp.com/api/amongus?apikey=31caf10e4a64e86c1a92bcba&text=' + text);
    let voss = await fetch(global.API('lolhum', '/api/amongus', { text }, 'apikey'))
    let vuss = await ftype.fromStream(voss.body)
    if (vuss !== undefined) {

     conn.sendFile(m.chat, await getBuffer(buff), 'amongus.webp', '', m, false, { asSticker: true })
     }
}
handler.help = ['amongus <teks>']
handler.tags = ['sticker']
handler.command = /^(amongus)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler