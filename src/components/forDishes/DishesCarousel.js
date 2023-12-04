import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import ConsiderDishesCard from "./dishesConstants/ConsiderDishesCard";
import responsive from "./dishesConstants/ResponsiveCarousel";
import regularExpressionCheck from "./dishesConstants/CheckRegex";

const DishesCarousel = ({ considerDishesState }) => {
  return (
    <div>
      <div>
        <h1 className="font-bold my-6 text-2xl">What's on your mind?</h1>
      </div>
      <Carousel responsive={responsive} infinite={true} slidesToSlide={2}>
        {considerDishesState?.map((item) => (
          <Link
            key={item?.id}
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
    </div>
  );
};

export default DishesCarousel;
