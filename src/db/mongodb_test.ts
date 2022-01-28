import { Bson } from "https://deno.land/x/mongo@v0.29.1/mod.ts";
import { MongoDBConnector } from "./mongodb_connector.ts";
import "https://deno.land/x/dotenv/load.ts";

const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");

let mongodb = new MongoDBConnector(MONGO_DB_URL);
await mongodb.connect();

/*
console.log(await mongodb.insert({
    name: "Testgruppe",
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
}));

console.log(await mongodb.find("61f2bb1a2ef04b8e554abc56"));

console.log(await mongodb.update({
    _id: new Bson.ObjectId("61f2ba3b0bd8bfe515921217")
}, { $set: {
    dates: [
        "Test",
        "Test2",
        "Test3"
    ]
}}));

console.log(await mongodb.delete("61f2bb1a2ef04b8e554abc56"));*/

console.log(await mongodb.listAll());