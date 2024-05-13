"use client";

import { Pagination } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

type PaginationBoxProps = {
  total: number;
  page: number;
  seacrhTerm: string;
  pathName: string;
};
const PaginationBox = ({
  total,
  page,
  seacrhTerm,
  pathName,
}: PaginationBoxProps) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    const params = new URLSearchParams(searchParams);
    params.set("query", seacrhTerm);

    if (pathName === "title") {
      params.set("page", value.toString());
      replace(`/search/book?${params.toString()}`);
    }

    if (pathName === "author") {
      params.set("page", (value * 100).toString());
      replace(`/search/author?${params.toString()}`);
    }
  }
  return (
    <Pagination
      count={Math.ceil(total / 100)}
      page={page}
      onChange={handlePageChange}
    />
  );
};

export default PaginationBox;
