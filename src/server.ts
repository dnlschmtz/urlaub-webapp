import { opine, serveStatic } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { dirname, join } from "https://deno.land/x/opine@2.1.1/deps.ts";


const env = Deno.env.get("DENO_ENV");
const app = opine();

const __dir = dirname(import.meta.url);


app.use(serveStatic(join(__dir, "../public")));
app.use(serveStatic(join(__dir, "../public", "css")));

app.use("/static", serveStatic(join(__dir, "../public")));


app.get("/", function (req, res) {
  res.send("Hello World");
});


app.listen(
  3000,
  () => console.log("server has started on http://localhost:3000 🚀"),
);


export { app };