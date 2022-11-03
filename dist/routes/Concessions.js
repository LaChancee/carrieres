"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionsrouter = void 0;
const express_1 = __importDefault(require("express"));
const ConcessionController_1 = require("../controllers/ConcessionController");
const concessionsController = new ConcessionController_1.ConcessionController();
exports.Concessionsrouter = express_1.default.Router({
    strict: true
});
exports.Concessionsrouter.route("/concessions/show/:id").get(concessionsController.read);
exports.Concessionsrouter.route("/concessions/add").post(concessionsController.create);
exports.Concessionsrouter.route("/concessions/update/:id").put(concessionsController.update);
exports.Concessionsrouter.route("/concessions/delete/:id").delete(concessionsController.delete);
