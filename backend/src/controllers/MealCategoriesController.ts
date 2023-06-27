import MealCategoriesServices from "../services/MealsCategoriesServices";
import { Request, Response } from "express";

class MealCategoriesController {
  private categorieServices = new MealCategoriesServices();

  public findAll = async (_req: Request, res: Response) => {
    try {
    const allCategories = await this.categorieServices.findAll();
    res.status(200).json(allCategories);
  } catch (error:any) {
    res.status(404).json({message: error.message})
  }
  }
}

export default MealCategoriesController;