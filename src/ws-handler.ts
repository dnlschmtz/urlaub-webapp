import { MongoDBConnector } from "./database/mongodb-connector.ts";
import { Bson } from "https://deno.land/x/mongo@v0.29.1/mod.ts";


export const handleWebsocket = async (socket: WebSocket, mongoDB: MongoDBConnector) => {
    socket.addEventListener("message", async (e) => {
        const args = e.data.split(" ");

        if(args.length < 2) {
            return;
        }

        const id = args[1];

        switch(args[0].toLowerCase()) {
            case "fetch-group":
                const group = await mongoDB.find(id);

                if(group) {
                    socket.send(JSON.stringify(group));
                } else {

                }
                break;

            case "update-description":
                const description = args.slice(2).join(" ");

                await mongoDB.update({
                    _id: new Bson.ObjectId(id)
                }, { $set: {
                    description: description
                }});
                break;

            case "update-votes":
                await mongoDB.update({
                    _id: new Bson.ObjectId(id),
                    "targets.name": args[2]
                }, { $inc: {
                    "targets.$.votes": 1
                }});
                break;

            case "update-targets":
                await mongoDB.update({
                    _id: new Bson.ObjectId(id)
                }, { $push: {
                    targets: 
                        {
                            name: args[2],
                            x: parseFloat(args[3]),
                            y: parseFloat(args[4]),
                            votes: 0,
                        }
                }});
                break;

            case "update-dates":
                await mongoDB.update({
                    _id: new Bson.ObjectId(id)
                }, { $push: {
                    dates: 
                        {
                            name: args[2],
                            start: args[3],
                            end: args[4],
                        }
                }});
                break;

            default:
                console.log("Got invalid WebSocket input: " + e.data);
        }
    });
}