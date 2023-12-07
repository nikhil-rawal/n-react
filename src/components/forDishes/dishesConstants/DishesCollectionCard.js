import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantCard from "../../forRestaurants/restaurantConstants/RestaurantCard";
import { RESTAURANT_API } from "../../../utils/constants";
import RestaurantCard, {
  withClosedLabelRestaurant,
} from "../../forRestaurants/restaurantConstants/RestaurantCard";
import { Link } from "react-router-dom";

const DishesCollectionCard = () => {
  const [dishesRestaurantState, setDishesRestaurantState] = useState([]);
  const [dishesDescription, setDishesDescription] = useState("");
  const { dishName, dishID } = useParams();
  const RestaurantClosed = withClosedLabelRestaurant(RestaurantCard);

  useEffect(() => {
    fetchAllDishesRestaurantsData();
  }, []);

  const fetchAllDishesRestaurantsData = async () => {
    const data = await fetch(
      `${RESTAURANT_API}&collection=${dishID}&tags=layout_CCS&sortBy=&filters=&type=rcv2`
    );
    const json = await data.json();
    const jsonAPIDishesCollectionData = json?.data?.cards;

    const dishesCollectionArray = jsonAPIDishesCollectionData.filter(
      (currentDishRestaurant) =>
        currentDishRestaurant?.card?.card?.cta?.text === "RESTAURANT_MENU"
    );
    const simpleDishesCollectionArray = dishesCollectionArray.map(
      (item) => item?.card?.card
    );
    setDishesRestaurantState(simpleDishesCollectionArray);

    const dishesDescription =
      jsonAPIDishesCollectionData[0]?.card?.card?.description;
    setDishesDescription(dishesDescription);
  };

  return (
    <div className="body mx-20 mt-16 w-auto">
      <div className="mb-4 pb-4">
        <h1 className="font-bold my-6 text-2xl">
          Our{" "}
          {dishesRestaurantState.length === 0
            ? ""
            : dishesRestaurantState.length}{" "}
          favourite restaurants curated for {dishName}
        </h1>
        <h4 className="opacity-90 text-gray-900">{dishesDescription}</h4>
      </div>
      <div className="flex flex-wrap">
        {dishesRestaurantState.map((rest) => (
          <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
            {rest?.info?.isOpen ? (
              <RestaurantCard
                extraClass={"m-3.5 p-3.5 w-[265px]"}
                resData={rest}
              />
            ) : (
              <RestaurantClosed resData={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DishesCollectionCard;
