import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function SearchBar() {
  const { searchInput,
    setSearchInput,
    setRadioInput,
    setShowRecipes,
    apiSearch } = useContext(MyContext);

  const handleClick = async () => {
    setShowRecipes(false);
    apiSearch();
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        className="searchBar"
        placeholder="Search"
        value={ searchInput }
        onChange={ (({ target }) => setSearchInput(target.value)) }
      />
      <br />
      <span className="span-radio">
        <label htmlFor="search-radio-i">
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            id="search-radio-i"
            value="search-ingredient"
            name="search-radio"
            onClick={ () => setRadioInput('ingredient') }
          />
          {' '}
          Ingredient
        </label>
        <label htmlFor="search-radio-n">
          <input
            data-testid="name-search-radio"
            type="radio"
            value="search-name"
            id="search-radio-n"
            name="search-radio"
            onClick={ () => setRadioInput('name') }
          />
          {' '}
          Name
        </label>
        <label htmlFor="search-radio-f">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            value="search-first-letter"
            id="search-radio-f"
            name="search-radio"
            onClick={ () => setRadioInput('first') }
          />
          {' '}
          First Letter
        </label>
      </span>
      <br />
      <button
        type="button"
        data-testid="exec-search-btn"
        className="btn-filter"
        onClick={ handleClick }
      >
        Busca
      </button>
    </div>
  );
}
