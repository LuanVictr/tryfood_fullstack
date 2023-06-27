import { Schema } from "mongoose";
import AbstractODM from "./AbstractODM";
import ICategories from "../interfaces/ICategories";

class MealCategories extends AbstractODM<ICategories>{
  constructor() {
    const schema = new Schema<ICategories>({
      strCategory: String,
    });
    super(schema, 'MealCategories' )
  }
}

export default MealCategories;