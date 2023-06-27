import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
  });

export const requestMeals = async () => {
    const { data } = await api.get('/meals');
    return data
}

export const requestDrinks = async () => {
    const { data } = await api.get('/drinks');
    return data
}