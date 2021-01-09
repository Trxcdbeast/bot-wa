exports.menu = (id, XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
╭─────────────
│ゞ📆 *${tampilTanggal}*
│ゞ⏱️ *${tampilWaktu}*
│ゞ📢 Bot Aktif ; *${aktif}*
╰─────────────

╭──────────────
│ *FITUR BOT ${XBOT}*
╰──────────────

╭───❉ *Group* ❉─────
│➥ *#opengc*
│➥ *#closegc*
│➥ *#tagme*
│➥ *#setname* <text>
│➥ *#setdesc* <text>
│➥ *#nomersend*
╰──────────────
╭───❉ *Owner Info* ❉─────
│➥  *youtube*
│.  _${youtube}_
│➥  *instagram aku*
│. _${instagram}_
│➥  *wa admin*
│. _${nomer}_
╰──────────────
╭──────────────
│ _*MADE BY IRC Groups*_
╰──────────────`
}
