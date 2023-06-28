import MealsController from "../controllers/MealsController";
import { Router } from "express";

const router = Router();
const mealsController = new MealsController();

router.get('/meals', mealsController.findAll);
router.get('/meals/filter/:category', mealsController.findByValue);
router.get('/meals/id/:id', mealsController.findById);
router.get('/meals/search/:name', mealsController.findByName);
router.get('/meals/get/:letter', mealsController.findByFirstLetter);

export default router;