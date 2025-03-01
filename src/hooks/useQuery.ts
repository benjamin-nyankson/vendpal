import { useState, useEffect } from "react";
import apiClient from "../utils/axiosInterceptor";
import { useStore } from "../store/useStore";

// Generic function to define expected data type
export const useQuery = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { setAlert } = useStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<T>(endpoint);
        setData(response?.data);
      } catch (err) {
        setAlert([(err as { message: string }).message, "error"]);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, setAlert]);

  return { data, loading, error };
};
