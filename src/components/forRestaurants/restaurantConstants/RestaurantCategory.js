import { useState } from "react";
import RestaurantMenuItemList from "./RestaurantMenuItemList";

const RestaurantCategory = ({ itemCardData, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {itemCardData?.title} ({itemCardData?.itemCards?.length})
        </span>
        {!showItems ? <span>🔽</span> : <span>🔼</span>}
      </div>
      <div>
        {showItems && (
          <RestaurantMenuItemList
            key={"87887878778"}
            items={itemCardData?.itemCards}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;