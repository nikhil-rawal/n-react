import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ShimmerMenu from "../../forShimmer/ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <ShimmerMenu />;

  const { name, cuisines, areaName } = resInfo?.cards[0]?.card?.card?.info;
  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const itemCategory = category?.filter(
    (cat) =>
      cat?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const nestedItemCategory = category?.filter(
    (cat) =>
      cat?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  const allCategories = itemCategory?.concat(nestedItemCategory);

  return allCategories.length === 0 ? (
    <ShimmerMenu />
  ) : (
    <div className="text-center mt-12">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h4 className="mb-10">
        {cuisines.join(", ")} - {areaName}
      </h4>

      <div>
        {allCategories &&
          allCategories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              itemCardData={
                category?.card?.card?.categories === undefined
                  ? category?.card?.card
                  : category?.card?.card?.categories[0]
              }
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
