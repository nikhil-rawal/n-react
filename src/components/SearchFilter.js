import { useState } from "react";

const SearchFilter = ({
  listOfRestaurants,
  filteredRestaurants,
  setFilteredRestaurants,
}) => {
  const [toggleValue, setToggleValue] = useState(
    "Explore Top Rated Restaurants"
  );
  const [searchText, setSearchText] = useState("");

  function toggleTopRated() {
    if (filteredRestaurants === listOfRestaurants) {
      setToggleValue("Explore Top Rated Restaurants");
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setToggleValue("Show All Restaurants");
    }
    if (toggleValue === "Explore Top Rated Restaurants") {
      setFilteredRestaurants(
        listOfRestaurants.filter((item) => item?.info?.avgRating > 4)
      );
      setToggleValue("Show All Restaurants");
    }
    if (toggleValue === "Show All Restaurants") {
      setFilteredRestaurants(listOfRestaurants);
      setToggleValue("Explore Top Rated Restaurants");
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
    <div className="flex flex-row w-full justify-between my-16">
      {/* Search Button */}
      <div className="flex flex-row w-6/12">
        <input
          type="text"
          className="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-orange-100 focus:border-orange-100 hover:bg-orange-50 w-full ps-6 p-2 hover:text-gray-1000"
          placeholder="Search your favourite restaurant"
          value={searchText}
          onChange={searchRestaurant}
        />
        <button
          className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-400 rounded-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 "
          onClick={() => {
            const searchFilteredRestaurants = listOfRestaurants.filter(
              (resName) =>
                resName?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchFilteredRestaurants);
          }}
        >
          <svg
            className="w-4 h-4"
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
      <div className="flex w-6/12 justify-end">
        <button
          className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-400 rounded-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 "
          onClick={toggleTopRated}
        >
          {toggleValue}
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
