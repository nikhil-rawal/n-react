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

  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;
  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log(resInfo?.cards[0]?.card?.card?.info);

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
    <div className=" container-md mt-12 ">
      <div className="flex justify-evenly items-center pb-4 border-b border-dashed">
        <div>
          <h1 className="text-xl font-bold my-2">{name}</h1>
          <p className="text-xs text-gray-500">
            <span>{cuisines.join(", ")}</span>
          </p>
          <p className="text-xs text-gray-500">{areaName}</p>
        </div>
        <div className="border rounded-md font-bold  p-2 text-sm">
          <p className="flex gap-1 mb-2 text-green-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>{" "}
            {avgRating}
          </p>
          <p className="pt-2 border-t text-xs font-normal text-gray-500">
            {totalRatingsString}
          </p>
        </div>
      </div>

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
