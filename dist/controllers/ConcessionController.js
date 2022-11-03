"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionController = void 0;
const Concession_1 = require("../models/Concession");
const CrudController_1 = require("./CrudController");
class ConcessionController extends CrudController_1.CrudController {
    create(req, res) {
        Concession_1.Concession.create(req.body)
            .then((concession) => res.json(concession))
            .catch((err) => {
            console.log(err);
            res.json({ message: "Insertion impossible" });
        });
    }
    async read(req, res) {
        Concession_1.Concession.findByPk(req.params.id)
            .then((concession) => res.json(concession))
            .catch((err) => {
            console.log(err);
            res.json("erreur");
        });
    }
    // Update CRUD
    update(req, res) {
        let id = req.params.id;
        let minesUpdate = req.body;
        Concession_1.Concession.findByPk(id)
            .then((concession) => {
            if (concession) {
                concession.set(minesUpdate);
                concession.save();
                res.json({ message: "concession updated" });
            }
            else {
                res.json({ message: "concession not found with id: " + id });
            }
        })
            .catch((err) => {
            console.log(err);
            res.json({ message: "Mise à jour impossible..." });
        });
    }
    delete(req, res) {
        let id = req.params.id;
        Concession_1.Concession.findByPk(id)
            .then((concession) => {
            if (concession) {
                concession.destroy();
                res.json({ message: "concession deleted" });
            }
            else {
                res.json({ message: "concession not found with id: " + id });
            }
        })
            .catch((err) => {
            console.log(err);
            res.json({ message: "Suppression impossible..." });
        });
    }
}
exports.ConcessionController = ConcessionController;
