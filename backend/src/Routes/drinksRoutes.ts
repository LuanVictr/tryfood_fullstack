import { Router } from "express";
import DrinksController from "../controllers/DrinksController";

const router = Router();
const drinksController = new DrinksController();

router.get('/drinks', drinksController.findAll);

export default router;