import { Outlet } from "react-router-dom";
import BudgetNav from "../components/budget/BudgetNav";

export default function BudegetRoom() {
  return (
    <div className="w-full">
        <BudgetNav/>
        <Outlet/>
    </div>
  )
}
