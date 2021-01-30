import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [searchItem, setSearchItem] = useState('jeans');
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    axios
      .get(
        `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${searchItem}&resultsFormat=native&page=${pageNumber}`,
      )
      .then(
        (res) => console.log(res.data),
        (err) => {
          console.log('search error: ', JSON.parse(err));
        },
      );
  }, [searchItem, pageNumber]);

  return <div>Sup dirtbag!</div>;
};

export default App;
