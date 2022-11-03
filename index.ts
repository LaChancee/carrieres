require("dotenv").config();


import { generateKey } from "crypto";
import express from "express";
import { PORT } from "./src/config/config";
import { router } from "./src/routes/Mines";

const app = express();
app.use(express.json());

// Les routes mines 
app.get("/mines/show/:id", router);


app.get("/", (req, res) => res.sendFile("Hello World!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
