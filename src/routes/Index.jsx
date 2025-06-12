import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import MainLayout from "../layout/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ItemListContainer greeting="Todos los productos" />,
      },
      {
        path: "/categoria/:categoryId",
        element: <ItemListContainer />,
      },
      {
        path: "/item/:itemId",
        element: <ItemDetailContainer />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <>Página no encontrada</>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);