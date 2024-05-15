"use client";

import { Pagination } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./pagination.module.scss";

type PaginationBoxProps = {
  total: number;
  page: number;
  searchTerm: string;
  pathName: string;
};
const PaginationBox = ({
  total,
  page,
  searchTerm,
  pathName,
}: PaginationBoxProps) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    const params = new URLSearchParams(searchParams);
    params.set("query", searchTerm);

    if (pathName === "title") {
      params.set("page", (value * 10).toString());
      replace(`/search/book?${params.toString()}`);
    }

    if (pathName === "author") {
      params.set("page", (value * 10).toString());
      replace(`/search/author?${params.toString()}`);
    }
  }
  return (
    <div className={style.pagination}>
      <Pagination
        count={Math.ceil(total / 10)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationBox;
