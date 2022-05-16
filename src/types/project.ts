export interface Project {
  id: number;
  title: string;
  author: string;
  description: string;
  date_created: string;
  url: string;
  project_type: ProjectType;
}

export type ProjectType =
  | "GOOGLE_SITE"
  | "REPL"
  | "WEB_APP"
  | "WEBSITE"
  | "WEBGL_GAME";

export const PROJECT_TYPES: Record<ProjectType, string> = {
  GOOGLE_SITE: "Google Site",
  REPL: "Console (Text) Game",
  WEB_APP: "Web App",
  WEBGL_GAME: "WebGL Game",
  WEBSITE: "Website",
};
