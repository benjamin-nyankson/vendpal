import EditIcon from "../assets/icons/EditIcon";
import PlusIcon from "../assets/PlusIcon";
import Button from "./Button";

export default function AddButton({onClick}:{onClick:()=>void}) {
  return (
    <div
      className={`rounded-3xl p-4 h-64 min-w-72 flex flex-col items-center justify-center  gap-6 bg-[#F3F4EF]`}
    >
      <div className="bg-[#FFFFFF] p-2 flex items-center justify-center rounded-full  ">
        <div className="flex items-center justify-center bg-[#00361D] size-20 rounded-full">
          <PlusIcon />
        </div>
      </div>
      <Button
        className="bg-[#FFFFFF] flex justify-center items-center font-medium"
        icon={<EditIcon />}
        label="Create a department"
        onClick={onClick}
      />
    </div>
  );
}
