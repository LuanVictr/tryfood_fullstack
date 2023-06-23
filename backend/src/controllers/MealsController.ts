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

}

export default MealsController