import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        <RestaurantCard
          name="Rawal Foods"
          category="Indian, Chinese"
          star="5 stars"
          ETA="38 minutes"
        />
      </div>
    </div>
  );
};

export default Body;
