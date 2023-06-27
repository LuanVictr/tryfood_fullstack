import MealCategories from "../models/MealsCategoriesODM";

class MealCategoriesServices {
  private model = new MealCategories()

  public async findAll() {
    const allCategories = await this.model.findAll();
    return {
      "meals": allCategories,
    }
  }
}

export default MealCategoriesServices;