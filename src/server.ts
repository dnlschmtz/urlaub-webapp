import { opine, serveStatic } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { dirname, join } from "https://deno.land/x/opine@2.1.1/deps.ts";


const handleWebsocket = (socket: WebSocket) => {
    socket.addEventListener("open", (_) => {
        socket.send("ping");
        console.log("sent ping to client");
    });

    socket.addEventListener("close", (_) => {
        console.log("socket closed");
    });

    socket.addEventListener("message", (e) => {
        if(e.data == "command") {
            console.log("Received a message");
        }
    });
}


export function serveWeb(port: number) {
    const app = opine();
    const __dir = dirname(import.meta.url);

    // Serve static dirs
    app.use(serveStatic(join(__dir, "../public")));
    app.use(serveStatic(join(__dir, "../build")));

    // Register websocket
    app.get("/ws", async (req, res, next) => {
        if (req.headers.get("upgrade") === "websocket") {
            const sock = req.upgrade();
            await handleWebsocket(sock);
        } else {
            res.send("You've gotta set the magic header...");
        }
    
        next();
    });

    // 404 Error handling
    app.use(function(req, res) {
        res.setStatus(404);
        res.sendFile(join(__dir, "../public/404.html"));
    });

    app.listen(
        port,
        () => console.log(`server has started on http://localhost:${port} 🚀`),
    );

    return app;
}
