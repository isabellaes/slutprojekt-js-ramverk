"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("title");
  const [serchTerm, setSearchTerm] = useState<string>("");
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleSearch() {
    if (serchTerm) {
      const params = new URLSearchParams(searchParams);
      params.set("query", serchTerm);

      if (searchValue === "title") {
        params.set("page", "1");
        params.set("subject", "title");
        replace(`/search/book?${params.toString()}`);
      }
      if (searchValue === "author") {
        params.set("page", "0");
        params.set("subject", "author");
        replace(`/search/author?${params.toString()}`);
      }
    }
  }
  return (
    <div>
      <select
        name="search"
        id="search-select"
        onChange={(e) => {
          e.preventDefault();
          setSearchValue(e.target.value);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>

      <input
        type="search"
        name="search"
        id="search"
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
};

export default Search;
