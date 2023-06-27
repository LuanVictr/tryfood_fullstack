import IMeals from "../interfaces/IMeals";
import MealsODM from "../models/MealsODM";


class MealsService {
  private Model = new MealsODM();
  
  public async findAll() {
    const allMeals = await this.Model.findAll();
    return {
      "meals":allMeals
    };
  }
}

export default MealsService;