import { Bson } from "https://deno.land/x/mongo@v0.29.1/mod.ts"; 

export interface Group {
    _id: Bson.ObjectId;
    name: string;
    member: any;
}