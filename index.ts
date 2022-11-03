require("dotenv").config();

import cors, { CorsOptions } from "cors";
import { generateKey } from "crypto";
import express from "express";
import { generateToken } from "./authentification/jwt";
import { PORT } from "./config/constants";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.sendFile("Hello World!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
