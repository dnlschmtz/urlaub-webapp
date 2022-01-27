import { MongoDBConnector } from "./mongodb_connector.ts";
import "https://deno.land/x/dotenv/load.ts";

const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");

let mongodb = new MongoDBConnector(MONGO_DB_URL);
await mongodb.connect();

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