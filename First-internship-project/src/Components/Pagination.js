import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(`/page/${newPage}`);
    }
  };

  return (
    <div className="pagination w-90% mt-5">
      {/* Previous Page Button */}
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        {/* Previous Page Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
        </svg>
      </button>
      
      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          to={`/page/${page}`}
          className={`page-link p-10 ${currentPage === page ? 'active' : ''}`}
        >
          {page}
        </Link>
      ))}

      {/* Next Page Button */}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {/* Next Page Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
