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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_05_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjExLFxuICAgICAgICA4MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDk3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBVZEhDbFg0QXNVb01GYU5EOTczekxxQjZTZXA1eGI1dDJpcDdXbC9BMjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FDN0FBMDFDRDYzMjRCMkYxOTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTM3NTUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EyOUJGRjU1RURENjU1MDA5MkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTM3NTU0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlM0Sm9fUl9XU2R1RUo2SldSaklYQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmFiN2ViOTYtZjQ4NS00OGI3LTgxYzMtZDQ2NmJlYjEwMmYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDc5LFxuICAgICAgNzIsXG4gICAgICAyMjEsXG4gICAgICA2NyxcbiAgICAgIDIwMixcbiAgICAgIDE0LFxuICAgICAgMTU0LFxuICAgICAgMTk0LFxuICAgICAgMjI3LFxuICAgICAgMzgsXG4gICAgICA5MSxcbiAgICAgIDcyLFxuICAgICAgMTM0LFxuICAgICAgMjMsXG4gICAgICAyNyxcbiAgICAgIDkzLFxuICAgICAgNTMsXG4gICAgICAzNixcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICA4NixcbiAgICAgIDQsXG4gICAgICA3MyxcbiAgICAgIDk5LFxuICAgICAgMjAxLFxuICAgICAgMTkwLFxuICAgICAgMTc0LFxuICAgICAgNzEsXG4gICAgICAyMDQsXG4gICAgICAxOTEsXG4gICAgICAzNixcbiAgICAgIDIxNCxcbiAgICAgIDI1MyxcbiAgICAgIDQsXG4gICAgICAyNSxcbiAgICAgIDY5LFxuICAgICAgNDYsXG4gICAgICAxODcsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2VzI2Q1oyOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3ODExMjg5MTo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNhZXNhclwiLFxuICAgIFwibGlkXCI6IFwiODgxNTA0MTIxNTI5MjE6NTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSURBOWJJSEVNcWp0YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5bzVsczdqVFRpQ0N5eWs0UVRZR0l3OTIyY0ZXc2YwaitnQm96OXowaVRBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImo3U0dyMDkreTZaQmVCQzhVaU5xSUN4bzVTbVNLc0xiWlZGMVJUTzJXbDhUdWp3c3hNTEgwQ09pb3AweG1aekRQdVZYVDBaTDl3UGNvenMxbEUzZEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlN1U2R5OTdBcEM0cEtXNkFGQmFHMW5ldTM1OVUvUzVMM2JQTXNBeVZrcW5qYlM4dUN6V0xLelBiTzNEcWN3aUdqL2gwWG8rdzVNR0lzK1BlKy94TERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzgxMTI4OTE6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1Mzc1NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEOTRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ5NC5qc29uIjogIntcImtleURhdGFcIjpcIkZrTkZDeVpjV2w4VS9VWlQ3bHlpVnlHUFh2by9EazVEbENZQlZicUh5VUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4NTgzMDkxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNTM3NTUwMDM3XCJ9Igp9"  // PUT your SESSION_ID 


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
