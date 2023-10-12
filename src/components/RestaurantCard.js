import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="m-4 p-4 w-60 rounded-md backdrop-blur-sm bg-gray-[25]">
      <img
        className="rounded-md"
        alt="res"
        src={`${CDN_URL}${props.cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{props.name}</h3>
      <h4>{props.category}</h4>
      <h4>{props.avgRating}⭐</h4>
      {/* <h4>{props.deliveryTime}</h4> */}
      <h4>{props.areaName}</h4>
      {/* {rest.info.costForTwo} */}
    </div>
  );
};

export default RestaurantCard;

//locality
//areaName
//costForTwo
