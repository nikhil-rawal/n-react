import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import "react-multi-carousel/lib/styles.css";
import RestaurantsMain from "./forRestaurants/RestaurantsMain";
import DishesCarousel from "./forDishes/DishesCarousel";
import SearchFilter from "./SearchFilter";
import ShimmerHome from "./forShimmer/ShimmerHome";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [considerDishesState, setConsiderDishesState] = useState([]);

  useEffect(() => {
    fetchAllRestaurantsData();
  }, []);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const fetchAllRestaurantsData = async () => {
    const data = await fetch(`https://corsproxy.io/?${RESTAURANT_API}`);
    const json = await data.json();
    const jsonParentAPI = json?.data?.cards;

    const restaurantGridListingFirstArray = jsonParentAPI.filter(
      (restaurantGridRestaurants) =>
        restaurantGridRestaurants?.card?.card?.id === "top_brands_for_you",
    );
    const restaurantGridListingSecondArray = jsonParentAPI.filter(
      (restaurantGridRestaurants) =>
        restaurantGridRestaurants?.card?.card?.id === "restaurant_grid_listing",
    );
    const considerDishesArray = jsonParentAPI.filter(
      (filterDishCardId) =>
        filterDishCardId?.card?.card?.id === "whats_on_your_mind",
    );

    const restaurantGridListing =
      restaurantGridListingFirstArray[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.concat(
        restaurantGridListingSecondArray[0]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants,
      );
    // let Arr = ["DS", "Algo", "OS", "HTML", "DS", "OS", "Java", "HTML", "Algo"];
    // let outputArray = [];
    // function removeusingSet(arr) {
    //   let outputArray = Array.from(new Set(arr));
    //   return outputArray;
    // }
    // console.log(removeusingSet(Arr));

    console.log(restaurantGridListing);

    const considerDishesListing =
      considerDishesArray[0]?.card?.card?.gridElements?.infoWithStyle?.info;

    restaurantGridListing && setListOfRestaurants(restaurantGridListing);
    considerDishesListing && setConsiderDishesState(considerDishesListing);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline !!!!</h1>;

  return listOfRestaurants.length === 0 ||
    filteredRestaurants.length === 0 ||
    considerDishesState.length === 0 ? (
    <ShimmerHome />
  ) : (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 mt-8 sm:mt-12 lg:mt-16 w-auto overflow-hidden">
      {/* Consider Dishes Flex */}
      {considerDishesState && (
        <DishesCarousel considerDishesState={considerDishesState} />
      )}
      <hr />

      {/* Search and Filter */}
      <SearchFilter
        listOfRestaurants={listOfRestaurants}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      {/* </div> */}

      <hr />
      {/* Data Mapped - Top Restaurant Chains Flex */}
      {filteredRestaurants && (
        <RestaurantsMain filteredRestaurants={filteredRestaurants} />
      )}
    </div>
  );
};

export default Body;
