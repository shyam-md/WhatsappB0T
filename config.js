const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="shyam7dx@gmail.com"
global.location="India,Tamilnadu,Thiruvannamalai"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "India,Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/917026104109";
global.website=process.env.GURL || "https://wa.me/917026104109" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/zDHZuWC" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ꜱʜʏᴀᴍ-ᴍᴅ" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917026104109";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://imgur.com/a/zDHZuWC" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_36_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDExLFxuICAgICAgICAyMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICA2MixcbiAgICAgICAgODMsXG4gICAgICAgIDM3LFxuICAgICAgICA4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidmxEbGhwclExNXRQbk5TZFBDck1NY0w1ZWNMQ1dZYnI1SXlIek5Hdjg1MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTcwMjYxMDQxMDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5M0U3QTU0OURCODg2QjY3MUYyRTQ0Nzg5ODQ2NjUyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDQ0Mjk3MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzAyNjEwNDEwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODA3QTI4MTgxMEExNTdFRkJFNkQ1QzFEQjFEQUJCMjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNDQyOTcxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkF2dlI3YmZxVEZDbUdjX1o0LWw3alFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzQyNGQ5OTktNmUxYS00MjBiLThkZmMtNGMxNGFhNDExYzBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDEwLFxuICAgICAgMTMzLFxuICAgICAgMjQ5LFxuICAgICAgMTgxLFxuICAgICAgMjM4LFxuICAgICAgMTA5LFxuICAgICAgMTM4LFxuICAgICAgNjQsXG4gICAgICAxOTEsXG4gICAgICAxNDUsXG4gICAgICAxNzMsXG4gICAgICA1MSxcbiAgICAgIDE1MixcbiAgICAgIDIsXG4gICAgICAxNzIsXG4gICAgICAxNDYsXG4gICAgICAxNTgsXG4gICAgICAyMDAsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxNDYsXG4gICAgICAxMDcsXG4gICAgICAxNjksXG4gICAgICAxNjQsXG4gICAgICAyNCxcbiAgICAgIDE2MSxcbiAgICAgIDEzNyxcbiAgICAgIDExLFxuICAgICAgNDAsXG4gICAgICAyMDQsXG4gICAgICAyMTQsXG4gICAgICAyNCxcbiAgICAgIDEzNSxcbiAgICAgIDYxLFxuICAgICAgMjA0LFxuICAgICAgMTg2LFxuICAgICAgODEsXG4gICAgICAyMDksXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVI0MVhXQ1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzAyNjEwNDEwOToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIsmqJ+G0jVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu6pyxypzKj+G0gOG0jVwiLFxuICAgIFwibGlkXCI6IFwiMTk3ODQzODc2ODYwMTMzOjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AyZDNrWVEwTzJSdVFZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWURIYVNJUkVkc2NaMjdxM3BmZGxSaWtoZWNRcmZnMWtORXBNV2tpT29Faz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvOVF1VmlLQVJQZmdxU2dTaE1GK1o4U09ZZUxFZWxsZnlYNDNtdVZEa25BR1hBbzdMZEpZUjB2NytrRTV3aVpYOWpLVE83d2l1ZDd4SXVVWEFUeXdCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5WGFrUnJkcEtDT1N3d0w5ckkvU1JmRlpPajFURTJzSUh6dWtBdVpGY0dlZTk4RmQ2Zlpod2x0bFQ0YTlVVVhTcXM1Vy9LMWo0QUV5TWNYbHB2bTdoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTcwMjYxMDQxMDk6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDQ0Mjk2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR1L1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHUvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption ||"```『 ᴘᴏᴡᴇʀᴇᴅ ꜱʜʏᴀᴍ-ᴍᴅ 』```",
 
  author : process.env.PACK_AUTHER|| "ꜱʜʏᴀᴍ",
  packname: process.env.PACK_NAME || "ꜱʜʏᴀᴍ-ᴍᴅ",
  botname : process.env.BOT_NAME  || "ꜱʜʏᴀᴍ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ꜱʜʏᴀᴍ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
