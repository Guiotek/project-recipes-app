import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import MyContext from '../context/MyContext';

export default function Comidas() {
  const { setHeaderTitle,
    setHideSearch, setRecipeType, results, showRecipes } = useContext(MyContext);

  useEffect(() => {
    setHeaderTitle('Meals');
    setRecipeType('themealdb');
    setHideSearch(true);
  });

  const NUMBER_12 = 12;
  const foodTrue = true;

  return (
    <div className="height-divs">
      <Header />
      <title>Meals</title>
      {
        showRecipes
        && <Recipes show={ foodTrue } />
      }
      {
        results && results.slice(0, NUMBER_12).map((element, index) => (
          <Link to={ `/meals/${results[0].idMeal}` } key={ index } className="link">
            <div
              className="div-recipes"
              data-testid={ `${index}-recipe-card` }
            >
              <img
                src={ element.strMealThumb }
                alt={ element.strMeal }
                className="img-card"
                data-testid={ `${index}-card-img` }
              />
              <h3 data-testid={ `${index}-card-name` }>{element.strMeal}</h3>
            </div>
          </Link>
        ))
      }
      <Footer />
    </div>
  );
}
