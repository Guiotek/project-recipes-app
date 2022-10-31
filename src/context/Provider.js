import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [headerTitle, setHeaderTitle] = useState('');
  const [hideSearch, setHideSearch] = useState(true);
  const [searchBar, setSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [radioInput, setRadioInput] = useState('');
  const [results, setResults] = useState([]);
  const [recipeType, setRecipeType] = useState('');
  const [recipeDetail, setRecipeDetail] = useState();
  const [mealOrDrink, setMealOrDrink] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [ingredientsDrink, setIngredientsDrink] = useState([]);
  const [showRecipes, setShowRecipes] = useState(true);
  const [mealAPI, setMealAPI] = useState();
  const [drinkAPI, setDrinkAPI] = useState();
  const [recipeStatus, setRecipeStatus] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [checkbox, setCheckbox] = useState();
  const [recipesFilter, setRecipesFilter] = useState({
    all: true,
    meals: false,
    drinks: false,
  });
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const data = useMemo(
    () => ({
      email,
      password,
      btnDisable,
      headerTitle,
      hideSearch,
      searchBar,
      searchInput,
      radioInput,
      results,
      recipeType,
      recipeDetail,
      showRecipes,
      inProgress,
      checkbox,
      recipesFilter,
      isAlertVisible,
      setEmail,
      setPassword,
      setBtnDisable,
      setHeaderTitle,
      setHideSearch,
      setSearchBar,
      setSearchInput,
      setRadioInput,
      setResults,
      setRecipeType,
      setRecipeDetail,
      mealOrDrink,
      setMealOrDrink,
      ingredients,
      setIngredients,
      measures,
      setMeasures,
      ingredientsDrink,
      setIngredientsDrink,
      setShowRecipes,
      drinkAPI,
      setDrinkAPI,
      mealAPI,
      setMealAPI,
      recipeStatus,
      setRecipeStatus,
      setInProgress,
      setCheckbox,
      setRecipesFilter,
      setIsAlertVisible,
    }),
    [btnDisable,
      email,
      headerTitle,
      hideSearch,
      password,
      radioInput,
      results,
      searchBar,
      searchInput,
      recipeType,
      showRecipes,
      recipeDetail,
      ingredients,
      ingredientsDrink,
      mealOrDrink,
      measures,
      mealAPI,
      drinkAPI,
      recipeStatus,
      inProgress,
      checkbox,
      recipesFilter,
      isAlertVisible],
  );

  return (
    <MyContext.Provider value={ data }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default Provider;
