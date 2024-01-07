// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Katalog from "./components/Katalog";
import Karzinca from "./components/Karzinca";
import Tel from "./components/Tel";
import Cards from "./components/Cards";
import ReadMore from "./components/ReadMore";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/katalog",
          element: <Katalog />,
        },
        {
          path: "/karzinka",
          element: <Karzinca />,
        },
        {
          path: "/tel",
          element: <Tel />,
        },
        {
          path: "/card",
          element: <Cards />,
        },
        {
          path: "/readmore",
          element: <ReadMore />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
