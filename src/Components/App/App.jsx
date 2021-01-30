import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ItemList from '../ItemList/ItemList';

const App = () => {
  const [err, setErr] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchItem, setSearchItem] = useState('shirts');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(
        `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${searchItem}&resultsFormat=native&page=${pageNumber}`
      )
      .then(
        (res) => {
          console.log('results from app component: ', res.data.results);
          setSearchResults(res.data.results);
        },
        (err) => {
          console.log('search error: ', JSON.parse(err));
        }
      );
  }, [searchItem, pageNumber]);

  return (
    <div>
      <ItemList searchResults={searchResults} />
    </div>
  );
};

export default App;
