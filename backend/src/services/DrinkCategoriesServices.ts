import DrinkCategoriesODM from "../models/DrinksCategoriesODM";

class DrinkCategoriesServices {
  private model = new DrinkCategoriesODM();

  public async findAll() {
    const allCategories = await this.model.findAll();
    return {
      "drinks":allCategories,
    }
  }
}

export default DrinkCategoriesServices;