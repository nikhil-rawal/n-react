import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import "react-multi-carousel/lib/styles.css";
import RestaurantsMain from "./forRestaurants/RestaurantsMain";
import DishesCarousel from "./forDishes/DishesCarousel";
import SearchBar from "./SearchBar";
import ShimmerHome from "./forShimmer/ShimmerHome";
import SelectCity from "./SelectCity";
import TopCuisines from "./TopCuisines";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [considerDishesState, setConsiderDishesState] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

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

    const restaurantGridListingFirstArray = jsonParentAPI?.filter(
      (restaurantGridRestaurants) =>
        restaurantGridRestaurants?.card?.card?.id === "top_brands_for_you"
    );
    const restaurantGridListingSecondArray = jsonParentAPI?.filter(
      (restaurantGridRestaurants) =>
        restaurantGridRestaurants?.card?.card?.id === "restaurant_grid_listing"
    );
    const considerDishesArray = jsonParentAPI?.filter(
      (filterDishCardId) =>
        filterDishCardId?.card?.card?.id === "whats_on_your_mind"
    );

    const restaurantGridListingUnfiltered =
      restaurantGridListingFirstArray[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.concat(
        restaurantGridListingSecondArray[0]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      ) ??
      restaurantGridListingFirstArray[0]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants ??
      restaurantGridListingSecondArray[0]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants ??
      undefined;

    const restaurantGridListing = Array.from(
      new Set(restaurantGridListingUnfiltered?.map((obj) => obj?.info?.id))
    )?.map((id) => {
      return restaurantGridListingUnfiltered?.find(
        (obj) => obj?.info?.id === id
      );
    });

    const considerDishesListing =
      considerDishesArray[0]?.card?.card?.gridElements?.infoWithStyle?.info;

    restaurantGridListing && setListOfRestaurants(restaurantGridListing);
    considerDishesListing && setConsiderDishesState(considerDishesListing);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline !!!!</h1>;

  return listOfRestaurants?.length === 0 ||
    considerDishesState?.length === 0 ? (
    <ShimmerHome />
  ) : (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 mt-8 sm:mt-12 lg:mt-16 w-auto overflow-hidden">
      {/* Consider Dishes Flex */}
      {considerDishesState && (
        <DishesCarousel considerDishesState={considerDishesState} />
      )}
      <hr />

      {/* Search and Filter */}
      <SearchBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      {/* </div> */}

      <hr className="w-9/12 m-auto" />
      {/* Data Mapped - Top Restaurant Chains Flex */}
      {filteredRestaurants === null || filteredRestaurants?.length == 0 ? (
        <div className=" text-red-700 py-4 my-4 items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              <strong>OOPS!</strong> No results found
            </h1>
            <p className="text-lg">
              We couldn't find any results for your search. Please try again.
            </p>
            <button
              className="text-sm md:text-lg font-medium bg-red-500 hover:bg-red-600 border-red-500 text-white rounded my-4 py-2 px-4"
              onClick={() => setFilteredRestaurants(listOfRestaurants)}
            >
              Reset
            </button>
          </div>
        </div>
      ) : (
        filteredRestaurants.length !== 0 && (
          <RestaurantsMain
            filteredRestaurants={filteredRestaurants}
            listOfRestaurants={listOfRestaurants}
            setFilteredRestaurants={setFilteredRestaurants}
          />
        )
      )}

      {/* <hr />
      <TopCuisines /> */}
    </div>
  );
};

export default Body;
