import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { Bson } from "https://deno.land/x/mongo@v0.29.1/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import { assertNotEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"

import { MongoDBConnector } from "./database/mongodb-connector.ts";


// Read MongoDB URL from .env file
//const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
//if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");


export function createTelegramBot(token: string) {

    const bot = new TelegramBot(token);

    bot.on(UpdateType.Message, async (message: any) => {

        const text = message.message.text.toLowerCase() || "I can't hear you";

        console.log(text);

        if(text.startsWith("newgroup")) {
            let antwort = text.replace("newgroup", "");

            const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
            if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");

            const mongodb = new MongoDBConnector(MONGO_DB_URL);

            await mongodb.connect();

            let id: Bson.ObjectId | undefined;

            id = await mongodb.insert({
                name: antwort,
                description: "",
                targets: [],
                dates: []
                });


            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Neue Gruppe ${antwort} erstellt` })
            await bot.sendMessage({ chat_id: message.message.chat.id, text: '[Klicke hier auf auf deine Gruppenseite zu kommen](https://localhost:3000/?id=${id})', parse_mode:'MarkdownV2' })
            await bot.sendMessage({ chat_id: message.message.chat.id, text: `https://localhost:3000/?id=${id}` })
            console.log(id);
            return;
        }
        if(text.startsWith("info")) {

            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Deine Gruppen:
            ` })
            return;

        }
        if(text.startsWith("help")) {

            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Schreibe: \nNewGroup \nHelp` })
            return;
        }

        await bot.sendMessage({ chat_id: message.message.chat.id, text: `Unbekannter Befehl ${text}. Du kannst mit help eine liste der befehle bekommen.` })

        });

    bot.run({

        polling: true,
    });

    return bot;
}
