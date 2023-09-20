import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res"
        src={CDN_URL + "a27weqanhnszqiuzsoik"}
      />
      <h3>Name: {props.name}</h3>
      <h4>Category: {props.category}</h4>
      <h4>Rating: {props.avgRating}</h4>
      <h4>ETA: {props.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
