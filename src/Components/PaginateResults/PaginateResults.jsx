import React from 'react';

import { Pagination } from 'react-bootstrap';

const PaginateResults = ({
  pagination: { begin, totalPages, nextPage, previousPage, currentPage },
  paginate,
}) => {
  console.log(
    'begin: ',
    begin,
    ' previousPage: ',
    previousPage,
    ' currentPage: ',
    currentPage,
    ' nextPage: ',
    nextPage,
    ' totalPages: ',
    totalPages
  );
  return (
    <>
      <Pagination>
        {currentPage > 1 ? (
          <>
            <Pagination.First onClick={() => paginate(1)} />
            <Pagination.Prev onClick={() => paginate(previousPage)} />
          </>
        ) : null}
        {currentPage < totalPages ? (
          <>
            <Pagination.Next onClick={() => paginate(nextPage)} />
            <Pagination.Last onClick={() => paginate(totalPages)} />
          </>
        ) : null}
      </Pagination>
    </>
  );
};

export default PaginateResults;
