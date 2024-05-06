export type Subject = {
  key: string;
  name: string;
  works: Work[];
};

type Work = {
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  cover_edition_key: string;
};

export type Book = {
  authors: Author1[];
  covers: number[];
  description: string | { type: string; value: string };
  first_publish_date: string;
  first_sentence: {
    type: string;
    value: string;
  };
  key: string;
  subjects: string[];
  title: string;
};

export type Author1 = {
  author: { key: string };
  type: { key: string };
};

export interface RootEntry {
  entries: Entry[];
}

export interface Entry {
  number_of_pages: number;
}

export type SearchResultBook = {
  docs: BookDoc[];
};

export type BookDoc = {
  author_name: string[];
  cover_i: number;
  edition_count: number;
  first_publish_year: number;
  key: string;
  title: string;
};

export type Review = {
  key: string;
  rating: string;
  text: string;
};

export type Author = {
  name: string;
  title: string;
  bio: string;
  alternate_names: string[];
  photos: number[];
  personal_name: string;
  birth_date: string;
  source_records: string[];
  key: string;
  fuller_name: string;
};

export type SearchResultAuthor = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: AuthorDoc[];
};

export type AuthorDoc = {
  alternate_names?: string[];
  birth_date?: string;
  key: string;
  name: string;
  top_subjects: string[];
  top_work: string;
  type: string;
  work_count: number;
  _version_: number;
};
