export interface Project {
  id: number, 
  title: string, 
  author: string, 
  description: string,
  url: string,
  project_type: "REPL" | "WEBSITE" | "WEBGL_GAME"
}