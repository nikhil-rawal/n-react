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
  const [searchText, setSearchText] = useState("");

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

    setListOfRestaurants(restaurantGridListing);
    setFilteredRestaurants(restaurantGridListing);
    setConsiderDishesState(considerDishesListing);
  };
  // whats on ur mind - filter dishes - [1] === DONE
  // Top restaurant chains - rest link - [2] === DONE
  // nested data === DONE
  // other major cities - [7]
  // Explore Restaurants near me - using latitude and longitude - set India only
  // Top Rated Button

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline !!!!</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-36 mt-16 w-auto">
      <div>
        <form>
          <div className="flex flex-row">
            <input
              type="text"
              id="simple-search"
              className="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-100 focus:border-blue-100 hover:bg-blue-50 w-full ps-10 p-2"
              placeholder="Search your favourite restaurant"
              required=""
            />

            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
        </form>
      </div>
      {/* Consider Dishes Flex */}
      <DishesCarousel considerDishesState={considerDishesState} />

      <hr />
      {/* Data Mapped - Top Restaurant Chains Flex */}
      <RestaurantsMain filteredRestaurants={filteredRestaurants} />

      {/* Filter and Search Buttons */}

      {/*aojsijaisjai */}
      <div className="filter flex item-center">
        {/* Search Input and Button */}
        <div className="search-div m-4 p-4">
          {/* Search Input */}
          <input
            type="text"
            className="border-2 border-solid border-gray-400 rounded-md"
            // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <div className="search-div m-4 p-4">
          <button
            className="px-4 py-2 bg-orange-100 m-4 rounded-md"
            onClick={() => {
              setListOfRestaurants(
                listOfRestaurants.filter((item) => item?.info?.avgRating >= 4)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;

// {<div className="body">
//   {/* Filter and Search Buttons */}
//   <div className="filter flex item-center">
//     {/* Search Input and Button */}
//     <div className="search-div m-4 p-4">
//       {/* Search Input */}
//       <input
//         type="text"
//         className="border border-solid border-black rounded-sm"
//         value={searchText}
//         onChange={(e) => {
//           setSearchText(e.target.value);
//         }}
//       />

//       {/* Search Button */}
//       <button
//         className="px-4 py-2 bg-green-100 m-4 rounded-md"
//         onClick={() => {
//           const searchFilteredRestaurants = listOfRestaurants.filter(
//             (resName) =>
//               resName.info.name.toLowerCase().includes(searchText.toLowerCase())
//           );
//           setFilteredRestaurants(searchFilteredRestaurants);
//         }}
//       >
//         Search
//       </button>
//     </div>

//     {/* Filter Button */}
//     <div className="search-div m-4 p-4">
//       <button
//         className="px-4 py-2 bg-orange-100 m-4 rounded-md"
//         onClick={() => {
//           setListOfRestaurants(
//             listOfRestaurants.filter((item) => item?.info?.avgRating >= 4)
//           );
//         }}
//       >
//         Top Rated Restaurants
//       </button>
//     </div>
//   </div>

//   {/* Consider Dishes Flex */}
//   <div>
//     <div>What's on your mind?</div>
//     {/* <div className="flex flex-wrap"> */}
//     <Carousel responsive={responsive} infinite={true} slidesToSlide={2}>
//       {considerDishesState.map((item) => (
//         <Link
//           key={item?.id}
//           // to={DISHES_INDIVIDUAL_URL + item?.action?.text.replace(/\s/g, "")}
//           to={
//             "/dishesCollection/" +
//             item?.action?.text +
//             "/" +
//             regularExpressionCheck(item?.entityId)
//           }
//         >
//           <ConsiderDishesCard
//             imageID={item?.imageId}
//             alt={item?.accessibility?.altText}
//             dishText={item?.action?.link}
//           />
//         </Link>
//       ))}
//     </Carousel>
//     {/* </div> */}
//   </div>

//   {/* Data Mapped - Top Restaurant Chains Flex */}
//   <div>
//     <div>Top Restaurant chains near you!</div>
//     <div className="flex flex-wrap">
//       {filteredRestaurants.map((rest) => (
//         <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
//           {rest?.info?.isOpen ? (
//             <RestaurantCard resData={rest} />
//           ) : (
//             <RestaurantClosed resData={rest} />
//           )}
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>
// }
