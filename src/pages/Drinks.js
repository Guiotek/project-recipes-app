import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import MyContext from '../context/MyContext';

function Drinks() {
  const { setHeaderTitle,
    setHideSearch, setRecipeType, results, showRecipes } = useContext(MyContext);

  useEffect(() => {
    setHeaderTitle('Drinks');
    setRecipeType('thecocktaildb');
    setHideSearch(true);
  });

  const NUMBER_12 = 12;
  const foodTrue = false;

  return (
    <div className="height-divs">
      <Header />
      {
        showRecipes
        && <Recipes show={ foodTrue } />
      }
      {
        results && results.slice(0, NUMBER_12).map((element, index) => (
          <Link to={ `/drinks/${results[0].idDrink}` } key={ index } className="link">
            <div data-testid={ `${index}-recipe-card` } className="div-recipes">
              <img
                src={ element.strDrinkThumb }
                alt={ element.strDrink }
                className="img-card"
                data-testid={ `${index}-card-img` }
              />
              <h3 data-testid={ `${index}-card-name` }>{element.strDrink}</h3>
            </div>
          </Link>
        ))
      }
      <Footer />
    </div>
  );
}

export default Drinks;
