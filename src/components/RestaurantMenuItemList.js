import { CDN_URL } from "../utils/constants";

const RestaurantMenuItemList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 px-4">
            <div className="absolute ">
              <button className="mx-16 rounded-lg p-2 bg-neutral-900 text-white text-xs shadow-lg">
                Add +
              </button>
            </div>
            <img
              src={`${CDN_URL}${item.card.info.imageId}`}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItemList;
