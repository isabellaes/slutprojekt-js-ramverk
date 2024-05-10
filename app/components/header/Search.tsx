"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("title");
  const [serchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  function handleSearch() {
    if (serchTerm) {
      if (searchValue === "title") {
        router.push(`/search/book/${serchTerm}`);
      }
      if (searchValue === "author") {
        router.push(`/search/author/${serchTerm}`);
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
