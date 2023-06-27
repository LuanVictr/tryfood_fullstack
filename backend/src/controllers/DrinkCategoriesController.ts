import DrinkCategoriesServices from "../services/DrinkCategoriesServices";
import { Request, Response } from "express";

class DrinkCategoriesController {
  private services = new DrinkCategoriesServices()

  public findAll = async (_req: Request, res: Response) => {
    try {
    const allCategories = await this.services.findAll();
    res.status(200).json(allCategories);
    } catch (error:any) {
      res.status(404).json({message:error.message})
    }
  }
}

export default DrinkCategoriesController;