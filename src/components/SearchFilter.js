import { useState } from "react";

const SearchFilter = ({
  listOfRestaurants,
  filteredRestaurants,
  setFilteredRestaurants,
}) => {
  const [toggleValue, setToggleValue] = useState("Ratings 4.0+");
  const [searchText, setSearchText] = useState("");

  function toggleTopRated() {
    if (filteredRestaurants === listOfRestaurants) {
      setToggleValue("Ratings 4.0+");
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setToggleValue("Show All Restaurants");
    }
    if (toggleValue === "Ratings 4.0+") {
      setFilteredRestaurants(
        listOfRestaurants.filter((item) => item?.info?.avgRating > 4),
      );
      setToggleValue("Show All Restaurants");
    }
    if (toggleValue === "Show All Restaurants") {
      setFilteredRestaurants(listOfRestaurants);
      setToggleValue("Ratings 4.0+");
    }
  }

  function searchRestaurant(e) {
    setSearchText(e.target.value);
    const searchFilteredRestaurants = listOfRestaurants.filter((resName) => {
      if (e.target.value === "") {
        return listOfRestaurants;
      } else {
        return resName?.info?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase());
      }
    });
    setFilteredRestaurants(searchFilteredRestaurants);
  }

  return (
    <div className="flex flex-col md:flex-row w-full my-8 md:my-16 justify-center md:justify-between items-center">
      {/* Search Button */}
      <div className="py-2 md:py-0 flex flex-row w-10/12 md:w-6/12 2xl:w-5/12">
        <input
          type="text"
          className="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-orange-100 focus:border-orange-100 hover:bg-orange-50 w-full ps-3 md:ps-6 2xl:ps-6 p-0 md:p-2 2xl:p-4 hover:text-gray-1000 2xl:text-lg"
          placeholder="Search your favourite restaurant"
          value={searchText}
          onChange={searchRestaurant}
        />
        <button
          className="p-2.5 ms-2 text-sm 2xl:text-lg font-medium text-white bg-orange-400 rounded-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 "
          onClick={() => {
            const searchFilteredRestaurants = listOfRestaurants.filter(
              (resName) =>
                resName?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
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
          <span className="sr-only">Search</span>
        </button>
      </div>

      {/* Filter Button */}
      <div className="py-2 md:py-0 flex w-12/12 md:w-6/12 2xl:w-5/12 justify-center md:justify-end">
        <button
          className="p-1.5 md:p-2.5 2xl:p-3.5 w-full md:w-inherit ms-0 md:ms-2 2xl:ms-3 text-sm 2xl:text-lg font-medium text-white bg-orange-400 rounded-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 "
          onClick={toggleTopRated}
        >
          {toggleValue}
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
