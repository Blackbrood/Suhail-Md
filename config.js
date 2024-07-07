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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_37_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZTY3JaTk9WYTNNVEl1M1BuWUkyR3QvSDhMTmRucEY1SnJwYnZJaTVaakk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E1M0Y5M0UyMEUxNDdCRjY5RTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjY5NDcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E3RTg3MEZCODU3OURFRDBBNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjY5NDc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1zZXZMT2VsU19DTGtjbFVncDBYUndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTVjN2E5Y2ItYjRkOS00NzM1LWIzYTktNzU2N2RjZWUwNjM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDIxOSxcbiAgICAgIDQxLFxuICAgICAgMTg3LFxuICAgICAgMTksXG4gICAgICAzMixcbiAgICAgIDE2MixcbiAgICAgIDYzLFxuICAgICAgNjAsXG4gICAgICA1OCxcbiAgICAgIDc5LFxuICAgICAgMzEsXG4gICAgICA1NyxcbiAgICAgIDMsXG4gICAgICAyMTksXG4gICAgICAxOTksXG4gICAgICAyMjIsXG4gICAgICAyMTcsXG4gICAgICAxNzQsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgNTUsXG4gICAgICA3NCxcbiAgICAgIDM4LFxuICAgICAgMTM3LFxuICAgICAgMjM1LFxuICAgICAgNjYsXG4gICAgICAxNTIsXG4gICAgICAxMzcsXG4gICAgICAxNjEsXG4gICAgICA2LFxuICAgICAgMTAzLFxuICAgICAgMTEsXG4gICAgICA1NyxcbiAgICAgIDE3NCxcbiAgICAgIDksXG4gICAgICAxODcsXG4gICAgICAxMzQsXG4gICAgICAyNDgsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzZGR1dKMjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzgxMTI4OTE6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDYWVzYXJcIixcbiAgICBcImxpZFwiOiBcIjg4MTUwNDEyMTUyOTIxOjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXVnRLRUZFSnYxcExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMTFHLzUyN3VPeFdhYUpPMzBqQWdHb25NSVd6NVZZRSt6OWNxdW1kaUFuMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEcXM4TE5kdnhZdkdRRnZWOUZUMmJ6Nkowb2YzVW9ZT1VOeFY1SU9mWUZWVEpqeEdRWWFUWHdUUUZ6a3pzYXNXNUM5ZGcybEwwTnZSZTNMSjBPVzFoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1Wld6SjlpbjB0MXk2WmErUzZoalRmM0Jlei9nc0ovcEJDTi81bTM0MHZLSmFzbnIyOXBGREJtQ28wYWlJYXVlZTJOTlVndERDWlcrRXBzOVUwZGdDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc4MTEyODkxOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNjk0NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKN2FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo3YS5qc29uIjogIntcImtleURhdGFcIjpcIk5lRG9DL2NvUG9xR254WVpJOVJXSG5TOHJuZWc3YXp0OHo3TlZFd1VoQ0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxMjIzNzk4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMjY5NDcwNjYyXCJ9Igp9"  // PUT your SESSION_ID 


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
