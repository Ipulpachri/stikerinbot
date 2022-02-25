let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Donasi* 」
├ Pulsa [ 0895-2551-8325 ]
├ Dana [ 0857-1304-1886 ]
└────
`.trim(), '© Fachri', 'Owner', '.owner', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
