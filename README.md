# Roblox To Discord #

## What Does it Do ##
This program allows you to interact between a roblox game and discord using node js.

In Game

![InGame](https://cdn.discordapp.com/attachments/717861061042241538/857061194799513630/unknown.png)

In Discord

![InDiscord](https://cdn.discordapp.com/attachments/717861061042241538/857061475586539530/unknown.png)

## Setup ##
### Node Js ###
* Get some kind of hosting service, I used [host sapling](https://hostsapling.net/) so I reccomend using them as well because they are super cheap and provide the ip of your server which is needed for this.
* Upload all the files found in the repository except for the script.lua file onto the server. Then rename .env.example to .env and fill in the variables using the keys bellow.
* Start your server
### .ENV ###
```
TOKEN=your bots discord token(you can find how to make one online)
USERNAME=random password (remember this)
PASSWORD=random password (remember this)
PORT=the port(image bellow shows what that is)
CHANNEL=the id of the channel that the message will be sent
```
![WhatIsAPort](https://cdn.discordapp.com/attachments/717861061042241538/857063716586389544/Screenshot_2021-06-22_180503.png)




### Roblox ###
* Create a new script in the server script service
* Copy the code found in script.lua and paste it in
* Replace the string after password with your password that you put in the .env file, replace the username with the username that you put in the .env file and replace the ip and port with the ip and port of your server

![Wheretoputthevaribales](https://cdn.discordapp.com/attachments/717861061042241538/857064446279155722/Screenshot_2021-06-22_180757.png)

### Obfuscate your roblox code to make sure that hacks cant find the ip of your server and ddoss it etc. ###

* First create a random txt file on your desktop and put your script into it.

* Go to https://obfuscator.aztupscripts.xyz/

* Click on input file and use the txt file you made. Then use the settings in the image bellow then click obfuscate
  
![Settings](https://cdn.discordapp.com/attachments/717861061042241538/857065579394629632/Screenshot_2021-06-22_181226.png)

Accept the download and copy the contents. Replace your code in roblox with the contents of the obfuscated version.

Done! It should now work.

## Conclusion ##
If you enjoyed it you can star it, if you are having errors contact me using the ways found on my github profile

