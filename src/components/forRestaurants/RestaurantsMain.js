import RestaurantCard, {
  withClosedLabelRestaurant,
} from "./restaurantConstants/RestaurantCard";
import { Link } from "react-router-dom";
import RestaurantCard from "./restaurantConstants/RestaurantCard";

const RestaurantsMain = ({ filteredRestaurants }) => {
  const RestaurantClosed = withClosedLabelRestaurant(RestaurantCard);

  return (
    <div>
      <div>
        <h1 className="font-bold my-6 text-2xl">
          Top {filteredRestaurants.length} Restaurant chains near you!
        </h1>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((rest) => (
          <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
            {rest?.info?.availability?.opened ? (
              <RestaurantCard resData={rest} extraClass="m-3 p-3 w-[235px]" />
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
