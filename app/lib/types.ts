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

export interface Root {
  authors: Author[];
  covers: number[];
  description: string | { type: string; value: string };
  first_publish_date: string;
  first_sentence: FirstSentence;
  key: string;
  lc_classifications: string[];
  subject_people: string[];
  subject_places: string[];
  subject_times: string[];
  subjects: string[];
  title: string;
  latest_revision: number;
  revision: number;
}

export interface Author {
  author: Author2;
  type: Type;
}

export interface Author2 {
  key: string;
}

export interface Type {
  key: string;
}

export interface FirstSentence {
  type: string;
  value: string;
}
