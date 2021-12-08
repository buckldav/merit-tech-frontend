export interface Project {
  id: number, 
  title: string, 
  author: string, 
  description: string,
  url: string,
  project_type: "GOOGLE_SITE" | "REPL" | "WEBSITE" | "WEBGL_GAME"
}