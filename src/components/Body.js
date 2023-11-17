import RestaurantCard, { withClosedLabelRestaurant } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [considerDishesState, setConsiderDishesState] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantClosed = withClosedLabelRestaurant(RestaurantCard);

  useEffect(() => {
    fetchAllRestaurantsData();
  }, []);

  const fetchAllRestaurantsData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    const jsonParentAPI = json?.data?.cards;

    const restaurantGridListing =
      jsonParentAPI[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants ===
      undefined
        ? jsonParentAPI[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        : jsonParentAPI[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

    const considerDishes = jsonParentAPI[1]?.card?.card;

    setListOfRestaurants(restaurantGridListing);
    setFilteredRestaurants(restaurantGridListing);

    // console.log(considerDishes);

    // whats on ur mind - filter dishes - [1]
    // Top restaurant chains - rest link - [2]
    // other major cities - [7]
    // Best Cuisines Near Me - [8]
    //
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
      {/* Data Mapped */}
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
  );
};

export default Body;
