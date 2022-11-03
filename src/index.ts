require("dotenv").config();


import { generateKey } from "crypto";
import express from "express";
import { PORT } from "./config/config";
import { Concessionsrouter } from "./routes/Concessions";
import { router } from "./routes/Mines";

const app = express();
app.use(express.json());

// Les routes mines 
app.get("/mines/show/:id", router);
app.post("/mines/add", router);
app.put("/mines/update/:id", router);
app.delete("/mines/delete/:id", router);

// Les routes concessions
app.get("/concessions/show/:id", Concessionsrouter);
app.post("/concessions/add", Concessionsrouter);
app.put("/concessions/update/:id", Concessionsrouter);
app.delete("/concessions/delete/:id", Concessionsrouter);
app.get("/concessions/show/mines/:id", Concessionsrouter);
app.get("/concessions/show/contact/:id", Concessionsrouter);
app.get("/concessions/all/:id", Concessionsrouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
