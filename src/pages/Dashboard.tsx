import { lazy, Suspense, useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { Department } from "../store/slices/departmentSlice";
import { useStore } from "../store/useStore";
import Loader from "../components/Loaders/Loader";

// Lazy-loaded components
const AddButton = lazy(() => import("../components/AddDepartmentButton"));
const DepartmentCard = lazy(() => import("../components/DepartmentCard"));
const CreateDepartment = lazy(
  () => import("../components/forms/CreateDepartment")
);

export default function Dashboard() {
  const { data, loading } = useQuery<Department[]>("/departments");
  const [openForm, setOpenForm] = useState(false);
  const { setDepartments, departments } = useStore();

  const toggleOpenForm = () => {
    setOpenForm((prev) => !prev);
  };

  useEffect(() => {
    setDepartments(data as Department[]);
  }, [data, setDepartments]);

  return (
    <div>
      {/* Sidebar Form */}
      <div
        className={`fixed right-5 h-full w-64 transform transition-transform duration-300 ${
          openForm ? "-translate-x-0" : "translate-x-[600px]"
        }`}
      >
        <Suspense fallback={<div>Loading Form...</div>}>
          <CreateDepartment onClick={toggleOpenForm} />
        </Suspense>
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Department List & Add Button */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        <Suspense fallback={<div>Loading Departments...</div>}>
          {departments?.map((item) => (
            <DepartmentCard item={item} key={item.id} />
          ))}
        </Suspense>

        <Suspense fallback={<div>Loading Button...</div>}>
          <AddButton onClick={toggleOpenForm} />
        </Suspense>
      </div>
    </div>
  );
}
