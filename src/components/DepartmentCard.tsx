import HeaderText from "./HeaderText";
import Profile from "../assets/profileImage.png";

type CardProps = {
  item:{
    bgColor: {
        main: string;
        container: string;
      };
      body: string;
      title: string;
  }
};

export default function DepartmentCard(props: CardProps) {
    const {item} = props
    
  return (
    <div
      className={`rounded-3xl p-4 h-64 min-w-72 flex flex-col justify-between gap-6`}
      style={{ backgroundColor: item.bgColor.container }}
    >
      <div
        className="p-3 rounded-xl"
        style={{ backgroundColor: item.bgColor.main }}
      >
        {item.body}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <HeaderText text={item.title} />
          <div className="flex gap-2">
            <span className="text-xs">1 Department</span>
            <span className="text-xs">1 Department</span>
          </div>
        </div>
        <img src={Profile} className="size-10" />
      </div>
    </div>
  );
}
