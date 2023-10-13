import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    category,
    avgRating,
    costForTwo,
    // deliveryTime,
    areaName,
    // locality,
  } = props?.resData?.info;

  return (
    <div className="m-4 p-4 w-60 rounded-md backdrop-blur-sm bg-gray-[25]">
      <label className="absolute z-10">🟢</label>
      <img
        className="rounded-md"
        alt="res"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{category}</h4>
      <h4>{avgRating}⭐</h4>
      {/* <h4>{costForTwo}</h4> */}
      {/* <h4>{deliveryTime} minutes away</h4> */}
      <h5>{areaName}</h5>
      {/* <h4>🟢</h4> */}
    </div>
  );
};

export const withClosedLabelRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute pl-8 mt-8 z-10 filter-none">🔴</label>
        <div className="grayscale">
          <RestaurantCard {...props} />
        </div>
      </>
    );
  };
};

// export const withClosedLabelRestaurant;

export default RestaurantCard;
