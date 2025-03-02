import { NavLink } from "react-router-dom";

const Link = ({ label, path }: { label: string; path: string }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        ` text-neutral15 py-[18px] px-5 whitespace-nowrap ${
          isActive
            ? "border-b-4 border-[#000000] transition"
            : "hover:text-primaryViolet"
        } `
      }
    >
      {label}
    </NavLink>
  );
};
export default function BudgetNav() {
  const navs = [
    {
      id: 1,
      label: "Currency and Taxes",
      path: "currency",
    },
    {
      id: 2,
      label: "Budget line",
      path: "budget-line",
    },
    {
      id: 3,
      label: "Budget room centre",
      path: "brc",
    },
    {
      id: 4,
      label: "Budget control",
      path: "budget-control",
    },
  ];
  return (
    <div className="flex items-center border-b border-[#C0C8CD] overflow-x-auto scrollbar-2 ">
      {navs.map((nav) => (
        <Link label={nav.label} path={nav.path} key={nav.id} />
      ))}
    </div>
  );
}
