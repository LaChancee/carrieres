import express, { Express } from "express";
import { MineController } from "../controllers/MineController"

const minesController = new MineController();
export const router = express.Router({
    strict: true
});

router.route("/mines/show/:id").get( minesController.read);
router.route("/mines/add").post( minesController.create);
router.route("/mines/update/:id").put( minesController.update);
