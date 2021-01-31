import React from 'react';

import { Pagination } from 'react-bootstrap';

const PaginateResults = () => {
  return (
    <>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};

export default PaginateResults;
