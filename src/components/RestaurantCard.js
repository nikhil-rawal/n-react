const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res"
        src="https://pinchofyum.com/wp-content/uploads/Salmon-with-Basil-Sauce-Square-1-800x800.png"
      />
      <h3>{props.name}</h3>
      <h4>{props.category}</h4>
      <h4>{props.star}</h4>
      <h4>{props.ETA}</h4>
    </div>
  );
};

export default RestaurantCard;
