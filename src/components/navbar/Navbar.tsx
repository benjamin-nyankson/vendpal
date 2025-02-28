import icon from "../../assets/icon.png"
import ToggleButtons from "./ToggleButtons";
export default function Navbar() {
  return (
    <nav className="bg-white w-full p-4 flex items-center justify-between gap-5 border-b border-[#C0C9C0]">
    <img src={icon} alt="icon" />
    <ToggleButtons/>

    <div className="flex items-center gap-4">
      {/* notification button */}
   <div className="size-16 bg-[#F3F4EF] rounded-full">

</div>

   {/* message button */}
   <div className="size-16 bg-[#F3F4EF] rounded-full">

</div>
    </div>
  </nav>
  )
}
