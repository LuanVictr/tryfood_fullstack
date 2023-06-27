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
}

export default MealsService;