import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "menu") {
    await m.React('⏳'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Asia/Karachi").format("HH:mm:ss");
    const xtime = moment.tz("Asia/Karachi").format("HH:mm:ss");
    const xdate = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
    const time2 = moment().tz("Asia/Karachi").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

    const aliveMessage = `╭┈───────────────•*
*⇆𝙷𝙴𝙻𝙻𝙾 𝙼𝚁⇆*
          *${pushName}* _${pushwish}_
*⇆ ✨ 𝚂𝙰𝚁𝙺𝙰𝚁-𝙼𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ✨ ⇆*
*╰┈───────────────•*
*╭┈───────────────•* 
*│  ◦*  𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: 𝚂𝙰𝚁𝙺𝙰𝚁-𝙼𝙳
*│  ◦* 𝚅𝙴𝚁𝚂𝙸𝙾𝙽: 1𝚂𝚃
*│  ◦* 𝙳𝙴𝚅: 𝚂𝙰𝚁𝙺𝙰𝚁-𝙱𝙰𝙽𝙳𝙰𝙷𝙴𝙰𝙻𝙸
*│  ◦* 𝙿𝚁𝙴𝙵𝙸𝚇: *${prefix}*
*│  ◦* 𝙼𝙾𝙳𝙴: *${mode}*
*│  ◦* 𝚄𝙿𝚃𝙸𝙼𝙴: *${days}d ${hours}h ${minutes}m ${seconds}s*
*│  ◦* 𝙲𝚄𝚁𝚁𝙴𝙽𝚃 𝚃𝙸𝙼𝙴: *${realTime}*
*╰┈───────────────•*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*[ • 🥰 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 𝙲𝙼𝙳 🥰 • ]*
*╭┈───────────────•*
*┋*🥰 *${prefix}𝚀𝚄𝚁𝙰𝙽𝚅𝙸𝙳𝙴𝙾*
*╰┈───────────────•*
*[ • 🤴 𝙾𝚆𝙽𝙴𝚁 𝙲𝙼𝙳 🤴 ‎• ]*
*╭┈───────────────•*
*┋*👑 *${prefix}𝙱𝙻𝙾𝙲𝙺*
*┋*👑 *${prefix}𝚄𝙽𝙱𝙻𝙾𝙲𝙺*
*┋*👑 *${prefix}𝙹𝙾𝙸𝙽*
*┋*👑 *${prefix}𝙻𝙴𝙰𝚅𝙴*
*┋*👑 *${prefix}𝚂𝙴𝚃𝚅𝙰𝚁*
*┋*👑 *${prefix}𝚁𝙴𝚂𝚃𝙰𝚁𝚃*
*┋*👑 *${prefix}𝚂𝙴𝚃𝙿𝙿*
*┋*👑 *${prefix}𝚂𝙷𝚄𝚃𝙳𝙾𝚆𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*╰┈───────────────•*
*[ • 🔎 𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙼𝙳 🔍 ‎• ]*
*╭┈───────────────•*
*┋*🔍 *${prefix}𝚈𝚃𝚂*
*┋*🔍 *${prefix}𝙶𝙾𝙾𝙶𝙻𝙴*
*┋*🔍 *${prefix}𝙸𝙼𝙳𝙱*
*┋*🔍 *${prefix}𝙸𝙼𝙶*
*┋*🔍 *${prefix}𝚆𝙴𝙰𝚃𝙷𝙴𝚁*
*┋*🔍 *${prefix}𝙿𝙻𝙰𝚈𝚂𝚃𝙾𝚁𝙴*
*┋*🔍 *${prefix}𝙽𝙴𝚆𝚂*
*╰┈───────────────•*
*[ • 🧠 𝙰𝙸 𝙲𝙼𝙳 🧠  ‎• ]*
*╭┈───────────────•*
*┋*🧠 *${prefix}𝙱𝙻𝙰𝙲𝙺𝙱𝙾𝚇𝙰𝙸*
*┋*🧠 *${prefix}𝙶𝙿𝚃*
*┋*🧠 *${prefix}𝚅𝙸𝚂𝙸𝚃*
*╰┈───────────────•*
*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*
*╭┈───────────────•*
*┋*⏬️ *${prefix}ғʙ*
*┋*⏬️ *${prefix}ɪɴꜱᴛᴀ*
*┋*⏬️ *${prefix}ᴠɪᴅᴇᴏ*
*┋*⏬️ *${prefix}ɢᴅʀɪᴠᴇ*
*┋*⏬️ *${prefix}ᴛᴡɪᴛᴛᴇʀ*
*┋*⏬️ *${prefix}𝚝𝚒𝚔𝚝𝚘𝚔*
*┋*⏬️ *${prefix}ᴍᴇᴅɪᴀғɪʀᴇ*
*┋*⏬️ *${prefix}ꜱᴏɴɢ*
*┋*⏬️ *${prefix}ᴠɪᴅᴇᴏ*
*┋*⏬️ *${prefix}ᴀᴘᴋ*
*┋*⏬️ *${prefix}𝚃𝚃𝙰𝚄𝙳𝙸𝙾*
*╰┈───────────────•*
*[ • 🚻 GROUP-CMD 🚻 ‎• ]*
*╭┈───────────────•*
*┋*⛔️ *${prefix}ᴅᴇʟ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋*🤝 *${prefix}ᴀᴅᴅ*
*┋*🦵 *${prefix}ᴋɪᴄᴋ*
*┋*🤗 *${prefix}ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚗*
*┋*🤗 *${prefix}ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚏𝚏*
*┋*🫅 *${prefix}ᴘʀᴏᴍᴏᴛᴇ*
*┋*🤵 *${prefix}ᴅᴇᴍᴏᴛᴇ*
*┋*🎳 *${prefix}ᴛᴀɢᴀʟʟ*
*┋*📛 *${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐*
*┋*♻️ *${prefix}ɪɴᴠɪᴛᴇ*
*┋*🔇 *${prefix}ᴍᴜᴛᴇ*
*┋*🔊 *${prefix}ᴜɴᴍᴜᴛᴇ*
*┋*🔒 *${prefix}𝙶𝚁𝙾𝚄𝙿 𝚘𝚙𝚎𝚗*
*┋*🔓 *${prefix}𝙶𝚁𝙾𝚄𝙿 𝚌𝚕𝚘𝚜𝚎*
*┋*😞 *${prefix}ʟᴇᴀᴠᴇ*
*╰┈───────────────•*
*[ • 🎙️ 𝙰𝚄𝙳𝙸𝙾 𝙲𝙼𝙳 🎙️ ‎• ]*
*╭┈───────────────•*
*┋*🎙️ *${prefix}𝙳𝙴𝙴𝙿*
*┋*🎙️ *${prefix}𝙱𝙰𝚂𝚂*
*┋*🎙️ *${prefix}𝚁𝙾𝙱𝙾𝚃*
*┋*🎙️ *${prefix}𝚁𝙴𝚅𝙴𝚁𝚂𝙴*
*┋*🎙️ *${prefix}𝚂𝙻𝙾𝚆*
*┋*🎙️ *${prefix}𝚂𝙼𝙾𝙾𝚃𝙷*
*┋*🎙️ *${prefix}𝙽𝙸𝙶𝙷𝚃𝙲𝙾𝚁𝙴*
*╰┈───────────────•*
*[ • ☣ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙲𝙼𝙳 ☣ ‎• ]*
*╭┈───────────────•*
*┋*☣ *${prefix}𝙳𝙰𝙽𝙲𝙴*
*┋*☣ *${prefix}𝙿𝙾𝙺𝙴*
*┋*☣ *${prefix}𝚆𝙸𝙽𝙺*
*┋*☣ *${prefix}𝙷𝙰𝙿𝙿𝚈*
*┋*☣ *${prefix}𝙺𝙸𝙲𝙺*
*┋*☣ *${prefix}𝙺𝙸𝙻𝙻*
*┋*☣ *${prefix}𝚂𝙻𝙰𝙿*
*┋*☣ *${prefix}𝙱𝙸𝚃𝙴*
*┋*☣ *${prefix}𝙽𝙾𝙼*
*┋*☣ *${prefix}𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴*
*┋*☣ *${prefix}𝚆𝙰𝚅𝙴*
*┋*☣ *${prefix}𝚂𝙼𝙸𝙻𝙴*
*┋*☣ *${prefix}𝙱𝙻𝚄𝚂𝙷*
*┋*☣ *${prefix}𝚈𝙴𝙴𝚃*
*┋*☣ *${prefix}𝙱𝙾𝙽𝙺*
*┋*☣ *${prefix}𝚂𝙼𝚄𝙶*
*┋*☣ *${prefix}𝙿𝙰𝚃*
*┋*☣ *${prefix}𝙻𝙸𝙲𝙺*
*┋*☣ *${prefix}𝙺𝙸𝚂𝚂*
*┋*☣ *${prefix}𝙰𝚆𝙾𝙾*
*┋*☣ *${prefix}𝙷𝚄𝙶*
*┋*☣ *${prefix}𝙲𝚁𝚈*
*┋*☣ *${prefix}𝙲𝚄𝙳𝙳𝙻𝙴*
*┋*☣ *${prefix}𝙱𝚄𝙻𝙻𝚈*
*╰┈───────────────•*
*[ • 🤓 𝙾𝚃𝙷𝙴𝚁 𝙲𝙼𝙳 🤓 ‎• ]*
*╭┈───────────────•*
*┋*🤓 *${prefix}𝙵𝙰𝙽𝙲𝚈*
*┋*🤓 *${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈*
*┋*🤓 *${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈*
*┋*🤓 *${prefix}𝙶𝙴𝚃*
*┋*🤓 *${prefix}𝙵𝙴𝚃𝙲𝙷*
*┋*🤓 *${prefix}𝚄𝙿𝙳𝙰𝚃𝙴𝙽𝙾𝚆*
*┋*🤓 *${prefix}𝙼𝙿3*
*┋*🤓 *${prefix}TTS*
*┋*🤓 *${prefix}SHORTEN*
*┋*🤓 *${prefix}TEMPMAIL*
*┋*🤓 *${prefix}CHECKMAIL*
*╰┈───────────────•*
*[ • 🤓 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙲𝙼𝙳 🤓 ‎• ]*
*╭┈───────────────•*
*┋*🤓 *${prefix}𝙶𝙸𝚃𝚂𝚃𝙰𝙻𝙺*
*┋*🤓 *${prefix}𝚃𝙸𝙺𝚂𝚃𝙰𝙻𝙺*
*┋*🤓 *${prefix}𝙽𝙿𝙼𝚂𝚃𝙰𝙻𝙺*
*┋*🤓 *${prefix}𝙿𝙾𝙿𝙸𝙽𝙵𝙾*
*┋*🤓 *${prefix}𝙻𝙾𝙾𝙺𝚄𝙿*
*┋*🤓 *${prefix}WACHANNEL*
*╰┈───────────────•*
*[ • 🤵𝙷𝙴𝚁𝙾𝙺𝚄 𝙲𝙻𝙸𝙴𝙽𝚃🤵 ‎• ]*
*╭┈───────────────•*
*┋*🤵 *${prefix}𝙼𝙾𝙳𝙴 <𝙿𝚄𝙱𝙻𝙸𝙲/𝙿𝚁𝙸𝚅𝙰𝚃𝙴>*
*┋*🤵 *${prefix}𝙿𝚁𝙴𝙵𝙸𝚇 <𝚂𝚈𝙼𝙱𝙾𝙻>*
*┋*🤵 *${prefix}𝙰𝚄𝚃𝙾𝚂𝚅𝙸𝙴𝚆 <𝙾𝙽/𝙾𝙵𝙵>*
*┋*🤵 *${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃 <𝙾𝙽/𝙾𝙵𝙵>*
*┋*🤵 *${prefix}𝙰𝙻𝚆𝙰𝚈𝚂𝙾𝙽𝙻𝙸𝙽𝙴 <𝙾𝙽/𝙾𝙵𝙵>*
*┋*🤵 *${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 <𝙾𝙽/𝙾𝙵𝙵>*
*┋*🤵 *${prefix}𝙰𝚄𝚃𝙾𝙱𝙻𝙾𝙲𝙺 <𝙾𝙽/𝙾𝙵𝙵>*
*┋*🤵 *${prefix}𝙰𝙽𝚃𝙸𝙲𝙰𝙻𝙻 <𝙾𝙽/𝙾𝙵𝙵>*
*┋*🤵 *${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵>*
*┋*🤵 *${prefix}𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵>*
*╰┈───────────────•*
🌐 𝗠𝗢𝗥𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗖𝗢𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡! 🌐`;

    await m.React('✅'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '@newsletter',
            newsletterName: "Sarkar-MD",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "✨ Sarkar-MD ✨",
            body: "MY MENU",
            thumbnailUrl: 'https://files.catbox.moe/s1q8so.jpeg', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029VajGHyh2phHOH5zJl73P', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default alive;
