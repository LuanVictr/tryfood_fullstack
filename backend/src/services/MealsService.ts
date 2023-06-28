import IMeals from "../interfaces/IMeals";
import MealsODM from "../models/MealsODM";


class MealsService {
  private Model = new MealsODM();
  
  public async findAll() {
    const allMeals = await this.Model.findAll();
    return {
      "meals":allMeals,
    };
  }

  public async findByValue(category:string) {
    const filteredItens = await this.Model.findByValue(category);
    return {
      "meals":filteredItens,
    }
  }

  public async findById(id:number) {
    try {
    const meal = await this.Model.findById(id);
    return {
      "meals":meal
    }
    } catch (error:any) {
      throw Object.assign(new Error(error.message), {status: 404});
    }
  }

  public async findByName(name:string) {
    try {
      const mealFound = await this.Model.findByName(name);
      return {
        "meals":mealFound,
      }
    } catch (error:any) {
      throw Object.assign(new Error(error.message), {status: 404});
    }
  }

  public async findByFirstLetter(letter:string) {
    const mealFound = await this.Model.findByFirstLetter(letter);
    return {
      "meals": mealFound,
    };
  }
  
}

export default MealsService;