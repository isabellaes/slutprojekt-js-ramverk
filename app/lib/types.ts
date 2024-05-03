export type Subject = {
  key: string;
  name: string;
  works: Work[];
};

export type Work = {
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  cover_edition_key: string;
};

export type Root = {
  authors: Author[];
  covers: number[];
  description: string | { type: string; value: string };
  first_publish_date: string;
  first_sentence: {
    type: string;
    value: string;
  };
  key: string;
  lc_classifications: string[];
  subject_people: string[];
  subject_places: string[];
  subject_times: string[];
  subjects: string[];
  title: string;
  latest_revision: number;
  revision: number;
};

export type Author = {
  author: { key: string };
  type: { key: string };
};

export interface RootEntry {
  entries: Entry[];
}

export interface Entry {
  works: string[];
  key: string;
  authors: Author[];
  isbn_13: string[];
  languages: Language[];
  pagination: string;
  publish_date: string;
  publishers: string[];
  source_records: string[];
  subjects: string[];
  title: string;
  weight: string;
  full_title: string;
  covers: number[];
  number_of_pages: number;
}

export interface BookEdition {
  type: Type;
  authors: [{ key: string }];
  isbn_13: string[];
  languages: Language[];
  publish_date: string;
  publishers: string[];
  subjects: string[];
  title: string;
  full_title: string;
  works: [{ key: string }];
  key: string;
  covers: number[];
  number_of_pages: number;
  description: any;
}

export interface Type {
  key: string;
}

export interface Language {
  key: string;
}
