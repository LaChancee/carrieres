"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineController = void 0;
const Mines_1 = require("../models/Mines");
const CrudController_1 = require("./CrudController");
class MineController extends CrudController_1.CrudController {
    create(req, res) {
        Mines_1.Mines.create(req.body)
            .then((mines) => res.json(mines))
            .catch((err) => {
            console.log(err);
            res.json({ message: "Insertion impossible" });
        });
    }
    async read(req, res) {
        Mines_1.Mines.findByPk(req.params.id)
            .then((mines) => res.json(mines))
            .catch((err) => {
            console.log(err);
            res.json("erreur");
        });
    }
    // Update CRUD
    update(req, res) {
        let id = req.params.id;
        let minesUpdate = req.body;
        Mines_1.Mines.findByPk(id)
            .then((mines) => {
            if (mines) {
                mines.set(minesUpdate);
                mines.save();
                res.json({ message: "mines updated" });
            }
            else {
                res.json({ message: "mines not found with id: " + id });
            }
        })
            .catch((err) => {
            console.log(err);
            res.json({ message: "Mise à jour impossible..." });
        });
    }
    delete(req, res) {
        let id = req.params.id;
        Mines_1.Mines.findByPk(id)
            .then((mines) => {
            if (mines) {
                mines.destroy();
                res.json({ message: "mines deleted" });
            }
            else {
                res.json({ message: "mines not found with id: " + id });
            }
        })
            .catch((err) => {
            console.log(err);
            res.json({ message: "Suppression impossible..." });
        });
    }
}
exports.MineController = MineController;
