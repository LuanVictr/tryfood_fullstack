import { requestDrinks, requestDrinksById, requestMealById, requestMeals } from "../utils/axiosApi";

export const requestFoodById = async (id) => {
  const dataFoods = await requestMealById(id);
  return dataFoods.meals[0];
};

export const requestAllFoods = async () => {
  const dataFoods = await requestMeals();
  return dataFoods.meals;
};

export const requestDrinkById = async (id) => {
  const dataDrinks = await requestDrinksById(id);
  return dataDrinks.drinks[0];
};

export const requestAllDrinks = async () => {
  const dataDrinks = await requestDrinks();
  return dataDrinks.drinks;
};
