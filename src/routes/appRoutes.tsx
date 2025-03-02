import { Navigate } from "react-router-dom";
import CurrencyAndTaxes from "../components/budget/CurrencyAndTaxes";
import Analytics from "../pages/Analytics";
import BudegetRoom from "../pages/BudegetRoom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../components/NotFound"
import EmptyPage from "../components/EmptyPage";
export const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path:"/analytics",
    element:<Analytics/>

  },
  {
    path:"/workflow",
    element:<EmptyPage/>

  },
  {
    path: "/budget",
    element: <BudegetRoom />,
    children: [
      {
        path: "", 
        element: <Navigate to="/budget/currency" replace />,
      },
      {
        path: "currency",
        element: <CurrencyAndTaxes/>,
      },
      {
        path: "budget-line",
        element: <EmptyPage/>,
      },
      {
        path: "brc",
        element: <EmptyPage/>,
      },
      {
        path: "budget-control",
        element: <EmptyPage/>,
      },
    ],
  },
  {
    path:"*",
    element:<NotFound/>
  }
];
