import { Router } from "express";
import DrinkCategoriesController from "../controllers/DrinkCategoriesController";

const routes = Router();
const drinkCategoriesController = new DrinkCategoriesController();

routes.get('/drinks/categories', drinkCategoriesController.findAll);

export default routes;