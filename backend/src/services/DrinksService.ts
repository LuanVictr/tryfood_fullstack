import DrinkODM from "../models/DrinksODM";

class DrinkService {
  private model = new DrinkODM();

  public async findAll() {
    const allDrinks = await this.model.findAll();
    return {
      "drinks":allDrinks,
    }
  }

  public async findByValue(value:string) {
    const filteredDrinks = await this.model.findByValue(value);
    return {
      "drinks":filteredDrinks,
    }
  }

  public async findById(id:number) {
    const drink = await this.model.findById(id);
    return {
      "drinks": drink,
    };
  }

  public async findByName(name:string) {
    const foundDrink = await this.model.findByName(name);
    return {
      "drinks": foundDrink,
    }
  }
}

export default DrinkService;