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
  number_of_pages?: number;
  revies?: Review;
  img_url?: string;
};

export interface RootEntry {
  entries: Entry[];
}

export interface Entry {
  number_of_pages: number;
}

export type SearchResult = {
  docs: Doc[];
  numFound: number;
};
export type Doc = {
  key: string;
  title?: string;
  name?: string;
  cover_i?: string;
};

export type Review = {
  key: string;
  rating: string;
  text: string;
};

export type Author = {
  name: string;
  title: string;
  bio: string | { key: string; value: string };
  alternate_names: string[];
  photos: number[];
  personal_name: string;
  birth_date: string;
  source_records: string[];
  key: string;
  fuller_name: string;
  img_url?: string;
};
