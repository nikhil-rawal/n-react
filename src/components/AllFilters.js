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
        filteredRestaurants?.filter((item) => item?.info?.avgRating > 4),
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
        filteredRestaurants?.filter((item) => item?.info?.veg === true),
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
          (item) => item?.info?.sla?.deliveryTime <= 30,
        ),
      );
      setTogglefastDelivery("Show All Restaurants");
    }
    if (togglefastDelivery === "Show All Restaurants") {
      setFilteredRestaurants(listOfRestaurants);
      toggleDefault();
    }
  }

  const Filterbutton = (clickHandler, buttonName) => {
    return (
      <button
        className="p-1.5 md:p-2.5 2xl:p-3.5 ms-0 md:ms-2 2xl:ms-3 text-sm 2xl:text-lg font-medium text-white bg-orange-500 rounded-xl border border-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400 items-center justify-center w-3/12 md:w-5/12"
        onClick={clickHandler}
      >
        {buttonName}
      </button>
    );
  };
  return (
    <div className="flex py-2 my-2 md:py-5 md:my-5 flex-row mx-auto md:mx-0 w-12/12 md:w-6/12 2xl:w-5/12 justify-evenly md:justify-start">
      {/* Filter Button */}
      {Filterbutton(toggleTopRatedRestaurant, toggleRating)}
      {Filterbutton(toggleVegRestaurant, toggleVeg)}
      {Filterbutton(toggleFastDeliveryRestaurant, togglefastDelivery)}
    </div>
  );
};

export default AllFilters;
