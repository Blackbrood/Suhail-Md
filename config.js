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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_10_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICA4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNSxcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwa0pIVjFLRFhvS2QvSmY5V1NmRi9Ud1dtWUliS3NHTEppK1QrNWNDTVF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNzgxMTI4OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQUNCQTA5NzgzRjNFQjhCNDNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE3MDYzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNzgxMTI4OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRURFMUFCMDhDOEYwQ0JCM0ZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE3MDYzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3bnltdVR5VFRIV2pFaVVIZktjWTZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImY0MzQ5YmUzLWQ1YzQtNGM4ZC04MTk3LTZkNzAxNWQ4NjZmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAxMTEsXG4gICAgICAxMzYsXG4gICAgICAxMjAsXG4gICAgICAxMjYsXG4gICAgICAxMTgsXG4gICAgICAxOTgsXG4gICAgICAyMTcsXG4gICAgICA4MSxcbiAgICAgIDE2NSxcbiAgICAgIDM4LFxuICAgICAgOTMsXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDEyOSxcbiAgICAgIDE0MSxcbiAgICAgIDExMSxcbiAgICAgIDI0NixcbiAgICAgIDkyLFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMTIxLFxuICAgICAgMTc5LFxuICAgICAgMTczLFxuICAgICAgMjA4LFxuICAgICAgODAsXG4gICAgICA2MixcbiAgICAgIDE4MSxcbiAgICAgIDEwNixcbiAgICAgIDgwLFxuICAgICAgMTU3LFxuICAgICAgMTk3LFxuICAgICAgMjM5LFxuICAgICAgMTMsXG4gICAgICAxNjksXG4gICAgICAxMzgsXG4gICAgICAxNTIsXG4gICAgICAxOTAsXG4gICAgICAxOTgsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzNHSjJTQjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzgxMTI4OTE6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg4MTUwNDEyMTUyOTIxOjQ5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNhZXNhclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0syazBOWUNFSWp4bnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWmFLTkt2WTd0TWNRTWNSNFhBdEVQTVhRQXpObUF6RXVldHJiTlVFMmlVaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUODNmZnVnczdlS1N6ejNMbXVEMGhmMG1GU0pHek5rbEFDQjl4WnlKdzFRemFTZlFsaGVnWkt6UlBEQTA4Wi9yVVBlVnZLMENDVHhWMXpyV1lqa1BEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2bldBRmdaUGlEMmZGb21IeVBGVXF2cnAzVkRlalNUNkJIdXhlOHg2eklOUVRKMlVjVHAvYW5jUXlwMjdNbmF4OG5PcGc3ci9hYnBSZXNYUHNOcU9EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc4MTEyODkxOjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNzA2MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPenJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU96ci5qc29uIjogIntcImtleURhdGFcIjpcIm5NSnUzZXlTUkU5UXM5bnlwMEpDaXhHUlNBRzI0OStZUTRTaXZmRlVKQ1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE4NTQxMzU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNzA2MzU0MDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || " 382461a4a0b0e16cefda7ee92c59c87e";
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
