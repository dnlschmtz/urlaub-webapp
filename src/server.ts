import { opine, serveStatic } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { dirname, join } from "https://deno.land/x/opine@2.1.1/deps.ts";


export function serveWeb(port: number) {
  const app = opine();
  const __dir = dirname(import.meta.url);

  app.use(serveStatic(join(__dir, "../public")));
  app.use(serveStatic(join(__dir, "../build")));

  app.use("/static", serveStatic(join(__dir, "../public")));

  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  app.listen(
    port,
    () => console.log("server has started on http://localhost:3000 🚀"),
  );

  return app;
}