import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { CrudController } from "./CrudController";

export class MineController extends CrudController {
  public create(req: Request, res: Response): void {
  
  }

  public  read(req: Request, res: Response): void{
    
  }

  update(req: Request, res: Response): void {
  }
  
  delete(req: Request, res: Response): void {}
}
