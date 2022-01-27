import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"


export function createTelegramBot(token: string) {
    const bot = new TelegramBot(token);

    bot.on(UpdateType.Message, async (message: any) => {

        const text = message.message.text || "I can't hear you";
        console.log(text);

        if(text.startsWith("newGroup")) {
            let antwort = text.replace("newGroup", "");
            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Neue Gruppe ${antwort} erstellt` })
            await bot.sendMessage({ chat_id: message.message.chat.id, text: '[Deine Gruppe](https://www.latlmes.com/opinion/teenagers-spend-their-time-using-their-phones-is-it-worth-it-1)', parse_mode:'MarkdownV2' })
            return;
        }
        if(text.startsWith("NewGroup")) {
            let antwort = text.replace("NewGroup", "");
            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Neue Gruppe ${antwort} erstellt` })
            await bot.sendMessage({chat_id: message.message.chat.id, text: '[Deine Gruppe](https://www.latlmes.com/opinion/teenagers-spend-their-time-using-their-phones-is-it-worth-it-1)', parse_mode:'MarkdownV2' })
            return;
        }
        if(text.startsWith("Newgroup")) {
            let antwort = text.replace("NewGroup", "");
            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Neue Gruppe ${antwort} erstellt` })
            await bot.sendMessage({chat_id: message.message.chat.id, text: '[Deine Gruppe](https://www.latlmes.com/opinion/teenagers-spend-their-time-using-their-phones-is-it-worth-it-1)', parse_mode:'MarkdownV2' })
            return;
        }
        if(text.startsWith("newgroup")) {
            let antwort = text.replace("NewGroup", "");
            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Neue Gruppe ${antwort} erstellt` })
            await bot.sendMessage({chat_id: message.message.chat.id, text: '[Deine Gruppe](https://www.latlmes.com/opinion/teenagers-spend-their-time-using-their-phones-is-it-worth-it-1)', parse_mode:'MarkdownV2' })
            return;
        }
        if(text.startsWith("Help")) {
            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Schreibe: \nNewGroup \nHelp` })
            return;
        }

        await bot.sendMessage({ chat_id: message.message.chat.id, text: `Unbekannter Befehl ${text}. Du kannst eine neue Gruppe mit newGroup erstellen.` })

        });

    bot.run({
        polling: true,
    });

    return bot;
}
