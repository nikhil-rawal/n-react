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

  // function checkNoFilterLeft() {
  //   if (searchFilteredRestaurants?.length === 0) {
  //     setFilteredRestaurants(null);
  //   } else {
  //     setFilteredRestaurants(searchFilteredRestaurants);
  //   }
  // }

  function toggleTopRatedRestaurant() {
    if (filteredRestaurants === listOfRestaurants) {
      toggleDefault();
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setToggleRating("Show All");
    }
    if (toggleRating === "Ratings 4.0+") {
      setFilteredRestaurants(
        filteredRestaurants?.filter((item) => item?.info?.avgRating > 4)
      );
      setToggleRating("Show All");
    }
    if (toggleRating === "Show All") {
      setFilteredRestaurants(listOfRestaurants);
      toggleDefault();
    }
  }

  function toggleVegRestaurant() {
    if (filteredRestaurants === listOfRestaurants) {
      toggleDefault();
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setToggleVeg("Show All");
    }
    if (toggleVeg === "Pure Veg") {
      setFilteredRestaurants(
        filteredRestaurants?.filter((item) => item?.info?.veg === true)
      );
      setToggleVeg("Show All");
    }
    if (toggleVeg === "Show All") {
      setFilteredRestaurants(listOfRestaurants);
      toggleDefault();
    }
  }

  function toggleFastDeliveryRestaurant() {
    if (filteredRestaurants === listOfRestaurants) {
      toggleDefault();
    }
    if (filteredRestaurants !== listOfRestaurants) {
      setTogglefastDelivery("Show All");
    }
    if (togglefastDelivery === "Fast Delivery") {
      setFilteredRestaurants(
        filteredRestaurants?.filter(
          (item) => item?.info?.sla?.deliveryTime <= 30
        )
      );
      setTogglefastDelivery("Show All");
    }
    if (togglefastDelivery === "Show All") {
      setFilteredRestaurants(listOfRestaurants);
      toggleDefault();
    }
  }

  function toggleRelevance() {
    setFilteredRestaurants(listOfRestaurants);
    toggleDefault();
  }
  const Filterbutton = (clickHandler, buttonName) => {
    return (
      <button
        className="p-1.5 my-2 py-2.5 md:p-2.5 2xl:p-3.5 ms-0 md:ms-3 2xl:ms-3 text-sm 2xl:text-lg font-medium text-white bg-orange-500 rounded-xl border border-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400 items-center justify-center w-5/12"
        onClick={clickHandler}
      >
        {buttonName}
      </button>
    );
  };
  return (
    <div className="flex flex-col md:flex-row py-2 my-2 md:py-5 md:my-5 mx-auto md:mx-0 w-12/12 md:w-8/12 2xl:w-5/12 justify-evenly md:justify-start items-center md:flex-start">
      {Filterbutton(toggleRelevance, "Relevance")}
      {Filterbutton(toggleTopRatedRestaurant, toggleRating)}
      {Filterbutton(toggleVegRestaurant, toggleVeg)}
      {Filterbutton(toggleFastDeliveryRestaurant, togglefastDelivery)}
    </div>
  );
};

export default AllFilters;
