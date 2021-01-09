const  XBOT = 'AMPIBI'; // Nama Bot Whatsapp
const instagram = 'https://instagram.com/affis_saputro123'; // Nama Instagramlu cok
const nomer = 'https://Wa.me/+6282334297175'; // Nomor whatsapplu cok
const aktif = 'Tergantung kuota'; // Kapan bot lu aktif
const groupwa = 'comming soon'; // OFFICIAL GRUP LU 1
const youtube = 'https://youtube.com/channel/UCYKxsg7iF9a9IZyXQRNsvqw'; 
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const menu = require("./lib/menu.js");
const speed = require('performance-now');
const readTextInImage = require('./lib/ocr')
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:affis\n' // full name
            + 'ORG:Owner  XBOT Bot;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6282334297175:+62 823-3429-7175\n' // WhatsApp ID + phone number
            + 'END:VCARD'

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
   GroupSettingChange,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] XBOT Ready scan now!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @affis_saputro123`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @affis_saputro123`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes("#buatgrup"))
   {
var nama = text.split("#buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

if(text.includes("#cek")){
var num = text.replace(/#cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

else if (text == 'assalamualaikum'){
conn.sendMessage(id, '3aalaikumsalam, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}
else if (text == '#owner'){
conn.sendMessage(id, 'Owner XBOT wa.me/+6282334297175' ,MessageType.text);
}
else if (text == 'affis'){
conn.sendMessage(id, 'Aku BOT nya XBOT' ,MessageType.text);
}
else if (text == 'audio'){
conn.sendMessage(id, 'pacar owner ihh' ,MessageType.text);
}
else if (text == 'bangsat'){
conn.sendMessage(id, 'toxic terdeteksi' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pengin ngentod?' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik #menu' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Eoy'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, Ketik #menu/#info/#donasi Contoh #menu' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}

// Fitur

if (text.includes("#setname")){
const teks = text.replace(/#setname /, "")
    let nama = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateSubject(idgrup, nama);
conn.sendMessage(id, 'Succes Change Name Group' ,MessageType.text, { quoted: m } );

}
if (text.includes("#setdesc")){
const teks = text.replace(/#setdesc /, "")
    let desk = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateDescription(idgrup, desk)
conn.sendMessage(id, 'Succes Change Description Group' ,MessageType.text, { quoted: m } );

}
else if (text == '#opengc'){
let hasil = `${id.split("@s.whatsapp.net")[0]}`;
   conn.groupSettingChange (hasil, GroupSettingChange.messageSend, false);
conn.sendMessage(id, 'SUCCES, GRUP TELAH DIBUKA' ,MessageType.text, { quoted: m } );
}
else if (text == '#closegc'){
 let hasil = `${id.split("@s.whatsapp.net")[0]}`;
   conn.groupSettingChange (hasil, GroupSettingChange.messageSend, true);
conn.sendMessage(id, 'SUCCES, GRUP TELAH DITUTUP' ,MessageType.text, { quoted: m } );
}
if (text.includes("#simi")){
const teks = text.replace(/#simi /, "")
axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {
    let hasil = ` *SIMI* : _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
else if (text == '#menu'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id,  XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
if (text == '#donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id,  XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '#donate'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id,  XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '#donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id,  XBOT, corohelp, tampilTanggal, tampilWaktu, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '#DONATE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id,  XBOT, corohelp, tampilTanggal, tampilWaktu, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '#DONASI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id,  XBOT, corohelp, tampilTanggal, tampilWaktu, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
if (text.includes("#ping")){
const teks = text.replace(/#ping /, "")
axios.get(`https://api.banghasan.com/domain/nping/${teks}`).then((res) => {
    let hasil = `*query : ${res.data.query}*\n\nhasil : ${res.data.hasil}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes('#ttp')){
  var teks = text.replace(/#ttp /, '')
    axios.get(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
else if (text == 'hello'){
let hasil = fs.readFileSync('mp3/' + 'PTT' + '.wav')
 conn.sendMessage(id, hasil, MessageType.audio, { quoted: m } )
}
if (text.includes("test")){
let err = fs.readFileSync('mp3/' + 'test' + '.wav')
 conn.sendMessage(id, err, MessageType.audio, { quoted: m })
}
if (text.includes("salam")){
let err = fs.readFileSync('mp3/' + 'salam' + '.mp3')
 conn.sendMessage(id, err, MessageType.audio, { ptt: true })
}
if (text.includes("tariksis")){
let err = fs.readFileSync('mp3/' + 'tariksis' + '.wav')
 conn.sendMessage(id, err, MessageType.audio, { ptt: true, quoted: m })
}
if (text.includes('bot')) {
 var nomor = m.participant
 const options = {
       text: `apa manggil manggil tinggal ketik #menu @${nomor.split("@s.whatsapp.net")[0]}, Ketik #menu untuk menampilkan perintah yaa`,
       contextInfo: { mentionedJid: [nomor] }
 }
 conn.sendMessage(id, options, MessageType.text, { quoted: m })
}
if (text.includes("#alay")){
	const alay = text.split("#alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}



})


