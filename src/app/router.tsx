import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import LoginView from "@features/auth/login-view";
import GeneralView from "@features/admin/dashboard/general/general-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import RealTimeView from "@features/admin/dashboard/real-time/real-time-view";
import DetailsView from "@features/admin/dashboard/details/details-view";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <Navigate to={`login`} />,
  },
  {
    path: "login",
    element: <LoginView />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Root />,
        children: [
          {
            path: "general",
            element: <GeneralView />,
          },
          {
            path: "details",
            element: <DetailsView />,
          },
          {
            path: "real-time",
            element: <RealTimeView />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
