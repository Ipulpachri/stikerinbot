let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Donasi* 」
├ Gopay [0895-2551-8325]
├ Dana [0812-8586-6502]
└────
`.trim(), '© Fachri', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
