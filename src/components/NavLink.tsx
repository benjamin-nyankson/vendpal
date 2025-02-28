import { NavLink } from "react-router-dom";

export default function Link({
  route,
  label,
  icon,
}: {
  route: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `flex items-center gap-3 p-4 rounded-2xl text-[#252624] ${
          isActive
            ? "bg-[#FFFFFF] text-primaryViolet     transition"
            : "hover:text-primaryViolet"
        } `
      }
    >
      <span> {icon}</span>
      <span className="whitespace-nowrap hidden sm:hidden md:hidden lg:block"> {label}</span>
    </NavLink>
  );
}
