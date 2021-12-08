import { Project } from "../../types/project";
import { ChangeEvent, useEffect, useState } from "react";
import { Heading, List, Link, ListItem, Input, Text, Alert, AlertDescription, AlertTitle } from "@chakra-ui/react";
import { LinkExternal, LinkWrapper } from "components/my-chakra";

const DESCRIPTION_SLICE_END = 200;

export default function Projects() {
  const [projectList, setProjectList] = useState<Project[]>();
  const [searchResults, setSearchResults] = useState<Project[]>();

  const handleFilter = (event: ChangeEvent) => {
    const results: Project[] = []
    const search = (event.target as HTMLInputElement).value.toLowerCase();
    console.log((event.target as HTMLInputElement).value);
    if (search.length >= 3) {
      projectList?.forEach(project => {
        if (project.title.toLowerCase().includes(search)) {
          results.push(project)
        } else if (project.author.toLowerCase().includes(search)) {
          results.push(project)
        } else if (project.description.slice(0, DESCRIPTION_SLICE_END).toLowerCase().includes(search)) {
          results.push(project)
        }
      });
    } else {
      setSearchResults([])
    }

    setSearchResults(results);
  }

  useEffect(() => {
    async function getProjects() {
      fetch("https://meritacademy.herokuapp.com/api/projects/", {
        method: "GET"
      })
        .then(async res => {
          const data = await res.json()
          setProjectList(data)
        })
        .catch(() => setProjectList([]))
    }

    getProjects()
  }, [])

  return (
    <>
      <Heading mb="2">Student Projects</Heading>
      {
        projectList?.length === 0 ?
          <Alert status='error'>
            <AlertTitle>No projects found!</AlertTitle>
            <AlertDescription>Contact Mr. Buckley if this persists.</AlertDescription>
          </Alert> : <>
            <Text as="label" htmlFor="search">Search for a project by title or student name.</Text>
            <Input id="search" mt="2" onChange={handleFilter} placeholder="Search" />
          </>
      }
      {searchResults ?
        <List spacing={3} mt="3">
          {searchResults?.map(project => (
            <ListItem>
              {project.project_type === "REPL" ?
                <LinkWrapper>
                  <Link href={`/projects/${project.id}`}>
                    <Heading as="h3" size="lg" mb="2">{project.title}</Heading>
                  </Link>
                </LinkWrapper> : <LinkExternal href={project.url}>
                  <Heading as="h3" size="lg" mb="2">{project.title}</Heading>
                </LinkExternal>
              }
              <Heading as="h4" size="md" mb="2">{project.author}</Heading>
              <Text>{project.description.slice(0, DESCRIPTION_SLICE_END)}{project.description.length > DESCRIPTION_SLICE_END ? "..." : null}</Text>
            </ListItem>
          ))}
        </List>
        : null
      }
    </>
  );
}
