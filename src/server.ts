import { opine, serveStatic } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { dirname, join } from "https://deno.land/x/opine@2.1.1/deps.ts";


export function serveWeb(port: number) {
    const app = opine();
    const __dir = dirname(import.meta.url);

    // Serve static dirs
    app.use(serveStatic(join(__dir, "../public")));
    app.use(serveStatic(join(__dir, "../build")));

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
    
    app.use((_, res, __) => {
        res.setHeader("access-control-allow-origin", "*");
        res.setHeader(
        "access-control-expose-headers",
        "Upgrade,sec-websocket-accept,connection",
        );
    
        res.send();
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
