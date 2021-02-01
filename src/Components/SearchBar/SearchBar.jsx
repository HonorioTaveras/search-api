import React from 'react';

import './SearchBar.scss';

const SearchBar = ({ handleSearchSubmit, placeholder, handleSearchChange }) => (
  <div className='search-container'>
    <form onSubmit={handleSearchSubmit}>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleSearchChange}
      />
      <input className='magnifying-glass' type='submit' />
    </form>
  </div>
);

export default SearchBar;
