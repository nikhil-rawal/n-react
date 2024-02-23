import { useState } from "react";

const SearchBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  function searchRestaurant(e) {
    setSearchText(e.target.value);
    const searchFilteredRestaurants = listOfRestaurants?.filter((resName) => {
      if (e.target.value === "") {
        return listOfRestaurants;
      } else {
        const isMatchFound = resName?.info?.name
          ?.toLowerCase()
          .includes(e.target.value.toLowerCase());
        if (isMatchFound) {
          return resName;
        } else {
          return null;
        }
      }
    });
    if (searchFilteredRestaurants?.length === 0) {
      setFilteredRestaurants(null);
    } else {
      setFilteredRestaurants(searchFilteredRestaurants);
    }
  }
  return (
    <div className="flex w-full my-8 md:my-14 justify-center items-center mx-auto">
      <div className="py-2 md:py-0 flex flex-row w-10/12 md:w-8/12 2xl:w-6/12 relative">
        <input
          type="text"
          className="border border-gray-200 outline-orange-300 text-gray-900 text-md rounded-lg focus:ring-orange-100 focus:border-orange-100 hover:bg-orange-50 w-full ps-3 md:ps-6 2xl:ps-6 p-0 md:p-2 2xl:p-4 hover:text-gray-1000 2xl:text-lg line leading-3 md:leading-loose"
          placeholder="Search favourite restaurants"
          value={searchText}
          onChange={searchRestaurant}
        />
        <button
          className="p-3 ms-4 text-sm 2xl:text-lg font-medium text-white border-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400 bg-orange-400 rounded-lg "
          onClick={() => {
            const searchFilteredRestaurants = listOfRestaurants?.filter(
              (resName) =>
                resName?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchFilteredRestaurants);
          }}
        >
          <svg
            className="w-3 md:w-4 2xl:w-6 h-3 md:h-4 2xl:h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
