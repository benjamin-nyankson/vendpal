import AnalyticsIcon from "../../assets/icons/AnalyticsIcon";
import BudgetIcon from "../../assets/icons/BudgetIcon";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import WorkflowIcon from "../../assets/icons/WorkflowIcon";
import Link from "../NavLink";

export default function ToggleButtons() {
  const toggleItems = [
    {
      label: "Dashboard",
      route: "",
      icon: <DashboardIcon />,
    },
    {
      label: "Approval workflow",
      route: "/workflow",
      icon: <WorkflowIcon />,
    },
    {
      label: "Budget room",
      route: "/budget",
      icon: <BudgetIcon />,
    },
    {
      label: "Analytics",
      route: "/analytics",
      icon: <AnalyticsIcon />,
    },
  ];
  return (
    <nav className="bg-surface-container rounded-3xl p-2 flex gap-">
      {toggleItems.map((item) => (
        <Link
          route={item.route}
          label={item.label}
          icon={item.icon}
          key={item.label}
        />
      ))}
    </nav>
  );
}
