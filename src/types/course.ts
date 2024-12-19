export type Tag = {
  content: string;
  color: string;
  fa_icon_name: string;
};

export type Course = {
  slug: string;
  name: string;
  category: string;
  length: string;
  countsFor: string;
  description: Array<string>;
  tags: Array<Tag>;
  units: Array<string>;
  prereqs: string;
};
