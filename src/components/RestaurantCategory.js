import RestaurantMenuItemList from "./RestaurantMenuItemList";

const RestaurantCategory = (props) => {
  //   console.log("cardData itemCards - ", cardData.itemCards.length);
  //   console.log("cardData categories - ", cardData.categories.length);

  //   const { itemCardData, nestedCardData } = props;
  const { itemCardData } = props;
  //   console.log("item 1 - ", itemCardData);
  //   console.log("item 2 - ", nestedCardData);
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {itemCardData.title} ({itemCardData.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      <div>
        <RestaurantMenuItemList
          key={"87887878778"}
          items={itemCardData.itemCards}
        />
      </div>
    </div>
  );
};

export default RestaurantCategory;
