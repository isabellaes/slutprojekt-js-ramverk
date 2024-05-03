"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {}
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="search" name="search" id="search" />
    </div>
  );
};

export default Search;
