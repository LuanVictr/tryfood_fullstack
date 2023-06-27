import DrinkODM from "../models/DrinksODM";

class DrinkService {
  private model = new DrinkODM();

  public async findAll() {
    const allDrinks = await this.model.findAll();
    return {
      "drinks":allDrinks
    }
  }
}

export default DrinkService;