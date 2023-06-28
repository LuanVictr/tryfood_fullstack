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

  public findByValue = async (req: Request, res: Response) => {
    try {
      const { category } = req.params;
      const filteredDrinks = await this.drinksService.findByValue(category);    
      res.status(200).json(filteredDrinks);
    } catch(error:any) {
      res.status(404).json({message:error.message});
    }
  }

  public findById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const drink = await this.drinksService.findById(parseInt(id, 10));
      res.status(200).json(drink);
    } catch (error:any) {
      res.status(404).json({message:error.message})
    }
  }

  public findByName = async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const foundDrink = await this.drinksService.findByName(name)
      res.status(200).json(foundDrink);
    } catch (error:any) {
      res.status(404).json({message:error.message})
    }
  }
}

export default DrinksController;