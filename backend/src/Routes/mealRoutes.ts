import MealsController from "../controllers/MealsController";
import { Router } from "express";

const router = Router();
const mealsController = new MealsController();

router.get('/meals', mealsController.findAll)

export default router;