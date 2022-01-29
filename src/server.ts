import { opine, serveStatic } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { dirname, join } from "https://deno.land/x/opine@2.1.1/deps.ts";


export function serveWeb(port: number) {
    const app = opine();
    const __dir = dirname(import.meta.url);

    // Serve static dirs
    app.use(serveStatic(join(__dir, "../public")));
    app.use(serveStatic(join(__dir, "../build")));

    // 404 Error handling
    app.use(function(req, res) {
        res.setStatus(404);
        res.sendFile(join(__dir, "../public/404.html"));
    });

    // Register websocket
    // ...

    app.listen(
        port,
        () => console.log(`server has started on http://localhost:${port} 🚀`),
    );

    return app;
}