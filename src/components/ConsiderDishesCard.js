import { DISHES_CDN_URL } from "../utils/constants";

const ConsiderDishesCard = ({ imageID, alt }) => {
  return (
    <div className="m-4 p-4 w-44 backdrop-blur-sm">
      <img
        className="object-cover cursor-pointer"
        alt={alt}
        src={`${DISHES_CDN_URL}${imageID}`}
      />
    </div>
  );
};

export default ConsiderDishesCard;
