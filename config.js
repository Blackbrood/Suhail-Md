const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://caesar:OLUSUNLE@cluster0.lmzgxmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Gymo52/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Outlaw²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348078112891";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078112891";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_08_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkyLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM3LFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY0LFxuICAgICAgICA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNnJPbTVYdXZKL1l2KzVBNkh0MmRnaUhNOGUweE5kSDJEUHNNSnhKRW1Haz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc4MTEyODkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTU2QjI0RkNFN0U5NTY4NkRFNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk0ODI4ODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc4MTEyODkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTFEMDU0RjVCNkY4Q0I3RTU5QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk0ODI4OTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRXpYM1RFQ0FRUUdNSWdYTU1OR0dVQVwiLFxuICBcInBob25lSWRcIjogXCI5MzJmOGE5Zi02YjMyLTQ3YzEtYWYxMy0xMDdmYTRlNDdmZGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMjQ1LFxuICAgICAgMTE5LFxuICAgICAgMTg4LFxuICAgICAgMTY2LFxuICAgICAgMTk0LFxuICAgICAgNTksXG4gICAgICA0OSxcbiAgICAgIDI1NCxcbiAgICAgIDE3MixcbiAgICAgIDE0MyxcbiAgICAgIDE5NyxcbiAgICAgIDIwNyxcbiAgICAgIDEwMCxcbiAgICAgIDEyMixcbiAgICAgIDExLFxuICAgICAgMjQ5LFxuICAgICAgMTg3LFxuICAgICAgNTksXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMjAsXG4gICAgICAyMjQsXG4gICAgICAxMTAsXG4gICAgICAxMDYsXG4gICAgICAxNTIsXG4gICAgICA2NSxcbiAgICAgIDE2OCxcbiAgICAgIDEyNixcbiAgICAgIDIxNixcbiAgICAgIDUzLFxuICAgICAgMTMsXG4gICAgICAxNCxcbiAgICAgIDE1NixcbiAgICAgIDE1NCxcbiAgICAgIDIyOSxcbiAgICAgIDE0NixcbiAgICAgIDE0LFxuICAgICAgMTIsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZXZnUGNORUlMMDlMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1MeGsyOGlkWHVyTEs1ZUJnRTQ2SS9PZXFTUjdmOVdRZ1hnMjRudGEwRFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWExybGhnMjVHRitoMDBCVTlETkhTRjJubEh1N0l0cEEzRGdQTGV1ckQ4QjEzTDdNdzBTSG9WWWw5aXNaMkRjMmwzMDhuYVUzWGM2VnAvNjc2NEJVQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUmNjRUY2SEN4bVl4TytMcG05VkV2ZlhEenJSTis3eEhLOWc4dWx3NmMvTHUrUWJmQW80dXZkQ1kzazRma1JtQTBzRmdobWNwdmk3L1ZCNHBzUUgvZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc4MTEyODkxOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2Flc2FyXCIsXG4gICAgXCJsaWRcIjogXCI4ODE1MDQxMjE1MjkyMTozOUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzgxMTI4OTE6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk0ODI4ODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMTXZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNdi5qc29uIjogIntcImtleURhdGFcIjpcInBCQlgzQ1o3TFpzTE9kRWJ2N3RaejVkL1A5Wk56aFQvSi8zdll5RE5iODA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NDgyODg3MjUzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Outlaw²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Outlaw-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Caesar",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-e20aljveXK3imt9IgaQhT3BlbkFJMphyLKWOubU5rhmKUlKx",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || " 3e57046161ccf9ac1f4b9e03828a5fe9";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
