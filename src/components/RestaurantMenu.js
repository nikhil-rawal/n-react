import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6809111&lng=77.2045867&restaurantId=26713&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonData = await data.json();
    console.log(jsonData);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurantMenu">
      <h1>Name of restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
