import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { Mines } from "../models/Mines";
import { CrudController } from "./CrudController";

export class MineController extends CrudController {
  public create(req: Request, res: Response): void {
    Mines.create(req.body)
      .then((mines) => res.json(mines))
      .catch((err) => {
        console.log(err);
        res.json({ message: "Insertion impossible" });
      });
  }

  public async read(req: Request, res: Response): Promise<void> {
    Mines.findByPk(req.params.id)
      .then((mines) => res.json(mines))
      .catch((err) => {
        console.log(err);
        res.json("erreur");
      });
  }
 

  // Update CRUD
  update(req: Request, res: Response): void {
    let id = req.params.id;
    let minesUpdate = req.body;
    Mines.findByPk(id)
      .then((mines) => {
        if (mines) {
          mines.set(minesUpdate);
          mines.save();
          res.json({ message: "mines updated" });
        } else {
          res.json({ message: "mines not found with id: " + id });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Mise à jour impossible..." });
      });
  }

  delete(req: Request, res: Response): void {
    let id = req.params.id;
    Mines.findByPk(id)
      .then((mines) => {
        if (mines) {
          
          mines.destroy();
          res.json({ message: "mines deleted" });
        } else {
          res.json({ message: "mines not found with id: " + id });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Suppression impossible..." });
      });
  }
}
