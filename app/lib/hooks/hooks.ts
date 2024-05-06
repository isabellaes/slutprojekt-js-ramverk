import { useDispatch, useSelector, useStore } from "react-redux";
import type {
  AppDispatch,
  AppStore,
  RootState,
} from "@/app/lib/features/store";
import { useEffect, useState } from "react";
import { Book } from "@/app/lib/utils/types";
import { fetchWorkById } from "@/app/lib/utils/api";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

const useFetchWorkAndEditionById = (id: string) => {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkById(id);
      if (!ignore) {
        setBook(data);
      }
    };
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return { book };
};

export default useFetchWorkAndEditionById;
