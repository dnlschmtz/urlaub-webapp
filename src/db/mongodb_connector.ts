import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.29.1/mod.ts";
import { Group } from "./group.ts";


export class MongoDBConnector {

    url: string;
    connection: any;
    collection: any;

    constructor(url: string) {
        this.url = url;
    }

    async connect() {
        this.connection = new MongoClient();
    
        // Connecting to a Mongo Atlas Database
        await this.connection.connect(this.url);

        let database = this.connection.database("web");
        this.collection = database.collection<Group>("groups");
    }

    async insert(group: any) {
        return await this.collection.insertOne(group);
    }

    async update(search: any, update: any) {
        return await this.collection.updateOne();
    }

    async findOne(insertId: string) {
        return await this.collection.findOne({ _id: new Bson.ObjectId(insertId) });
    }

    async listAll() {

    } 

}
