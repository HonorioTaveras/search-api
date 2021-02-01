import React from 'react';

import { Pagination } from 'react-bootstrap';

const PaginateResults = ({
  pagination: { totalPages, nextPage, previousPage, currentPage },
  paginate,
}) => {
  const showPages = () => {
    let pages = [];

    if (currentPage >= 3 && currentPage < totalPages - 5) {
      console.log('FIRST');
      pages = [];
      for (let i = currentPage - 2; i <= currentPage + 2; i += 1) {
        pages.push(<Pagination.Item key={i} onClick={() => paginate(i)}>{i}</Pagination.Item>);
      }
    }
    if (currentPage < 3 && totalPages > 5) {
      console.log('SECOND');
      pages = [];
      for (let i = 1; i <= 5; i += 1) {
        pages.push(<Pagination.Item key={i} onClick={() => paginate(i)}>{i}</Pagination.Item>);
      }
    }
    if (currentPage !== 1 && currentPage >= totalPages - 5) {
      console.log('THIRD');
      pages = [];
      for (let i = totalPages - 4; i <= totalPages; i += 1) {
        pages.push(<Pagination.Item key={i} onClick={() => paginate(i)}>{i}</Pagination.Item>);
      }
    }
    if (currentPage < 3 && totalPages < 5) {
      console.log('FOURTH');
      pages = [];
      for (let i = 1; i <= totalPages; i += 1) {
        pages.push(<Pagination.Item key={i} onClick={() => paginate(i)}>{i}</Pagination.Item>);
      }
    }

    return pages;
  };

  return (
    <>
      <Pagination>
        {currentPage > 1 && totalPages > 5 ? (
          <>
            <Pagination.First onClick={() => paginate(1)} />
            <Pagination.Prev onClick={() => paginate(previousPage)} />
          </>
        ) : null}
        {showPages().map((page) => page)}
        {currentPage < totalPages && totalPages > 5 ? (
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
