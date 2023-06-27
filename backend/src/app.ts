import express from 'express';
import mealRoutes from './Routes/mealRoutes';
import drinkRoutes from './Routes/drinksRoutes';
import cors from "cors";
import { Request } from 'express';

const app = express();

app.use(cors<Request>())
app.use(express.json());
app.use(mealRoutes);
app.use(drinkRoutes);

export default app;