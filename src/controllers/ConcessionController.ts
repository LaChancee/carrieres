import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { Concession } from "../models/Concession";
import { Contacts } from "../models/Contacts";
import { Mines } from "../models/Mines";
import { CrudController } from "./CrudController";

export class ConcessionController extends CrudController {
  public create(req: Request, res: Response): void {
    Concession.create(req.body)
      .then((concession) => res.json(concession))
      .catch((err) => {
        console.log(err);
        res.json({ message: "Insertion impossible" });
      });
  }

  public async read(req: Request, res: Response): Promise<void> {
    Concession.findByPk(req.params.id)
      .then((concession) => res.json(concession))
      .catch((err) => {
        console.log(err);
        res.json("erreur");
      });
  }
  public async getAll(req: Request, res: Response): Promise<void> {
    const concessions = Concession.findByPk(req.params.id, {
      include: [Mines,Contacts, ],
    })
      .then((concession) => res.json(concession))
      .catch((err) => {
        console.log(err);
        res.json("erreur");
      });
    const test = Concession.findByPk(req.params.id, { include: [Mines] });
  }
  public async getMines(req: Request, res: Response): Promise<void> {
    const concessions = Concession.findByPk(req.params.id, {
      include: [
        {
          model: Mines,
          required: true,
        },
      ],
      attributes: { exclude: ["name","license", "siret", "phone", "id_adresses", "id"] },
    })
      .then((concession) => res.json(concession))
      .catch((err) => {
        console.log(err);
        res.json("erreur");
      });
    const test = Concession.findByPk(req.params.id, { include: [Mines] });
  }
  public async getContact(req: Request, res: Response): Promise<void> {
    const concessions = Concession.findByPk(req.params.id, {
      include: [
        {
          model: Contacts,
          required: true,
        },
      ],
      attributes: { exclude: ["name","license", "siret", "phone", "id_adresses", "id"] },
    })
      .then((concession) => res.json(concession))
      .catch((err) => {
        console.log(err);
        res.json("erreur");
      });
    const test = Concession.findByPk(req.params.id, { include: [Mines] });
  }

  // Update CRUD
  update(req: Request, res: Response): void {
    let id = req.params.id;
    let minesUpdate = req.body;
    Concession.findByPk(id)
      .then((concession) => {
        if (concession) {
          concession.set(minesUpdate);
          concession.save();
          res.json({ message: "concession updated" });
        } else {
          res.json({ message: "concession not found with id: " + id });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Mise à jour impossible..." });
      });
  }

  delete(req: Request, res: Response): void {
    let id = req.params.id;
    Concession.findByPk(id)
      .then((concession) => {
        if (concession) {
          concession.destroy();
          res.json({ message: "concession deleted" });
        } else {
          res.json({ message: "concession not found with id: " + id });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Suppression impossible..." });
      });
  }
}
