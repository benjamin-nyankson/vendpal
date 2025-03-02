import { Navigate } from "react-router-dom";
import CurrencyAndTaxes from "../components/budget/CurrencyAndTaxes";
import Analytics from "../pages/Analytics";
import BudegetRoom from "../pages/BudegetRoom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../components/NotFound"
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
        element: <div className="w-full">helooo</div>,
      },
      {
        path: "brc",
        element: <div className="w-full">helooo</div>,
      },
      {
        path: "budget-control",
        element: <div className="w-full">helooo</div>,
      },
    ],
  },
  {
    path:"*",
    element:<NotFound/>
  }
];
