import { useEffect, useState } from "react";
import { Book } from "@/app/lib/utils/types";
import { fetchWorkById, fetchAverageNumberOfPages } from "@/app/lib/utils/api";

const useFetchWork = (id: string) => {
  const [book, setBook] = useState<Book>();
  const [pages, setpages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkById(id);
      const pages = await fetchAverageNumberOfPages(id);
      if (!ignore) {
        setpages(pages);
        setBook(data);
      }
    };
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return { book, pages };
};

export default useFetchWork;
