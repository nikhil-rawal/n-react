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
  };

  return (
    <div>
      <h1>Our favourite restaurants curated for {dishName}</h1>
      <div className="flex flex-wrap">
        {dishesRestaurantState.map((rest) => (
          <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
            {rest?.info?.isOpen ? (
              <RestaurantCard resData={rest} />
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
