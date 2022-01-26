import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.29.1/mod.ts";


export async function connect() {
    const client = new MongoClient();

    // Connecting to a Mongo Atlas Database
    await client.connect({
        db: "<db_name>",
        tls: true,
        servers: [
        {
            host: "<db_cluster_url>",
            port: 27017
        },
        ],
        credential: {
        username: "<username>",
        password: "<password>",
        db: "<db_name>",
        mechanism: "SCRAM-SHA-1"
        }
    });
}

export async function insert() {

}

export async function update() {

}

export async function find() {
    
}