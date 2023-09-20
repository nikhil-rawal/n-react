import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map(
        (rest) => rest.info.cuisines
      ),
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map(
        (rest) => rest.info.cuisines.map((item) => item[0])
      )
    );

    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          // onClick={() => {
          //   setListOfRestaurants(resList.filter((item) => item.data.star >= 4));
          // }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            // category={restaurant.info.category}
            avgRating={restaurant.info.avgRating}
            deliveryTime={restaurant.info.sla.deliveryTime}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
