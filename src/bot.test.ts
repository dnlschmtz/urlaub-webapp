import { assertNotEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { Bson } from "https://deno.land/x/mongo@v0.29.1/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

import { MongoDBConnector } from "./database/mongodb-connector.ts";

import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"

// Read MongoDB URL from .env file
const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");

const mongodb = new MongoDBConnector(MONGO_DB_URL);

await mongodb.connect();

let id: Bson.ObjectId | undefined;

// Test for insert
Deno.test("#1 Check for newGroup function", async () => {
    const text = "newgroup test";
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
    }

    assertNotEquals(id, undefined);
});

// Test for finding collection by id
Deno.test("#2 Check finding collection by id", async () => {
    if(id === undefined) return;

    const foundCollection = await mongodb.find(id?.toString());
    assertNotEquals(foundCollection, undefined);
});



