import { useDispatch, useSelector, useStore } from "react-redux";
import type {
  AppDispatch,
  AppStore,
  RootState,
} from "@/app/lib/features/store";
import { useEffect, useState } from "react";
import { Entry, Root } from "@/app/lib/utils/types";
import { fetchWorkById, fetchWorkByIdAndEditions } from "@/app/lib/utils/api";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

const useFetchWorkAndEditionById = (id: string) => {
  const [work, setWork] = useState<Root>();
  const [data, setData] = useState<Entry>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkById(id);
      if (!ignore) {
        setWork(data);
      }
    };
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkByIdAndEditions(id);
      if (!ignore) {
        setData(data);
      }
    };
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return { work, data };
};

export default useFetchWorkAndEditionById;
