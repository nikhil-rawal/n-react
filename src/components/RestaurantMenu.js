import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  // Delhi KFC - 26713

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + "275");

    const jsonData = await data.json();
    setResInfo(jsonData.data);

    // console.log("All Data JSON", jsonData);
    // console.log("Res Card", resInfo?.cards[0]?.card?.card?.info);
    // console.log(
    //   "Item Cards",
    //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card.itemCards
    // );
  };

  if (resInfo === null)
    return (
      <>
        <Shimmer />
      </>
    );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="restaurantMenu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
