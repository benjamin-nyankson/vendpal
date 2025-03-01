import MessageIcon from "../../../assets/icons/MessageIcon";
import WorldIcon from "../../../assets/icons/WorldIcon";
import profile from "../../../assets/profileImage.png";
import SectionText from "./SectionText";

export default function Settings() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-6">
        <img src={profile} alt="profile" className="size-14" />
        <p className="text-[#232628] font-medium text-[28px]">Ventura Brody</p>
      </div>

        <SectionText
          label="venturaBrody@co.ng"
          icon={<MessageIcon />}
        className="font-normal "/>
        <SectionText
          label="Lagos, Nigeria"
          icon={<WorldIcon />}
        className="font-normal"/>
    </div>
  );
}
