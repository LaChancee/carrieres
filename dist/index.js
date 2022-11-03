"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const Mines_1 = require("./routes/Mines");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Les routes mines 
app.get("/mines/show/:id", Mines_1.router);
app.post("/mines/add", Mines_1.router);
app.put("/mines/update/:id", Mines_1.router);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(config_1.PORT, () => {
    console.log(`Server listening on ${config_1.PORT}`);
});
