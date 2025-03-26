import RestaurantCard, {
  withClosedLabelRestaurant,
} from "./restaurantConstants/RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantCard from "./restaurantConstants/RestaurantCard";
import AllFilters from "../AllFilters";

const RestaurantsMain = ({
  filteredRestaurants,
  listOfRestaurants,
  setFilteredRestaurants,
}) => {
  const RestaurantClosed = withClosedLabelRestaurant(RestaurantCard);

  const [myFilteredRest, setMyFilteredRest] = useState(null);
  useEffect(() => {
    setMyFilteredRest(filteredRestaurants);
  }, [filteredRestaurants]);

  return (
    <div>
      <h1 className="font-bold mx-0 my-6 text-xl md:text-2xl text-center md:text-left">
        Top {myFilteredRest?.length} Restaurant chains near you!
      </h1>
      <AllFilters
        listOfRestaurants={listOfRestaurants}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="flex flex-wrap justify-center md:justify-normal">
        {myFilteredRest?.map((rest, index) => (
          <Link
            key={rest?.info?.id || index}
            to={"/restaurants/" + rest?.info?.id}
          >
            {rest?.info?.availability?.opened ? (
              <RestaurantCard
                resData={rest}
                extraClass="mx-1 my-2 md:mx-3 md:my-3 2xl:mx-4 2xl:my-4 px-1 py-2 md:px-3 md:py-3 2xl:px-4 2xl:py-4 w-[255px] md:w-[235px] 2xl:w-[285px]"
              />
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsMain;
