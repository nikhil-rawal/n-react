import { DISHES_CDN_URL } from "../../../utils/constants";

const ConsiderDishesCard = ({ imageID, alt }) => {
  return (
    <div className="m-8 sm:m-4 p-8 sm:p-4 w-[160px] md:w-[172px] backdrop-blur-sm truncate">
      <img
        className="object-cover cursor-pointer hover:scale-110 ease-in-out duration-300"
        alt={alt}
        src={`${DISHES_CDN_URL}${imageID}`}
      />
    </div>
  );
};

export default ConsiderDishesCard;
