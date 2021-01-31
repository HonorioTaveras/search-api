import React from 'react';

import { Pagination } from 'react-bootstrap';

const PaginateResults = ({
  pagination: { totalPages, nextPage, previousPage, currentPage },
  paginate,
}) => {
  const showPages = () => {
    let pages = [];

    if (currentPage >= 3 && currentPage < totalPages - 5) {
      for (let i = currentPage - 2; i <= currentPage + 2; i += 1) {
        pages.push(<Pagination.Item key={i}>{i}</Pagination.Item>);
      }
    }
    if (currentPage < 3) {
      for (let i = 1; i <= 5; i += 1) {
        pages.push(<Pagination.Item key={i}>{i}</Pagination.Item>);
      }
    }
    if (currentPage >= totalPages - 5) {
      for (let i = totalPages - 4; i <= totalPages; i += 1) {
        pages.push(<Pagination.Item key={i}>{i}</Pagination.Item>);
      }
    }

    return pages;
  };

  return (
    <>
      <Pagination>
        {currentPage > 1 && nextPage > 0 ? (
          <>
            <Pagination.First onClick={() => paginate(1)} />
            <Pagination.Prev onClick={() => paginate(previousPage)} />
          </>
        ) : null}
        {nextPage > 0 ? showPages().map((page) => page) : null}
        {currentPage < totalPages && nextPage > 0 ? (
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
