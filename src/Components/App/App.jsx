import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from 'react-bootstrap/Spinner';

import ItemList from '../ItemList/ItemList';
import SearchBar from '../SearchBar/SearchBar';
import PaginateResults from '../PaginateResults/PaginateResults';

import './App.scss';

const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [pagination, setPagination] = useState({});
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
          setIsLoaded(true);
          setSearchResults(res.data.results);
          setPagination(res.data.pagination);
        },
        (err) => {
          setIsLoaded(true);
          setErr(err);
        }
      );
  }, [searchItem, pageNumber]);

  const handleSearchChange = (e) => setSearchField(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setPageNumber(1);
    setSearchItem(searchField);
  };

  const paginate = (page) => setPageNumber(page);

  if (err) {
    return (
      <div>
        Error:
        {err.message}
      </div>
    );
  }
  if (!isLoaded) {
    return (
      <div className='spinner'>
        <Spinner animation='border' role='status' />
      </div>
    );
  }
  return (
    <div className='app-container'>
      <SearchBar
        placeholder='Search for Brand, Color, Size...'
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      {searchResults.length && pagination.totalPages > 1 ? (
        <div className="pagination">
          <PaginateResults pagination={pagination} paginate={paginate} />
        </div>
      ) : null}
      {searchResults.length ? (
        <ItemList searchResults={searchResults} />
      ) : (
        <p>There are no results for your search.</p>
      )}
      {searchResults.length && pagination.totalPages > 1 ? (
        <div className="pagination pagination-bottom">
          <PaginateResults pagination={pagination} paginate={paginate} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
