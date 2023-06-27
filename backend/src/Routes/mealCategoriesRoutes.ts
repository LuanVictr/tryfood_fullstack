import { Router } from "express";
import MealCategoriesController from "../controllers/MealCategoriesController";

const routes = Router();
const mealCategoriesController = new MealCategoriesController();

routes.get('/meals/categories', mealCategoriesController.findAll);

export default routes;