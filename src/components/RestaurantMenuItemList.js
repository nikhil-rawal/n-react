import { CDN_URL } from "../utils/constants";

const RestaurantMenuItemList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left"
        >
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>
              {" "}
              - ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <img src={`${CDN_URL}${item.card.info.imageId}`} className="w-16" />
          </div>
          <div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItemList;
