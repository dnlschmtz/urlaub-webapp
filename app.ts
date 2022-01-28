import "https://deno.land/x/dotenv/load.ts";
import { createTelegramBot } from "./src/bot.ts";
import { serveWeb } from "./src/server.ts";
import { MongoDBConnector } from "./src/db/mongodb_connector.ts";


const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");

// Webserver starten
const webApp = serveWeb(3000);

// Bot straten
const bot = createTelegramBot(TOKEN);

console.log("Alles läuft :)");