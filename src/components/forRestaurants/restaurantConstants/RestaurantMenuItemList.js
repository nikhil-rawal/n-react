import { useDispatch } from "react-redux";
import { CDN_URL } from "../../../utils/constants";
import { addItem } from "../../../utils/cartSlice";

const RestaurantMenuItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-[10px]">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? "🟢"
                  : item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
                  ? "🔴"
                  : ""}
              </span>
              <span className="text-base font-semibold">
                {" "}
                {item?.card?.info?.name}{" "}
              </span>
              <span className="text-xs font-semibold">
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
          </div>
          <div className="w-3/12 px-4">
            <div className="absolute ">
              <button
                className={`mx-16 rounded-lg p-2 bg-[#f3f3f3] text-[#60b246] text-xs font-semibold shadow-lg hover:font-bold hover:text-[#f3f3f3] hover:bg-[#60b246]`}
                onClick={() => handleAddItem(item)}
              >
                ADD <sup className="text-sm">+</sup>
              </button>
            </div>
            <img
              src={
                item?.card?.info?.imageId === undefined
                  ? ""
                  : `${CDN_URL}${item?.card?.info?.imageId}`
              }
              className="w-full rounded-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItemList;
