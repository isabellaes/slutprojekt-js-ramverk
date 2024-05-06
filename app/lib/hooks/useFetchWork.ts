import { useEffect, useState } from "react";
import { Book } from "@/app/lib/utils/types";
import { fetchWorkById } from "@/app/lib/utils/api";

const useFetchWork = (id: string) => {
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

export default useFetchWork;
