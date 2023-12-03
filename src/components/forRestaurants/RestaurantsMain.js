import RestaurantCard, {
  withClosedLabelRestaurant,
} from "./restaurantConstants/RestaurantCard";
import { Link } from "react-router-dom";
import RestaurantCard from "./restaurantConstants/RestaurantCard";

const RestaurantsMain = ({ filteredRestaurants }) => {
  const RestaurantClosed = withClosedLabelRestaurant(RestaurantCard);

  return (
    <div>
      <div>Top Restaurant chains near you!</div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((rest) => (
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

export default RestaurantsMain;
