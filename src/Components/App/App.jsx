import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ItemList from '../ItemList/ItemList';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    axios
      .get(
        `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${searchItem}&resultsFormat=native&page=${pageNumber}`
      )
      .then(
        (res) => {
          console.log('data from app component: ', res.data);
          console.log('results from app component: ', res.data.results);
          setIsLoaded(true);
          setData(res.data);
          setSearchResults(res.data.results);
        },
        (err) => {
          console.log('search error: ', JSON.parse(err));
          setIsLoaded(true);
          setErr(err);
        }
      );
  }, [searchItem, pageNumber]);

  const handleSearchChange = (e) => setSearchField(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSearchItem(searchField);
  };

  return (
    <div>
      <SearchBar
        placeholder='Search for Brand, Color, Size...'
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      {searchResults.length ? (
        <ItemList searchResults={searchResults} />
      ) : (
        <p>There are no results for your search.</p>
      )}
    </div>
  );
};

export default App;
