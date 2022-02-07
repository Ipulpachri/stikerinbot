let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*
*Nama* : Fachri
*Umur* : 13
*Kelas* : 7 SMP
*Status* : Private
*SOSIAL MEDIA*
*instagram* : Private
*Facebook* : Private
*Chanel Youtube* : bit.ly/sfdesignchannel
*Gmail* : saefulfachri18@gmail.com
*Github* : Awogawogawog🗿
_Oke udah itu aja terimakasih_
`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Fachri')).buffer(), ext, 'Recoded By Fachri', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.owner', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^infowner$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
