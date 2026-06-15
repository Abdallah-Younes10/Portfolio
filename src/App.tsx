import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";

const routes = createBrowserRouter([
	{
    path: "/",
    element: <Layout />,
    children :[
			{
      index: true,
      element: <Home/>,
    },
    ]
  }
]);

const App = () => {


  return <RouterProvider router={routes} />;
};

export default App;
