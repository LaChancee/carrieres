import express, { Express } from "express";
import { ConcessionController } from "../controllers/ConcessionController"

const concessionsController = new ConcessionController();
export const Concessionsrouter = express.Router({
    strict: true
});

Concessionsrouter.route("/concessions/show/:id").get( concessionsController.read);
Concessionsrouter.route("/concessions/add").post( concessionsController.create);
Concessionsrouter.route("/concessions/update/:id").put( concessionsController.update);
Concessionsrouter.route("/concessions/delete/:id").delete( concessionsController.delete);
Concessionsrouter.route("/concessions/show/mines/:id").get(concessionsController.getMines);
Concessionsrouter.route("/concessions/show/contact/:id").get(concessionsController.getContact);
Concessionsrouter.route("/concessions/all/:id").get(concessionsController.getAll);
    