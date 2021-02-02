import React from 'react';

import './SearchBar.scss';

import MagnifyingGlass from '../../assets/loupe.png';

const SearchBar = ({ handleSearchSubmit, placeholder, handleSearchChange }) => (
  <div className='search-container'>
    <form onSubmit={handleSearchSubmit}>
      <div className='search-bar'>
        <input
          className='search'
          type='search'
          placeholder={placeholder}
          onChange={handleSearchChange}
        />
        <button className='magnifying-glass' type='submit'>
          <img src={MagnifyingGlass} alt='' />
        </button>
      </div>
    </form>
  </div>
);

export default SearchBar;
