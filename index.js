const discord = require("discord.js")
const express = require("express")
const cors = require("cors")
const noblox = require("noblox.js")
require('dotenv').config();

const client = new discord.Client();
const app = express()

app.use(cors())
app.use(express.json())
app.post("/api/secret", async (req, res) => {
        if(req.body.username === process.env.USERNAME && req.body.password === process.env.PASSWORD) {
            const chatEmbedInformation = new discord.MessageEmbed()
                .setColor("#DD8452")
                .setTitle('Chat Message')
                .addFields(
                    { name: 'Username', value: req.body.player, inline: true },
                    { name: 'Message', value: req.body.message, inline: true },
                )
                .setTimestamp()
            client.channels.cache.get(process.env.CHANNEL).send(chatEmbedInformation);
            res.json("sucess")
    }else{
        res.json("incorrect")
    }
})

app.listen(process.env.PORT)


client.login(process.env.TOKEN);