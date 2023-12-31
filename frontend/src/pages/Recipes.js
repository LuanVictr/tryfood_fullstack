import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/recipes.css';
import { requestDrinks, requestDrinksByValue, requestDrinksCategories, requestMeals, requestMealsByValue, requestMealsCategories } from '../utils/axiosApi';

function Recipes() {
  const history = useHistory();
  const path = history.location.pathname;
  const title = path.replace('/', '');

  const {
    recipes, setRecipes, categories, setCategories,
    filteredRecipes, setFilteredRecipes, setTitle, setShowHeader, setSearch,
  } = useContext(MyContext);
  const maxRecipes = 12;
  const maxCategories = 5;
  const [recipeName, setRecipeName] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      if (path === '/foods') {
        const dataFoods = await requestMeals();
        const slicedArrayFoods = dataFoods.meals.slice(0, maxRecipes);
        setRecipes(slicedArrayFoods);

        const dataCategories = await requestMealsCategories()
        const slicedArrayCategories = dataCategories.meals.slice(0, maxCategories);
        setCategories(slicedArrayCategories);
      }

      if (path === '/drinks') {
        const dataDrinks = await requestDrinks();
        const slicedArrayDrinks = dataDrinks.drinks.slice(0, maxRecipes);
        setRecipes(slicedArrayDrinks);

        const dataCategories = await requestDrinksCategories()
        const slicedArrayCategories = dataCategories.drinks.slice(0, maxCategories);
        setCategories(slicedArrayCategories);
      }
    };
    fetchAPI();
    setTitle(title);
    setShowHeader(true);
    setSearch(true);
  }, [path]);

  const redirect = (recipe) => {
    if (recipe.idMeal) {
      history.push(`/foods/${recipe.idMeal}`);
      setShowHeader(false);
      setSearch(false);
    } else {
      history.push(`/drinks/${recipe.idDrink}`);
      setShowHeader(false);
      setSearch(false);
    }
  };

  const cardRecipes = (arrayOfRecipes) => arrayOfRecipes.map((recipe, index) => {
    const thumb = recipe.strMealThumb ? recipe.strMealThumb : recipe.strDrinkThumb;
    const name = recipe.strMeal ? recipe.strMeal : recipe.strDrink;
    return (
      <div
        className="polaroid"
        data-testid={ `${index}-recipe-card` }
        key={ index }
        onClick={ () => redirect(recipe) }
        onKeyDown={ redirect }
        aria-hidden
      >
        <img
          className="recipe-image"
          src={ thumb }
          alt={ name }
          data-testid={ `${index}-card-img` }
        />
        <p className="recipe-title" data-testid={ `${index}-card-name` }>{name}</p>
      </div>
    );
  });

  const onClick = async ({ target }) => {
    const { value } = target;
    if (recipeName === target.value) {
      setFilteredRecipes([]);
      setRecipeName('');
    } else {
      if (value === 'All') {
        setFilteredRecipes([]);
      }
      if (value !== 'All') {
        if (path === '/foods') {
          const dataFoods = await requestMealsByValue(value);
          const slicedArrayFoods = dataFoods.meals.slice(0, maxRecipes);
          setFilteredRecipes(slicedArrayFoods);
          setRecipeName(target.value);
        }
        if (path === '/drinks') {
          
          const dataDrinks = await requestDrinksByValue(value);
          const slicedArrayDrinks = dataDrinks.drinks.slice(0, maxRecipes);
          setFilteredRecipes(slicedArrayDrinks);
          setRecipeName(target.value);
        }
      }
    }
  };

  const renderFilterButtons = () => (

    categories.map((category, index) => (
      index === 0 ? (
        <div className="first-buttons" key={ category.strCategory }>
          <button
            className="category-button"
            type="button"
            onClick={ onClick }
            value="All"
            data-testid="All-category-filter"
          >
            All
          </button>
          <button
            className="category-button"
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ onClick }
            value={ category.strCategory }
          >
            {category.strCategory}
          </button>
        </div>
      ) : (
        <button
          className="category-button"
          type="button"
          key={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ onClick }
          value={ category.strCategory }
        >
          {category.strCategory}
        </button>
      )
    ))

  );

  return (
    <div>
      <Header title={ title } />
      <div className="category">
        {
          renderFilterButtons()
        }
      </div>
      <div className="recipe-container">
        {
          filteredRecipes.length === 0
            ? cardRecipes(recipes) : cardRecipes(filteredRecipes)
        }
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
