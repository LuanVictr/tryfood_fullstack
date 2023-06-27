import { Schema } from "mongoose";
import ICategories from "../interfaces/ICategories";
import AbstractODM from "./AbstractODM";

class DrinkCategoriesODM extends AbstractODM<ICategories> {
  constructor() {
    const schema = new Schema<ICategories>({
      strCategory: String,
    });
    super(schema, 'drinksCategories');
  }
}

export default DrinkCategoriesODM;