import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuItemList from "./forRestaurants/restaurantConstants/RestaurantMenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-11/12 md:w-8/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && <h1>Cart is Empty !!</h1>}
        <RestaurantMenuItemList
          items={cartItems}
          key={cartItems?.card?.info?.id}
          // showAddButton={false}
        />
      </div>
    </div>
  );
};

export default Cart;
