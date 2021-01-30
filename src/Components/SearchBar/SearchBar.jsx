import React from 'react';

const SearchBar = ({ handleSubmit, placeholder, handleSearchChange }) => (
  <div>
  <div className="input-wrapper">
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleSearchChange}
      />
      {/* <CustomButton type="submit">Search</CustomButton> */}
    </form>
  </div>
</div>
);

export default SearchBar;
