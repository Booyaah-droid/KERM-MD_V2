//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50941469808";
global.owner = process.env.OWNER_NUMBER || "50941469808";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUoveUlsbTY2OUswTWFyZkNxWGdkREdiRmc4UjJQeUswZWdqVkp6RGUxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGQwZ21pWXdBeGtCTUppZlFlTEFHMWtwOXV2ZnNDdStRM1pkNHkxazRIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RExoRTNLaUNIeXMrbDNyQ1pJaTBpNHBmVnhXS21oaENHT09maXNUYkZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiejFjYVRiZUlGWGhxZVZ1SVBvc1VkcDRCOFo3YWR6VVJXNWZOUjRMeTNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGTXg3aS8yNUI1K0ptWmVZTGtvNXJTZVdkR0RXMTVlRHZVQ2FSeTY0bE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InErNEJodTVyOVdqS2xUUjZ2bFZUc1doaDRZMGJyTjNYTTJFbTBVaUh3Mm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xmd2dFMjN5SXQxZnVFSERKYUJJMndueTQ2MEZIWHVjTkp0VTBoazZsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUYxc0NlU1RZSlAyKzdtZ2JZQzBJZ1dNQ29nbkRLRjRIZlI2OGVvdlpWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlowWnRlWGdkNXl3S1lmVkNLTkFKVzM1aFJoNzFnTXA2dFhWODBmOW45RXZ0WHZhWDByN25udWp4UEhRN0tvYmN2UkNZb0szK0twZTFFWU1iYjZLNkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6InBjNmt4YjYwVllhMXpETDdzMjBQRzJoclBQSjB3K2RNMzhQdHI4RDljNFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpqOFlBZ252U2otV2E0MUtpVzdSR1EiLCJwaG9uZUlkIjoiMjYzNjAyZjQtYjYxMC00NzdmLWE0ZDgtNDhmM2YxYmRjMGY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxlUG1JL0RrMVIwRndrUGx6REw1NEpnMk1aYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlVjBPeU50YldlcmFxalUzakZjd2xrSDkxWlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUkc5NTNDTlciLCJtZSI6eyJpZCI6IjUwOTQxNDY5ODA4OjI1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKK1o5dUFGRUxxQTZMa0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOS1ZENjBpOUpDT2ovOTRZanZUSE5nbXJPVlNYSUxnU3duSnFHc2wzcVc0PSIsImFjY291bnRTaWduYXR1cmUiOiJOMnorQjFHNjNKOTdlc2crclA2VXV1b0JWQTFwNnN2TVg5dDk0MFV4bEtGNXNBRlNZbzlabkxiRDhFSURGK1VJRjQrR0JkZkxONHN2Z3o5Ykw2ZXJCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRHJDZ2tjanR5SVFMTEtsYXU0aUZtY2lERkorSVptY3U1Y2ZWMHhWTE4ybTIzZGM1RlBMaldyZVphQzhLaTRoczR0N0V1bHVVb2xnV2M5bFVMRzlqQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0MTQ2OTgwODoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUU2xRK3RJdlNRam8vL2VHSTcweHpZSnF6bFVseUM0RXNKeWFockpkNmx1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxODU0NDA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9sRiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
