import React from 'react';

const SearchBar = ({ handleSearchSubmit, placeholder, handleSearchChange }) => (
  <div>
  <div className="input-wrapper">
    <form onSubmit={handleSearchSubmit}>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleSearchChange}
      />
      <input type="submit" />
    </form>
  </div>
</div>
);

export default SearchBar;
