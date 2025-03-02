import { memo } from "react";
import EditIcon from "../assets/icons/EditIcon";
import PlusIcon from "../assets/PlusIcon";
import Button from "./Button";

type AddButtonProps = {
  onClick: () => void;
};

const AddButton = memo(({ onClick }: AddButtonProps) => {
  return (
    <div className="rounded-3xl p-4 h-64 sm:h-72 md:h-80 w-full sm:min-w-60 md:min-w-72 flex flex-col items-center justify-center gap-4 sm:gap-6 bg-[#F3F4EF]">
      {/* Plus Icon Button */}
      <div
        className="bg-white cursor-pointer w-fit p-2 flex items-center justify-center rounded-full"
        onClick={onClick}
      >
        <div className="flex items-center justify-center bg-primary size-20 rounded-full">
          <PlusIcon />
        </div>
      </div>

      {/* Edit Button */}
      <Button
        className="bg-white flex justify-center items-center font-medium"
        icon={<EditIcon />}
        label="Create a department"
        onClick={onClick}
      />
    </div>
  );
});

export default AddButton;
