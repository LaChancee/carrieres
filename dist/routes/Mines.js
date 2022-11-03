"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const MineController_1 = require("../controllers/MineController");
const minesController = new MineController_1.MineController();
exports.router = express_1.default.Router({
    strict: true
});
exports.router.route("/mines/show/:id").get(minesController.read);
exports.router.route("/mines/add").post(minesController.create);
exports.router.route("/mines/update/:id").put(minesController.update);
