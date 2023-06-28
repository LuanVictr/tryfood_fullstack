import MealsService from "../services/MealsService";
import { Request, Response } from "express";

class MealsController {
    constructor(private services = new MealsService()) {}

    public findAll = async (_req: Request, res: Response) => {
        try {
        const allMeals = await this.services.findAll()
        res.status(200).json(allMeals)
        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

    public findByValue = async(req: Request, res: Response) => {
        try {
            const { category } = req.params;
            const filteredItens = await this.services.findByValue(category)
            res.status(200).json(filteredItens)
        } catch(error:any) {
            res.status(404).json({message:error.message})
        }
    }

    public findById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const meal = await this.services.findById(parseInt(id, 10))
            res.status(200).json(meal);
        } catch(error:any) {
            res.status(error.status).json({message: error.message});
        }
    }

    public findByName = async ( req: Request, res: Response ) => {
        try {
            const { name } = req.params;
            const mealFound = await this.services.findByName(name);
            res.status(200).json(mealFound);
        } catch (error:any) {
            res.status(error.status).json({message:error.message});
        }
    }

    public findByFirstLetter = async ( req: Request, res: Response ) => {
        try {
            const { letter } = req.params;
            const mealsFound = await this.services.findByFirstLetter(letter);
            res.status(200).json(mealsFound);
        } catch(error:any) {
            res.status(404).json({message:error.message});
        }
    }

}

export default MealsController