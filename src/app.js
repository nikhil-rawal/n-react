import React, { lazy, useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/forRestaurants/restaurantConstants/RestaurantMenu";
import DishesCollectionCard from "./components/forDishes/dishesConstants/DishesCollectionCard";
import Footer from "./components/Footer";

// const Grocery = lazy(()=>import("./components/Grocery"))
// const About = lazy(() => import("./components/About"));
//lazy loading / on-demand loading

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app font-sans tracking-wide	overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/dishesCollection/:dishName/:dishID",
        element: <DishesCollectionCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
