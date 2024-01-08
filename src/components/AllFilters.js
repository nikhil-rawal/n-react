import { useState } from "react";

const AllFilters = ({
  listOfRestaurants,
  filteredRestaurants,
  setFilteredRestaurants,
}) => {
  const [toggleValue, setToggleValue] = useState("Ratings 4.0+");

  function toggleTopRated() {
    if (filteredRestaurants === listOfRestaurants) {
      setToggleValue("Ratings 4.0+");
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setToggleValue("Show All Restaurants");
    }
    if (toggleValue === "Ratings 4.0+") {
      setFilteredRestaurants(
        listOfRestaurants.filter((item) => item?.info?.avgRating > 4)
      );
      setToggleValue("Show All Restaurants");
    }
    if (toggleValue === "Show All Restaurants") {
      setFilteredRestaurants(listOfRestaurants);
      setToggleValue("Ratings 4.0+");
    }
  }

  // function searchRestaurant(e) {
  //   setSearchText(e.target.value);
  //   const searchFilteredRestaurants = listOfRestaurants.filter((resName) => {
  //     if (e.target.value === "") {
  //       return listOfRestaurants;
  //     } else {
  //       return resName?.info?.name
  //         ?.toLowerCase()
  //         .includes(searchText.toLowerCase());
  //     }
  //   });
  //   setFilteredRestaurants(searchFilteredRestaurants);
  // }

  return (
    <div className="flex flex-col md:flex-row w-full my-8 md:my-16 justify-center md:justify-between items-center">
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

export default AllFilters;
