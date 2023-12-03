import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import ConsiderDishesCard from "./dishesConstants/ConsiderDishesCard";
import responsive from "./dishesConstants/ResponsiveCarousel";
import regularExpressionCheck from "./dishesConstants/CheckRegex";

const DishesCarousel = ({ considerDishesState }) => {
  return (
    <div>
      <div>What's on your mind?</div>
      {/* <div className="flex flex-wrap"> */}
      <Carousel responsive={responsive} infinite={true} slidesToSlide={2}>
        {considerDishesState.map((item) => (
          <Link
            key={item?.id}
            // to={DISHES_INDIVIDUAL_URL + item?.action?.text.replace(/\s/g, "")}
            to={
              "/dishesCollection/" +
              item?.action?.text +
              "/" +
              regularExpressionCheck(item?.entityId)
            }
          >
            <ConsiderDishesCard
              imageID={item?.imageId}
              alt={item?.accessibility?.altText}
              dishText={item?.action?.link}
            />
          </Link>
        ))}
      </Carousel>
      {/* </div> */}
    </div>
  );
};

export default DishesCarousel;
