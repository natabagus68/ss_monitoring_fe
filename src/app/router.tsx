import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import MenuLayout from "@features/HMI/menu/menu-layout";
import ProductionPlanView from "@features/HMI/ProductionPlan/TodayTask";
import ScheduleDetail from "@features/HMI/ProductionPlan/task/table/schedule/ScheduleDetail";
import ScheduleForm from "@features/HMI/ProductionPlan/task/schedule/ScheduleForm";
import EquipmentDetail from "@features/HMI/ProductionPlan/task/table/equipment/EquipmentDetail";
import ManpowerDetail from "@features/HMI/ProductionPlan/task/table/manpower/ManpowerDetail";
import WorkOrderSelection from "@features/HMI/ProductionPlan/WorkOrderSelection";
import AdditionalMaterial from "@features/HMI/AdditionalMaterial/table/AdditionalMaterial";
import AdditionalMaterialForm from "@features/HMI/AdditionalMaterial/form/AdditionalMaterialForm";
import ProductionProblem from "@features/HMI/ProductionProblem/table/ProductionProblem";
import ProductionProblemForm from "@features/HMI/ProductionProblem/form/ProductionProblemForm";
import MethodView from "@features/HMI/list4M1E/method/view/MethodView";
import MethodLog from "@features/HMI/list4M1E/method/log/MethodLog";
import MaterialView from "@features/HMI/list4M1E/material/MaterialView";
import EquipmentView from "@features/HMI/list4M1E/equipment/view/EquipmentView";
import ChangeEquipment from "@features/HMI/list4M1E/equipment/change/ChangeEquipment";
import ManpowerView from "@features/HMI/list4M1E/manpower/view/ManpowerView";
import ManpowerChange from "@features/HMI/list4M1E/manpower/change/ManpowerChange";
import LayoutView from "@features/HMI/list4M1E/layout/LayoutView";
import AndonLayout from "@features/andon/layout/AndonLayout";
import { Children } from "react";
import AndonPageOne from "@features/andon/page-one/AndonPageOne";
import AndonPageTwo from "@features/andon/page-two/AndonPageTwo";
import { LoginAdmin } from "@features/auth-admin/login-admin-view";
// import ProductionPlanlayout from "@features/admin/ProductionPlan/layout/ProductionPlanLayout";
// import ProductionPlanTable from "@features/admin/ProductionPlan/table/ProductionPlanTable";
// import ProductionPlanForm from "@features/admin/ProductionPlan/form/ProductionPlanForm";
// import ProductionPlanView from "@features/admin/ProductionPlan/TodayTask";
// import WorkOrderSelection from "@features/admin/ProductionPlan/WorkOrderSelection";
// import ScheduleDetail from "@features/admin/ProductionPlan/task/table/schedule/ScheduleDetail";
// import EquipmentDetail from "@features/admin/ProductionPlan/task/table/equipment/EquipmentDetail";
// import ManpowerDetail from "@features/admin/ProductionPlan/task/table/manpower/ManpowerDetail";
// import ScheduleForm from "@features/admin/ProductionPlan/task/schedule/ScheduleForm";
// import AdditionalMaterial from "@features/admin/AdditionalMaterial/table/AdditionalMaterial";
// import AdditionalMaterialForm from "@features/admin/AdditionalMaterial/form/AdditionalMaterialForm";
// import ProductionProblem from "@features/admin/ProductionProblem/table/ProductionProblem";
// import ProductionProblemForm from "@features/admin/ProductionProblem/form/ProductionProblemForm";
// import MethodView from "@features/admin/list4M1E/method/view/MethodView";
// import MethodLog from "@features/admin/list4M1E/method/log/MethodLog";
// import MaterialView from "@features/admin/list4M1E/material/MaterialView";
// import EquipmentView from "@features/admin/list4M1E/equipment/view/EquipmentView";
// import ChangeEquipment from "@features/admin/list4M1E/equipment/change/ChangeEquipment";
// import ManpowerView from "@features/admin/list4M1E/manpower/view/ManpowerView";
// import ManpowerChange from "@features/admin/list4M1E/manpower/change/ManpowerChange";
// import LayoutView from "@features/admin/list4M1E/layout/LayoutView";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <Navigate to="../menu" />,
  },
  {
    path: "login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "login",
    element: <LoginView />,
  },
  {
    path: "andon",
    element: <AndonLayout />,
    children: [
      {
        path: "page-one",
        element: <AndonPageOne />,
      },
      {
        path: "page-two",
        element: <AndonPageTwo />,
      },
    ],
  },
  {
    path: "menu",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MenuLayout />,
      },
      {
        path: "today-task",
        element: <Root />,
        children: [
          {
            path: "",
            element: <ProductionPlanView />,
          },
          {
            path: "schedule",
            element: <Root />,
            children: [
              {
                path: "",
                element: <ScheduleDetail />,
              },
              {
                path: "input-schedule",
                element: <ScheduleForm />,
              },
            ],
          },
          {
            path: "equipment",
            element: <EquipmentDetail />,
            children: [
              {
                path: "",
                element: <EquipmentDetail />,
              },
              {
                path: "input-equipment",
                element: <Root />,
              },
            ],
          },
          {
            path: "manpower",
            element: <Root />,
            children: [
              {
                path: "",
                element: <ManpowerDetail />,
              },
              {
                path: "input-equipment",
                element: <Root />,
              },
            ],
          },
        ],
      },
      {
        path: "work-order-selection",
        element: <WorkOrderSelection />,
      },
      {
        path: "additional-material",
        element: <Root />,
        children: [
          {
            path: "",
            element: <AdditionalMaterial />,
          },
          {
            path: "input",
            element: <AdditionalMaterialForm />,
          },
        ],
      },
      {
        path: "production-problem",
        element: <Root />,
        children: [
          {
            path: "",
            element: <ProductionProblem />,
          },
          {
            path: "input",
            element: <ProductionProblemForm />,
          },
        ],
      },
      {
        path: "method",
        element: <Root />,
        children: [
          {
            path: "",
            element: <MethodView />,
          },
          {
            path: "log",
            element: <MethodLog />,
          },
        ],
      },
      {
        path: "material",
        element: <Root />,
        children: [
          {
            path: "",
            element: <MaterialView />,
          },
        ],
      },
      {
        path: "equipment",
        element: <Root />,
        children: [
          {
            path: "",
            element: <EquipmentView />,
          },
          {
            path: "change",
            element: <ChangeEquipment />,
          },
        ],
      },
      {
        path: "manpower",
        element: <Root />,
        children: [
          {
            path: "",
            element: <ManpowerView />,
          },
          {
            path: "change",
            element: <ManpowerChange />,
          },
        ],
      },
      {
        path: "layout",
        element: <Root />,
        children: [
          {
            path: "",
            element: <LayoutView />,
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
