'use strict'

import { Client } from 'discord.js'

import config from '../config.json' assert { type: "json" }

(async () => {
    const client = new Client({ intents: config.intentsOption });

    client.on('ready', async () => {
        console.log(`${client.user.tag} is Ready!`)
    })

    client.user?.setPresence({
        status: "online",
        activities: [{
            name: config.status,
            type: "Listening"
        }]
    })

    client.login(process.env.BOT_TOKEN)
        .then(() => {
        }).catch(() => {
            console.log('Invaid Login');
        });
})();
