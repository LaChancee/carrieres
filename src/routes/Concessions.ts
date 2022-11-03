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

// http://localhost:8000/concessions/show/mines/9
Concessionsrouter.route("/concessions/show/mines/:id").get(concessionsController.getMines);
// http://localhost:8000/concessions/show/contacts/9
Concessionsrouter.route("/concessions/show/contact/:id").get(concessionsController.getContact);
// http://localhost:8000/concessions/all/9
Concessionsrouter.route("/concessions/all/:id").get(concessionsController.getAll);
    