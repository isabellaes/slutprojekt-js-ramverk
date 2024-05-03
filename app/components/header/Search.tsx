"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [serchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  function handleSearch() {
    if (serchTerm) {
      router.push(`/search/${serchTerm}`);
    }
  }
  return (
    <div>
      <label htmlFor="search">Search</label>
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
