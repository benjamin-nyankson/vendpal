import icon from "../../assets/icon.png"
import MenuIcon from "../../assets/icons/MenuIcon";
import { useStore } from "../../store/useStore";
import ActionButton from "../ActionButton";
import ToggleButtons from "./ToggleButtons";
export default function Navbar() {
  const {toggleSidebar} = useStore()
  return (
    <nav className="bg-white w-full p-4 flex items-center justify-between gap-5 border-b border-[#C0C9C0]">
      <MenuIcon className="block sm:block md:hidden lg:hidden cursor-pointer" onClick={toggleSidebar}/>
    <img src={icon} alt="icon" className="w-10 sm:w-10 md:w-20 lg:w-32" />
    <ToggleButtons/>

    <div className="flex items-center gap-4">
      {/* notification button */}
    <ActionButton>
      <p>p</p>
    </ActionButton>


   {/* message button */}
   <ActionButton>
    <p>p</p>
   </ActionButton>
    </div>
  </nav>
  )
}
