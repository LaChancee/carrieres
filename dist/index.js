"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const Concessions_1 = require("./routes/Concessions");
const Mines_1 = require("./routes/Mines");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Les routes mines 
app.get("/mines/show/:id", Mines_1.router);
app.post("/mines/add", Mines_1.router);
app.put("/mines/update/:id", Mines_1.router);
app.delete("/mines/delete/:id", Mines_1.router);
// Les routes concessions
app.get("/concessions/show/:id", Concessions_1.Concessionsrouter);
app.post("/concessions/add", Concessions_1.Concessionsrouter);
app.put("/concessions/update/:id", Concessions_1.Concessionsrouter);
app.delete("/concessions/delete/:id", Concessions_1.Concessionsrouter);
app.get("/concessions/show/mines/:id", Concessions_1.Concessionsrouter);
app.get("/concessions/show/contact/:id", Concessions_1.Concessionsrouter);
app.get("/concessions/all/:id", Concessions_1.Concessionsrouter);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(config_1.PORT, () => {
    console.log(`Server listening on ${config_1.PORT}`);
});
