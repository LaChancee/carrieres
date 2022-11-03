require("dotenv").config();


import { generateKey } from "crypto";
import express from "express";
import { PORT } from "./config/config";
import { router } from "./routes/Mines";

const app = express();
app.use(express.json());

// Les routes mines 
app.get("/mines/show/:id", router);
app.post("/mines/add", router);
app.put("/mines/update/:id", router);
app.delete("/mines/delete/:id", router);


app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
