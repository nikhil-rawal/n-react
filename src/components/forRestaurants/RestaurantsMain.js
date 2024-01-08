import RestaurantCard, {
  withClosedLabelRestaurant,
} from "./restaurantConstants/RestaurantCard";
import { Link } from "react-router-dom";
import RestaurantCard from "./restaurantConstants/RestaurantCard";
import AllFilters from "../AllFilters";

const RestaurantsMain = ({
  filteredRestaurants,
  listOfRestaurants,
  setFilteredRestaurants,
}) => {
  const RestaurantClosed = withClosedLabelRestaurant(RestaurantCard);

  return (
    <div>
      <div>
        <div>
          <h1 className="font-bold mx-0 my-6 text-xl md:text-2xl text-center md:text-left">
            Top {filteredRestaurants.length} Restaurant chains near you!
          </h1>
        </div>
        <div>
          <AllFilters
            listOfRestaurants={listOfRestaurants}
            filteredRestaurants={filteredRestaurants}
            setFilteredRestaurants={setFilteredRestaurants}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-normal">
        {filteredRestaurants.map((rest) => (
          <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
            {rest?.info?.availability?.opened ? (
              <RestaurantCard
                resData={rest}
                extraClass="mx-1 my-2 md:mx-3 md:my-3 2xl:mx-4 2xl:my-4 px-1 py-2 md:px-3 md:py-3 2xl:px-4 2xl:py-4 w-[255px] md:w-[235px] 2xl:w-[285px]"
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

export default RestaurantsMain;
