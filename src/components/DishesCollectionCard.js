import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ConsiderDishesCard from "./ConsiderDishesCard";
import { RESTAURANT_API } from "../utils/constants";

const DishesCollectionCard = () => {
  const { dishName, dishID } = useParams();
  console.log(dishID, dishName);
  console.log(
    RESTAURANT_API +
      "80423&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2"
  );
  return (
    <div>
      <h1>Our favourite restaurants curated for {dishName}</h1>
      {/* <RestaurantCard />       */}
    </div>
  );
};

export default DishesCollectionCard;
