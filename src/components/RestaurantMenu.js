import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName } = resInfo?.cards[0]?.card?.card?.info;
  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const itemCategory = category.filter(
    (cat) =>
      cat?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // const nestedItemCategory = category.filter(
  //   (cat) =>
  //     cat?.card?.card?.["@type"] ==
  //     "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  // );

  // console.log(itemCategory, nestedItemCategory);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h4>
        {cuisines.join(", ")} - {areaName}
      </h4>
      <div>
        {/* {nestedItemCategory &&
          nestedItemCategory.map((category) => (
            <RestaurantCategory nestedCardData={category?.card?.card} />
          ))} */}
        {itemCategory &&
          itemCategory.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card.title}
              itemCardData={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
