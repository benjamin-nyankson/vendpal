import { memo } from "react";
import HeaderText from "./HeaderText";
import Profile from "../assets/profileImage.png";

type CardProps = {
  item: {
    bgColor: {
      main: string;
      container: string;
    };
    body: string;
    title: string;
  };
};

const DepartmentCard = memo(({ item }: CardProps) => {
  // Store styles in variables to prevent inline object recreation
  const containerStyle = { backgroundColor: item.bgColor.container };
  const mainStyle = { backgroundColor: item.bgColor.main };

  return (
    <div
      className="rounded-3xl p-4 h-64 sm:h-72 md:h-80 w-full sm:min-w-60 md:min-w-72 flex flex-col justify-between gap-4 sm:gap-6"
      style={containerStyle}
    >
      <div className="p-3 rounded-xl text-sm sm:text-base" style={mainStyle}>
        {item.body}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <HeaderText text={item.title} />
          <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm">
            <span>1 Department</span>
            <span>1 Department</span>
          </div>
        </div>
        <img src={Profile} className="size-8 sm:size-10 md:size-12" alt="Profile" />
      </div>
    </div>
  );
});

// Exporting memoized component
export default DepartmentCard;
