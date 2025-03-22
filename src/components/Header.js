import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import profileIcon from '../images/ProfileIcon.png';
import searchIcon from '../images/SearchIcon.png';
import SearchBar from './SearchBar';

function Header() {
  const { hideSearch, headerTitle, searchBar, setSearchBar } = useContext(MyContext);

  return (
    <div className="header-container">
      <div id="home">
        {
          hideSearch
          && (
            <button
              type="button"
              data-testid="search-btn"
              className="search-header"
              onClick={ () => setSearchBar(!searchBar) }
            >
              <img
                src={ searchIcon }
                alt="Profile"
                className="img-link-header"
                data-testid="search-top-btn"
              />
            </button>
          )
        }
        <Link to="/profile" className="link-header">
          <img
            src={ profileIcon }
            alt="Profile"
            className="img-link-header"
            data-testid="profile-top-btn"
          />
        </Link>
      </div>
      {
        searchBar && (<SearchBar />)
      }
      <div className="title-div">
        <h1 data-testid="page-title" className="titleHome">{headerTitle}</h1>
      </div>
    </div>
  );
}

export default Header;
