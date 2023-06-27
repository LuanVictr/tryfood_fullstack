import { Request, Response } from "express";
import DrinkService from "../services/DrinksService";

class DrinksController {
  private drinksService = new DrinkService()

  public findAll = async (_req: Request, res: Response) => {
    try {
    const allDrinks = await this.drinksService.findAll();
    res.status(200).json(allDrinks)
    } catch (error:any) {
      res.status(500).json({message: error.message});
    }
  }
}

export default DrinksController;