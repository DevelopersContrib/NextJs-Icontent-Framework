import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
const Pagination = ({ totalPage }) => {
  return (
    <>
      <nav className="flex items-center justify-between border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <a
            href="#"
            className="pagination-nav-prev"
          >
            <BsArrowLeft className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            Previous
          </a>
        </div>
        <div className="hidden md:-mt-px md:flex">
          <a
            href="#"
            className="pagination-nav-link"
          >
            1
          </a>
          {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
          <a
            href="#"
            className="pagination-nav-link active"
            aria-current="page"
          >
            2
          </a>
          <a
            href="#"
            className="pagination-nav-link"
          >
            3
          </a>
          <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
            ...
          </span>
          <a
            href="#"
            className="pagination-nav-link"
          >
            8
          </a>
          <a
            href="#"
            className="pagination-nav-link"
          >
            9
          </a>
          <a
            href="#"
            className="pagination-nav-link"
          >
            10
          </a>
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <a
            href="#"
            className="pagination-nav-next"
          >
            Next
            <BsArrowRight className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Pagination;
