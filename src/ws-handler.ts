import { MongoDBConnector } from "./database/mongodb-connector.ts";


export const handleWebsocket = async (socket: WebSocket, mongoDB: MongoDBConnector) => {
    socket.addEventListener("open", (_) => {
        console.log("socket opened");
    });

    socket.addEventListener("close", (_) => {
        console.log("socket closed");
    });

    socket.addEventListener("message", async (e) => {
        console.log(e.data);
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
                    _id: id
                }, { $set: {
                    description: description
                }});
                break;

            case "update-votes":
                break;

            case "update-targets":
                break;

            case "update-dates":
                break;

            default:
                console.log("Got invalid WebSocket input: " + e.data);
        }
    });
}