import "https://deno.land/x/dotenv/load.ts";

import { createTelegramBot } from "./src/bot.ts";
import { serveWeb } from "./src/server.ts";
import { MongoDBConnector } from "./src/database/mongodb-connector.ts";


// Read Telegram Bot Token from .env file
const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot TOKEN is not provided");

// Read MongoDB URL from .env file
const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");


const mongoDB = new MongoDBConnector(MONGO_DB_URL);
await mongoDB.connect();


// Webserver starten
const webApp = serveWeb(3000, mongoDB);

// Bot straten
const bot = createTelegramBot(TOKEN);

console.log("Alles läuft :)");