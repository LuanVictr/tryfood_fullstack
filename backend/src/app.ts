import express from 'express';
import mealRoutes from './Routes/mealRoutes'

const app = express();

app.use(express.json());
app.use(mealRoutes);

export default app;