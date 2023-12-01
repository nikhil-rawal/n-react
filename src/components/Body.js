import RestaurantCard, { withClosedLabelRestaurant } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { DISHES_INDIVIDUAL_URL, RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import ConsiderDishesCard from "./ConsiderDishesCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [dishesRestaurants, setDishesRestaurants] = useState([]);
  const [considerDishesState, setConsiderDishesState] = useState([]);
  const [searchText, setSearchText] = useState("");

  function regularExpressionCheck(checkString) {
    if (checkString.length === 5) return checkString;
    let result = /(?<=_id[=])[0-9]{5}/g.exec(checkString);
    return result;
  }

  const RestaurantClosed = withClosedLabelRestaurant(RestaurantCard);

  useEffect(() => {
    fetchAllRestaurantsData();
  }, []);

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
    const restaurantGridListingArray = restaurantGridListingFirstArray.concat(
      restaurantGridListingSecondArray
    );

    const restaurantGridListing =
      restaurantGridListingArray[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const considerDishesArray = jsonParentAPI.filter(
      (filterDishCardId) =>
        filterDishCardId?.card?.card?.id === "whats_on_your_mind"
    );

    const considerDishesListing =
      considerDishesArray[0]?.card?.card?.gridElements?.infoWithStyle.info;

    setListOfRestaurants(restaurantGridListing);
    setFilteredRestaurants(restaurantGridListing);
    setConsiderDishesState(considerDishesListing);

    console.log(considerDishesListing);

    // whats on ur mind - filter dishes - [1] === DONE
    // Top restaurant chains - rest link - [2] === DONE
    // other major cities - [7]
    // Best Cuisines Near Me - [8]
    // Explore Restaurants near me - using latitude and longitude - set India only
    // Top Rated Button
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline !!!!</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Filter and Search Buttons */}
      <div className="filter flex item-center">
        {/* Search Input and Button */}
        <div className="search-div m-4 p-4">
          {/* Search Input */}
          <input
            type="text"
            className="border border-solid border-black rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          {/* Search Button */}
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-md"
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
            Search
          </button>
        </div>

        {/* Filter Button */}
        {/* <div className="search-div m-4 p-4">
          <button
            className="px-4 py-2 bg-orange-100 m-4 rounded-md"
            onClick={() => {
              setListOfRestaurants(
                listOfRestaurants.filter((item) => item.info.avgRating >= 4.3)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div> */}
      </div>

      {/* Consider Dishes Flex */}
      <div>
        <div>What's on your mind?</div>
        <div className="flex flex-wrap">
          {considerDishesState.map((item) => (
            <Link
              key={item?.id}
              // to={DISHES_INDIVIDUAL_URL + item?.action?.text.replace(/\s/g, "")}
              to={
                "/dishesCollection/" +
                item?.action?.text +
                "/" +
                regularExpressionCheck(item?.entityId)
              }
            >
              <ConsiderDishesCard
                imageID={item?.imageId}
                alt={item?.accessibility?.altText}
                dishText={item?.action?.link}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Data Mapped - Top Restaurant Chains Flex */}
      <div>
        <div>Top Restaurant chains near you!</div>
        <div className="flex flex-wrap">
          {filteredRestaurants.map((rest) => (
            <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
              {rest?.info?.isOpen ? (
                <RestaurantCard resData={rest} />
              ) : (
                <RestaurantClosed resData={rest} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
