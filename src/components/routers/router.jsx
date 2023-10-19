import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AllProducts from "../pages/AllProducts";
import CreateProduct from "../pages/CreateProduct";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/create-product",
        element: <CreateProduct></CreateProduct>,
      },
      {
        path: "/products/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/products/details/${params.id}`),
      },
      {
        path: "/products/:id",
        element: <AllProducts></AllProducts>,
        loader: async ({ params }) =>
          params.id !== "all" &&
          (await fetch(`http://localhost:5000/products/${params.id}`)),
      },
    ],
  },
]);
export default router;
