const SearchComponent = ({ setSearchKey }) => {
  const handleSearch = (e) => {
    if (e.which === 13) {
      setSearchKey(e.target.value);
    }
  };
  return (
    <>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-[300px] ml-auto">
          <input type="text" className="block flex-1 border-0 bg-transparent px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search" onKeyUp={handleSearch} />
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
