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
    
    <div className='searchBox'>
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
            className="search-radio"
            onClick={ () => setRadioInput('ingredient') }
          />
          {' '}
          <p className='whiteColor'>Ingredient</p>
        </label>
        <label htmlFor="search-radio-n">
          <input
            data-testid="name-search-radio"
            type="radio"
            value="search-name"
            id="search-radio-n"
            name="search-radio"
            className="search-radio"
            onClick={ () => setRadioInput('name') }
          />
          {' '}
          <p className='whiteColor'>
          Name
          </p>
        </label>
        <label htmlFor="search-radio-f">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            value="search-first-letter"
            id="search-radio-f"
            name="search-radio"
            className="search-radio"
            onClick={ () => setRadioInput('first') }
          />
          {' '}
          <p className='whiteColor'>
          First Letter
          </p>
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
