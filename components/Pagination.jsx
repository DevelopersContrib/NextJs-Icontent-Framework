'use client';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { useEffect, useState } from 'react';

const Pagination = ({ totalPages, page, handleChangePage }) => {
  const [nextPage, setNextPage] = useState(1);
  const arrayOfPages = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {}, [totalPages]);
  return (
    <>
      <nav className="flex items-center justify-between border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <a href="#" onClick={() => handleChangePage(page > totalPages ? page - 1 : page)} className="pagination-nav-prev" disabled={page === 1 && 'disabled'}>
            <BsArrowLeft className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            Previous
          </a>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {arrayOfPages.length > 0 &&
            arrayOfPages.map((p) => (
              <a href="#" onClick={() => handleChangePage(p)} className={`pagination-nav-link ${p == page && 'active'}`} key={p}>
                {p}
              </a>
            ))}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <a href="#" onClick={() => handleChangePage(page < totalPages ? page + 1 : page)} className="pagination-nav-next" disabled={page === totalPages && 'disabled'}>
            Next
            <BsArrowRight className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Pagination;
