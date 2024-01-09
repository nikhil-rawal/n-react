import { useState, useEffect } from "react";

const AllFilters = ({
  listOfRestaurants,
  filteredRestaurants,
  setFilteredRestaurants,
}) => {
  const [toggleRating, setToggleRating] = useState("Ratings 4.0+");
  const [toggleVeg, setToggleVeg] = useState("Pure Veg");
  const [togglefastDelivery, setTogglefastDelivery] = useState("Fast Delivery");

  function toggleDefault() {
    setToggleVeg("Pure Veg");
    setToggleRating("Ratings 4.0+");
    setTogglefastDelivery("Fast Delivery");
  }

  function toggleTopRatedRestaurant() {
    if (filteredRestaurants === listOfRestaurants) {
      toggleDefault();
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setToggleRating("Show All Restaurants");
    }
    if (toggleRating === "Ratings 4.0+") {
      setFilteredRestaurants(
        filteredRestaurants?.filter((item) => item?.info?.avgRating > 4)
      );
      setToggleRating("Show All Restaurants");
    }
    if (toggleRating === "Show All Restaurants") {
      setFilteredRestaurants(listOfRestaurants);
      toggleDefault();
    }
  }

  function toggleVegRestaurant() {
    if (filteredRestaurants === listOfRestaurants) {
      toggleDefault();
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setToggleVeg("Show All Restaurants");
    }
    if (toggleVeg === "Pure Veg") {
      setFilteredRestaurants(
        filteredRestaurants?.filter((item) => item?.info?.veg === true)
      );
      setToggleVeg("Show All Restaurants");
    }
    if (toggleVeg === "Show All Restaurants") {
      setFilteredRestaurants(listOfRestaurants);
      toggleDefault();
    }
  }

  function toggleFastDeliveryRestaurant() {
    if (filteredRestaurants === listOfRestaurants) {
      toggleDefault();
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setTogglefastDelivery("Show All Restaurants");
    }
    if (togglefastDelivery === "Fast Delivery") {
      setFilteredRestaurants(
        filteredRestaurants?.filter(
          (item) => item?.info?.sla?.deliveryTime <= 30
        )
      );
      setTogglefastDelivery("Show All Restaurants");
    }
    if (togglefastDelivery === "Show All Restaurants") {
      setFilteredRestaurants(listOfRestaurants);
      toggleDefault();
    }
  }
  return (
    <div className="flex flex-col md:flex-row w-full my-8 md:my-16 justify-center md:justify-between items-center">
      {/* Filter Button */}
      <div className="py-2 md:py-0 flex w-12/12 md:w-6/12 2xl:w-5/12 justify-center md:justify-end">
        <button
          className="p-1.5 md:p-2.5 2xl:p-3.5 w-full md:w-inherit ms-0 md:ms-2 2xl:ms-3 text-sm 2xl:text-lg font-medium text-white bg-orange-400 rounded-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 "
          onClick={toggleTopRatedRestaurant}
        >
          {toggleRating}
        </button>
        <button
          className="p-1.5 md:p-2.5 2xl:p-3.5 w-full md:w-inherit ms-0 md:ms-2 2xl:ms-3 text-sm 2xl:text-lg font-medium text-white bg-orange-400 rounded-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 "
          onClick={toggleVegRestaurant}
        >
          {toggleVeg}
        </button>
        <button
          className="p-1.5 md:p-2.5 2xl:p-3.5 w-full md:w-inherit ms-0 md:ms-2 2xl:ms-3 text-sm 2xl:text-lg font-medium text-white bg-orange-400 rounded-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 "
          onClick={toggleFastDeliveryRestaurant}
        >
          {togglefastDelivery}
        </button>
      </div>
    </div>
  );
};

export default AllFilters;
