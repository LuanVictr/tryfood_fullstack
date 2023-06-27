import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
  });

export const requestMeals = async () => {
    const { data } = await api.get('/meals');
    return data;
}

export const requestDrinks = async () => {
    const { data } = await api.get('/drinks');
    return data;
}

export const requestMealsCategories = async () => {
    const { data } = await api.get('/meals/categories');
    return data;
}

export const requestDrinksCategories = async () => {
    const { data } = await api.get('/drinks/categories');
    return data;
}

export const requestMealsByValue = async (value) => {
    const { data } = await api.get(`/meals/filter/${value}`);
    return data;
}

export const requestDrinksByValue = async (value) => {
    const { data } = await api.get(`/drinks/filter/${value}`);
    return data;
}

export const requestMealById = async (id) => {
    const { data } = await api.get(`/meals/id/${id}`);
    return data;
}

export const requestDrinksById = async (id) => {
    const { data } = await api.get(`/drinks/id/${id}`);
    return data;
}