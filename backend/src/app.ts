import express from 'express';
import mealRoutes from './Routes/mealRoutes';
import drinkRoutes from './Routes/drinksRoutes';
import drinkCategoriesRoutes from './Routes/drinksCategoriesRoutes';
import mealCategoriesRoutes from './Routes/mealCategoriesRoutes';
import cors from "cors";
import { Request } from 'express';

const app = express();

app.use(cors<Request>())
app.use(express.json());
app.use(mealRoutes);
app.use(drinkRoutes);
app.use(drinkCategoriesRoutes);
app.use(mealCategoriesRoutes);

export default app;