import { FormEvent, useMemo, useState, useCallback } from "react";
import CloseIcon from "../../assets/CloseIcon";
import InputField from "../formInputs/InputField";
import HeaderText from "../HeaderText";
import Button from "../Button";
import { useMutation } from "../../hooks/useMutation";
import { Department } from "../../store/slices/departmentSlice";
import { useStore } from "../../store/useStore";

export default function CreateDepartment({ onClick }: { onClick: () => void }) {
  const [formData, setFormData] = useState({
    body: "",
    title: "",
    containerColor: "",
    mainColor: "",
  });

  const { addDepartment } = useStore();
  const { handlePost, loading } = useMutation<Department>(
    "/departments",
    "post",
    "Department added successfully"
  );

  // Memoize the function to prevent unnecessary re-creation
  const handleChange = useCallback(
    (name: string, value: string | number) => {
      setFormData((prev) =>
        prev[name as keyof typeof prev] === value
          ? prev
          : { ...prev, [name]: value }
      );
    },
    []
  );

  const isButtonDisabled = useMemo(() => {
    return (
      !formData.body ||
      !formData.containerColor ||
      !formData.mainColor ||
      !formData.title
    );
  }, [formData]);

  const clearForm = useCallback(() => {
    setFormData({
      body: "",
      containerColor: "",
      mainColor: "",
      title: "",
    });
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = {
        bgColor: {
          container: formData.containerColor,
          main: formData.mainColor,
        },
        body: formData.body,
        title: formData.title,
      };

      const response = await handlePost(data as Department);
      if (response?.id) {
        addDepartment(response);
        clearForm();
        onClick(); // Close the form immediately after submission
      }
    },
    [formData, handlePost, addDepartment, clearForm, onClick]
  );

  return (
    <div className="w-full h-fit bg-white shadow-lg rounded-2xl p-5 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <HeaderText text="Create Department" />
        <CloseIcon onClick={onClick} />
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <InputField
          type="text"
          label="Department name"
          id="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter department name"
        />
        <InputField
          type="textarea"
          label="Description"
          id="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Enter description"
        />

        <div className="flex justify-between items-center gap-3">
          <div className="flex flex-col gap-1">
            <InputField
              type="color"
              label="Container color"
              id="containerColor"
              value={formData.containerColor}
              onChange={handleChange}
            />
            <div
              className="w-10 h-3 ml-1.5"
              style={{ background: formData.containerColor }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <InputField
              type="color"
              label="Main color"
              id="mainColor"
              value={formData.mainColor}
              onChange={handleChange}
            />
            <div
              className="w-10 h-3 ml-1.5"
              style={{ background: formData.mainColor }}
            />
          </div>
        </div>

        <Button
          type="submit"
          label={loading ? "Submitting..." : "Submit"}
          className="bg-[#00361D] text-white text-xl flex items-center justify-center"
          disabled={isButtonDisabled}
        />
      </form>
    </div>
  );
}
