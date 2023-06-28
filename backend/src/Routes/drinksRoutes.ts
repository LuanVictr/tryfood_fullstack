import { Router } from "express";
import DrinksController from "../controllers/DrinksController";

const router = Router();
const drinksController = new DrinksController();

router.get('/drinks', drinksController.findAll);
router.get('/drinks/filter/:category', drinksController.findByValue);
router.get('/drinks/id/:id', drinksController.findById);
router.get('/drinks/search/:name', drinksController.findByName);

export default router;