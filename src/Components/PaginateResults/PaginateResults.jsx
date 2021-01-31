import React from 'react';

import { Pagination } from 'react-bootstrap';

const PaginateResults = ({
  pagination: { begin, end, nextPage, previousPage, currentPage },
  paginate,
}) => {
  return (
    <>
      <Pagination>
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev onClick={() => paginate(previousPage)} />
        <Pagination.Next onClick={() => paginate(nextPage)} />
        <Pagination.Last onClick={() => paginate(end)} />
      </Pagination>
    </>
  );
};

export default PaginateResults;
