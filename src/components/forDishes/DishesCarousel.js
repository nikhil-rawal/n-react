import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import ConsiderDishesCard from "./dishesConstants/ConsiderDishesCard";
import responsive from "./dishesConstants/ResponsiveCarousel";
import regularExpressionCheck from "./dishesConstants/CheckRegex";

const DishesCarousel = ({ considerDishesState }) => {
  const responsive = {
    thatsIt: {
      breakpoint: { max: 3000, min: 2101 },
      items: 10,
      slidesToSlide: 3, // optional, default to 1.
    },
    extraExtraLarge: {
      breakpoint: { max: 2100, min: 1536 },
      items: 8,
      slidesToSlide: 3, // optional, default to 1.
    },
    extraLarge: {
      breakpoint: { max: 1536, min: 1280 },
      items: 7,
      slidesToSlide: 2, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 6,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 768, min: 640 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div>
        <h1 className="font-bold my-0 md:my-6 text-lg md:text-2xl text-center md:text-left">
          What's on your mind?
        </h1>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        slidesToSlide={2}
        customTransition="all 0.5 ease"
      >
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
