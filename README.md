# Book Library

Online Library to find information about books and authors. 
- A user can mark a book as read
- Add book/author to favourite list
- See detailed information about book/author
- See list of favourites/read books
- Search for books/authors
- See statistics about their reading
  - Total number of read books
  - Total number of pages
  - Total number of ratings
  - Average rating value
  - Average number of pages 

## Installation

```bash
npm run dev

```

## Tech

- NextJs
- Typescript
- Sass
- Redux
- Mui

## Api

[Open Library](https://openlibrary.org/developers/api)

Endpoints

- https://openlibrary.org/search.json?title=[searchterm] --- Used to search for books by title
- https://openlibrary.org/subjects/[subject].json --- Used to get books by subject
- https://openlibrary.org/work/[key].json --- Used to get details about book
- https://openlibrary.org/search/authors.json?q=[searchterm] --- Used to search for author by name
- https://openlibrary.org/authors/[key].json --- Used to get details about Author
