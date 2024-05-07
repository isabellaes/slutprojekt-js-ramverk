import {
  Book,
  Subject,
  RootEntry,
  SearchResultBook,
  SearchResultAuthor,
  BookDoc,
  AuthorDoc,
  Author,
} from "@/app/lib/utils/types";

export async function fetchBooksBySubject(query: string): Promise<Subject> {
  const apiUrl = `https://openlibrary.org/subjects/${encodeURIComponent(
    query
  )}.json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: Subject = await response.json();
    return { ...data, works: data.works.slice(0, 8) };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchWorkById(query: string): Promise<Book> {
  const apiUrl = `https://openlibrary.org/works/${encodeURIComponent(
    query
  )}.json`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: Book = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchBookByTitle(query: string): Promise<BookDoc[]> {
  const apiUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: SearchResultBook = await response.json();

    return data.docs.slice(0, 10);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchNumberOfPages(query: string): Promise<number> {
  const apiUrl = `https://openlibrary.org/works/${encodeURIComponent(
    query
  )}/editions.json`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: RootEntry = await response.json();
    return data.entries[0].number_of_pages;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchAuthorById(query: string): Promise<Author> {
  const apiUrl = `https://openlibrary.org/authors/${encodeURIComponent(
    query
  )}.json`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: Author = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchAuthorByName(query: string): Promise<AuthorDoc[]> {
  const apiUrl = `https://openlibrary.org/search/authors.json?q=${query}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: SearchResultAuthor = await response.json();
    return data.docs;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
