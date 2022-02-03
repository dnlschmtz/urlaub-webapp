import { assertNotEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { Bson } from "https://deno.land/x/mongo@v0.29.1/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

import { MongoDBConnector } from "./mongodb-connector.ts";


// Read MongoDB URL from .env file
const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");

const mongodb = new MongoDBConnector(MONGO_DB_URL);

await mongodb.connect();

let id: Bson.ObjectId | undefined;

// Test for insert
Deno.test("#1 Check for insert", async () => {
    id = await mongodb.insert({
        name: "Unit Test",
        description: "Testbeschreibung",
        targets: [
            {
                name: "Paris",
                x: 0.0,
                y: 0.0,
                votes: 0,
            }
        ],
        dates: []
    });

    assertNotEquals(id, undefined);
});

// Test for finding collection by id
Deno.test("#2 Check finding collection by id", async () => {
    if(id === undefined) return;

    const foundCollection = await mongodb.find(id?.toString());
    assertNotEquals(foundCollection, undefined);
});

// Test find all
Deno.test("#3 Check finding all", async () => {
    const foundAll = await mongodb.findAll();
    assertNotEquals(foundAll, undefined);
});

// Test update of collection
Deno.test("#4 Check update of collection", async () => {
    if(id === undefined) return;

    const updatedCollection = await mongodb.update({
        _id: id
    }, { $set: {
        dates: [
            "Test",
            "Test2",
            "Test3"
        ]
    }});

    assertNotEquals(updatedCollection, undefined);
});

// Test deletion
Deno.test("#5 Check deletion of collection", async () => {
    if(id === undefined) return;

    const result = await mongodb.delete(id?.toString());
    assertNotEquals(result, undefined);
});