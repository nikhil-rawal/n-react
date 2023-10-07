import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";

const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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
    // setFilteredRestaurants(
    //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  return listOfRestaurants;
};

export default useListOfRestaurants;
