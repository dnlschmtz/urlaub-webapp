import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.29.1/mod.ts";


export class MongoDBConnector {

    url: string;
    connection: any;

    constructor(url: string) {
        this.url = url;
    }

    async connect() {
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

    async insert() {

    }

    async update() {

    }

    async find() {

    }

}
