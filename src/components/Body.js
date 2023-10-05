import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();

    //API Restaurant Data
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log(listOfRestaurants)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-div">
          {/* Search Input */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          {/* Search Button */}
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((item) => item.info.avgRating >= 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* Data Mapped */}
      <div className="res-container">
        {filteredRestaurants.map((rest) => (
          <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}>
            <RestaurantCard
              name={rest.info.name}
              category={rest.info.cuisines.join(", ")}
              avgRating={rest.info.avgRating}
              deliveryTime={rest.info.sla.deliveryTime}
              cloudinaryImageId={rest.info.cloudinaryImageId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
