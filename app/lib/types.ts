export type Subject = {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Work[];
};

export type Work = {
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  cover_edition_key: string;
};
