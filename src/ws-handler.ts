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

        if(args.length < 1) {
            return;
        }

        switch(args[0].toLowerCase()) {
            case "fetch-group":
                const group = await mongoDB.find(args[1]);

                if(group) {
                    socket.send(JSON.stringify(group));
                }
                break;

            case "update-group":
                break;

            default:
                console.log("Got invalid WebSocket input: " + e.data);
        }
    });
}