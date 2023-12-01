import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ConsiderDishesCard from "./ConsiderDishesCard";
import { RESTAURANT_API } from "../utils/constants";

const DishesCollectionCard = () => {
  const { dishName, dishID } = useParams();

  // useEffect(() => {
  //   fetchAllDishesRestaurantsData();
  // }, []);

  const fetchAllDishesRestaurantsData = async () => {
    const data = await fetch(
      `${RESTAURANT_API}&collection=${dishID}&tags=layout_CCS&sortBy=&filters=&type=rcv2`
    );
    const json = await data.json();
    const jsonAPIData = json;
    console.log(jsonAPIData);
  };
  // console.log(dishID, dishName);
  // console.log(
  //   "abc",
  //   `${RESTAURANT_API}&collection=${dishID}&tags=layout_CCS&sortBy=&filters=&type=rcv2`
  // );
  return (
    <div>
      <h1>Our favourite restaurants curated for {dishName}</h1>
      {/* <RestaurantCard />       */}
    </div>
  );
};

export default DishesCollectionCard;
