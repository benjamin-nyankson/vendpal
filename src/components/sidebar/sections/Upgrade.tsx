import DepartmentIcon from "../../../assets/icons/DepartmentIcon";
import UnitIcon from "../../../assets/icons/UnitIcon";
import Pilltab from "../../Pilltab";
import SectionText from "./SectionText";
import HeaderText from "../../HeaderText";

export default function Upgrade() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <HeaderText text="TEAM"/>
        <Pilltab text="Basic user" />
      </div>

      <SectionText label="Department" icon={<DepartmentIcon />} count={0} className="text-lg font-medium" />
      <SectionText label="Units" icon={<UnitIcon />} count={0} className="text-lg font-medium" />
    </div>
  );
}
