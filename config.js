const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_26_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNixcbiAgICAgICAgNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVwYVZWNTEvZTFFODYxTGcrcThzZHErclNQcy9ncVI2b2tpYWNNLzJEOEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Njc3NDg4MTUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTIzREQxMTMxRjk0ODU4Mjg4M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyMTAzNjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2Nzc0ODgxNTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNTUyQkZFREY2N0E3QzQ0N0REXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTIxMDM2NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5YWtFVURxMlRTcTRMdUJHdDlPYjBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmYjRlNTMwLTE3NDgtNDYzMS1hNDFmLWY4YzFmZTcyOTBjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAyMyxcbiAgICAgIDE5MyxcbiAgICAgIDE4MSxcbiAgICAgIDk5LFxuICAgICAgODQsXG4gICAgICAxODQsXG4gICAgICAxMDYsXG4gICAgICAyNTEsXG4gICAgICAxOTgsXG4gICAgICA1MixcbiAgICAgIDc4LFxuICAgICAgNTAsXG4gICAgICAyNDEsXG4gICAgICA2NyxcbiAgICAgIDIwOSxcbiAgICAgIDk4LFxuICAgICAgMTk1LFxuICAgICAgNDYsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAyMjUsXG4gICAgICA2NSxcbiAgICAgIDE4NyxcbiAgICAgIDIwMCxcbiAgICAgIDIwNSxcbiAgICAgIDIyNyxcbiAgICAgIDI0NSxcbiAgICAgIDE2MixcbiAgICAgIDI5LFxuICAgICAgNzYsXG4gICAgICA2NCxcbiAgICAgIDE0OCxcbiAgICAgIDIwNSxcbiAgICAgIDk5LFxuICAgICAgNTcsXG4gICAgICAxNTcsXG4gICAgICA2OSxcbiAgICAgIDEyNyxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0N6Nk1VT0VQV2k1TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpSzBTSkI0RTduRzZvUk5ia2ZzYkEzbko3ZTNud29SV2dKR0psTEhxZzFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9ZK2dnMmtpYVJucUF1TXVTUGdaK1lSQnNqNXhTQ3ZQL0cvTWhZZnJtY0Z3cGVVcXNLRHoxQjljS2piUjZRUmoxdG83T1M1RGpjMlZoOHBHWEZXTWlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNXYmN4UGlId2xuSWF4bFBzOGdPQUkxQUpSYTd1WFdpSlZNNHVRdlFsUGhXakhsbjFxQzlRS1BtbDhDU1h1T0RmQ01wYnpGMTBiOTdKcko3SkZyZGdnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Njc3NDg4MTUxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGltXCIsXG4gICAgXCJsaWRcIjogXCIyNzk1NzI2MDgyMDQ5NTU6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2Nzc0ODgxNTE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyMTAzNjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJK1lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUkrWS5qc29uIjogIntcImtleURhdGFcIjpcIlpyeHJEbW53YnVJNmRuZ1BtbWQ1THFmWHNMSy9sWlRKTWZPWEREYUxkZG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzkwNDUxMDQzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE5MjEwMzYxNjA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
