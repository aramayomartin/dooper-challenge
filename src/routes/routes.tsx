import { useRoutes, Outlet } from "react-router-dom";
import Home from "../view/Home";

const Routes = () => {
  const appRoutes = [
    {
      path: "",
      element: <Outlet />,
      children: [
        {
            path: "",
            element: <Home/>
        },
      ],
    },
  ];

  return useRoutes(appRoutes);
};

export default Routes;
