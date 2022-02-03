import { Bson, MongoClient, Collection } from "https://deno.land/x/mongo@v0.29.1/mod.ts";
import { Group } from "./group.ts";


export class MongoDBConnector {
    url: string;
    connection: MongoClient;
    collection: Collection<Group> | undefined;

    constructor(url: string) {
        this.url = url;
        this.connection = new MongoClient();
    }

    async connect() {
        // Connecting to a Mongo Atlas Database
        await this.connection.connect(this.url);

        let database = this.connection.database("web");
        this.collection = database.collection<Group>("groups");
    }

    async insert(group: any) {
        return await this.collection?.insertOne(group);
    }

    async update(query: any, update: any) {
        return await this.collection?.updateOne(query, update);
    }

    async find(insertId: string) {
        return await this.collection?.findOne({ _id: new Bson.ObjectId(insertId) });
    }

    async findAll() {
        return await this.collection?.find({}).toArray();
    } 

    async delete(insertId: string) {
        return await this.collection?.deleteOne({ _id: new Bson.ObjectId(insertId) });
    }

}
