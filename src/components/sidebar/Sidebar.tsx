import SidebarFooter from "./SidebarFooter";
import SidebarCard from "./SidebarCard";
import Settings from "./sections/Settings";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import Upgrade from "./sections/Upgrade";
import ArrowUp from "../../assets/icons/ArrowUp";
import WorldLinkIcon from "../../assets/icons/WorldLinkIcon";
import HeaderText from "../HeaderText";

export default function Sidebar() {
  const sidebarcardSections = [
    {
      content: <Settings />,
      button: {
        label: "Setup your account",
        icon: <SettingsIcon />,
        className: "justify-center",
      },
    },
    {
      content: <Upgrade />,
      button: {
        label: "Upgrade your plan",
        icon: <ArrowUp />,
        className: "justify-center",
      },
    },
    {
      content: (
        <div>
          <HeaderText text="LINKS" />
        </div>
      ),
      button: {
        label: "LinkedIn",
        icon: <WorldLinkIcon />,
        className: "",
        onClick:()=>alert("hello")
      },
    },
  ];
  return (
    <aside className="min-w-64 border-r border-[#C0C9C0]  h-screen flex flex-col ">
      <div className="p-5">
        <div className="flex flex-col gap-6">
          {sidebarcardSections.map((section) => (
            <SidebarCard item={section} key={section.button.label} />
          ))}
        </div>
      </div>
      <SidebarFooter />
    </aside>
  );
}
