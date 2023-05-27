import { Client, MessageButton, MessageActionRow } from 'discord.js'

import config from '../config.json' assert { type: "json" }

const countryButtons = {
    buttonForUs: new MessageButton().setStyle("SECONDARY").setEmoji("1️⃣").setCustomId("United States"),
    buttonForUk: new MessageButton().setStyle("SECONDARY").setEmoji("1️⃣").setCustomId("United Kingdom"),
    buttonForFr: new MessageButton().setStyle("SECONDARY").setEmoji("1️⃣").setCustomId("France"),
    buttonForDe: new MessageButton().setStyle("SECONDARY").setEmoji("1️⃣").setCustomId("Germany")
}

let countriesRow = new MessageActionRow().addComponents([...countryButtons]);

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

    client.on('interactionCreate', async () => {
        var SupportEmbed =
        {
            author: { name: config.embed_content.title, icon_url: client.user.displayAvatarURL({ size: 2048, dynamic: false, format: "png" }) },
            timestamp: new Date(),
            color: `0x${config.embed_content.color}`,
            thumbnail: { url: config.thumbnail ? config.thumbnail_url : client.user.displayAvatarURL({ size: 2048, format: "png", dynamic: false }) },
            description: `\u200b\n1️⃣ ${config.embed_content.question_1}\n\u200b\n2️⃣ ${config.embed_content.question_2}\n\u200b\n3️⃣ ${config.embed_content.question_3}\n\u200b\n4️⃣ ${config.embed_content.question_4}\n\u200b\n5️⃣ ${config.embed_content.question_5}\n\u200b\n> **None Of The Above**\nIf Your Question is not in the Above List.(Further Assistance)\n\u200b\n`,
            footer: {
                text: interaction.guild.name
            }
        }
        if (interaction.isCommand()) {
            if (!owners.includes(interaction.user.id)) {
                await interaction.reply({ content: "You aren\'t Authorized To use This Command!", ephemeral: true })
            }

            await interaction.reply({ embeds: [SupportEmbed], components: [countriesRow] })
        }
    })

    client.login(process.env.BOT_TOKEN)
        .then(() => {
        }).catch(() => {
            console.log('Invaid Login');
        });
})();
