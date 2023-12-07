import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import "react-multi-carousel/lib/styles.css";
import RestaurantsMain from "./forRestaurants/RestaurantsMain";
import DishesCarousel from "./forDishes/DishesCarousel";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [considerDishesState, setConsiderDishesState] = useState([]);
  const [toggleValue, setToggleValue] = useState(
    "Explore Top Rated Restaurants"
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchAllRestaurantsData();
  }, []);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const fetchAllRestaurantsData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    const jsonParentAPI = json?.data?.cards;

    const restaurantGridListingFirstArray = jsonParentAPI.filter(
      (restaurantGridRestaurants) =>
        restaurantGridRestaurants?.card?.card?.id === "top_brands_for_you"
    );
    const restaurantGridListingSecondArray = jsonParentAPI.filter(
      (restaurantGridRestaurants) =>
        restaurantGridRestaurants?.card?.card?.id === "restaurant_grid_listing"
    );
    const considerDishesArray = jsonParentAPI.filter(
      (filterDishCardId) =>
        filterDishCardId?.card?.card?.id === "whats_on_your_mind"
    );

    const restaurantGridListingArray = restaurantGridListingFirstArray?.concat(
      restaurantGridListingSecondArray
    );

    const restaurantGridListing =
      restaurantGridListingArray[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const considerDishesListing =
      considerDishesArray[0]?.card?.card?.gridElements?.infoWithStyle?.info;

    restaurantGridListing && setListOfRestaurants(restaurantGridListing);
    considerDishesListing && setConsiderDishesState(considerDishesListing);
  };

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

  // const searchFilteredRestaurants = listOfRestaurants.filter((resName) =>
  //   resName.info.name.toLowerCase().includes(searchText.toLowerCase())
  // );
  // setFilteredRestaurants(searchFilteredRestaurants);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline !!!!</h1>;

  return listOfRestaurants.length === 0 ||
    filteredRestaurants.length === 0 ||
    considerDishesState.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-36 mt-16 w-auto">
      {/* Consider Dishes Flex */}
      {considerDishesState && (
        <DishesCarousel considerDishesState={considerDishesState} />
      )}
      <hr />

      <div className="flex flex-row w-full justify-between my-16">
        {/* Search Button */}
        <div className="flex flex-row w-5/12">
          <input
            type="text"
            className="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-100 focus:border-blue-100 hover:bg-blue-50 w-full ps-6 p-2 hover:text-gray-1000"
            placeholder="Search your favourite restaurant"
            value={searchText}
            onChange={searchRestaurant}
          />
          <button
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            onClick={() => {
              const searchFilteredRestaurants = listOfRestaurants.filter(
                (resName) =>
                  resName.info.name
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
        <div className="flex w-5/12 justify-center">
          <button
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            onClick={toggleTopRated}
          >
            {toggleValue}
          </button>
        </div>
      </div>

      <hr />
      {/* Data Mapped - Top Restaurant Chains Flex */}
      {filteredRestaurants && (
        <RestaurantsMain filteredRestaurants={filteredRestaurants} />
      )}
    </div>
  );
};

export default Body;
