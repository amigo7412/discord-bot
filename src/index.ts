import { Client } from "discord.js";
import { IntentOptions } from "../config/IntentOptions";

(async () => {
    const BOT = new Client();

    await BOT.login(process.env.BOT_TOKEN);

    new Client({ intents: IntentOptions })
})();