import { BiSearchAlt } from 'react-icons/bi';
const NoResultsFound = () => {
  return (
    <>
      <div className="min-h-[391px] flex w-full items-center justify-center flex-col">
        <div className="mb-4">
          <BiSearchAlt className="text-gray-200 w-14 h-14" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-300">No results found.</h1>
      </div>
    </>
  );
};

export default NoResultsFound;
