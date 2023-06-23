import MealsODM from "../models/MealsODM";


class MealsService {
  private Model = new MealsODM();
  
  public async findAll() {
    const allMeals = await this.Model.FindAll();
    return allMeals;
  }
}

export default MealsService;