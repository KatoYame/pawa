let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  ddd = await fetch('https://api.caliph71.xyz/api/fakta?apikey=fqoq5YgB')
  f = await ddd.json()
  conn.reply(m.chat,`${f.result}`, m)
} 
handler.help = ['fakta']
handler.tags = ['edukasi']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
