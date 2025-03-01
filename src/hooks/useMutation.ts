import { useState } from "react";
import apiClient from "../utils/axiosInterceptor";
import { useStore } from "../store/useStore";

// Generic function to define expected data type
export const useMutation = <T>(
  endpoint: string,
  method: "post" | "put" | "patch",
  message?:string
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setAlert } = useStore()

  const handlePost = async (postData: T) => {
    try {
      setLoading(true);
      const response = await apiClient?.[method]<T>(endpoint, postData);
      setAlert([message as string, "success"])
      return response?.data;
    } catch (err) {
      setError("Failed to perform mutation");
      setAlert([(err as {message:string}).message, "error"])
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handlePost };
};
