import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(
  //   "itemCards",
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
  // );

  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const categories1 = category.filter(
    (cat) =>
      cat?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log("category", category);

  // const categories2 = category.filter(
  //   (cat) =>
  //     (cat?.card?.card?.["@type"] == cat?.card?.card?.["@type"]) ==
  //     "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  // );
  // console.log("category", category);

  //        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"

  console.log("cat1", categories1);
  // console.log("cat2", categories2);
  return (
    <div className="restaurantMenu">
      <h1>{name}</h1>
      <p>
        {" "}
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
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
