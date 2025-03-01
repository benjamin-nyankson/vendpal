import AddButton from "../components/AddDepartmentButton";
import DepartmentCard from "../components/DepartmentCard";
import { useQuery } from "../hooks/useQuery";
import CreateDepartment from "../components/forms/CreateDepartment";
import { useEffect, useState } from "react";
import { Department } from "../store/slices/departmentSlice";
import { useStore } from "../store/useStore";


export default function Dashboard() {
  const { data } = useQuery<Department[]>("/departments");
  const [openForm, setOpenForm] = useState(false);

  const {setDepartments,departments} = useStore()

  const toggleOpenForm = () => {
    setOpenForm((prev) => !prev);
  };

  useEffect(()=>{
    setDepartments(data as Department[])
  },[data, setDepartments])
  return (
    <div>
      <div
        className={`fixed right-5  h-full w-64 transform transition-transform duration-300 ${
          openForm ? "-translate-x-0" : "translate-x-[600px]"
        }`}
      >
        <CreateDepartment onClick={toggleOpenForm} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {departments?.map((item) => (
          <DepartmentCard item={item} key={item.id} />
        ))}
        <AddButton onClick={toggleOpenForm} />
      </div>
    </div>
  );
}
