import { Project, ProjectType, PROJECT_TYPES } from "../../types/project";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Flex,
  Heading,
  List,
  Link,
  ListItem,
  Input,
  Text,
  Alert,
  AlertDescription,
  AlertTitle,
  Stack,
  Radio,
  RadioProps,
  RadioGroup,
  Button,
  Box,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { LinkExternal, LinkWrapper, useLinkColor } from "components/my-chakra";

const DESCRIPTION_SLICE_END = 250;
const SEARCH_RESULTS_SLICE_END = 10;

const ProjectRadio = (props: React.PropsWithChildren<RadioProps>) => {
  const { children, ...rest } = props;
  return (
    <Radio minW="fit-content" py="1" {...rest}>
      {children}
    </Radio>
  );
};

export default function Projects() {
  const [projectList, setProjectList] = useState<Project[]>();
  const [searchResults, setSearchResults] = useState<Project[]>();
  const [filters, setFilters] = useState<ProjectType>();
  const [count, setCount] = useState(0);

  const forceUpdate = () => {
    searchResults ? setSearchResults(shuffle(searchResults)) : null;
    // This count only exists to force a rerender
    setCount(count + 1);
  };

  const handleFilter = (project_type: ProjectType) => {
    setFilters(project_type);
  };

  const handleSearch = (event: ChangeEvent) => {
    const results: Project[] = [];
    const search = (event.target as HTMLInputElement).value.toLowerCase();
    //console.log((event.target as HTMLInputElement).value);
    if (search.length >= 1) {
      projectList?.forEach((project) => {
        if (project.title.toLowerCase().includes(search)) {
          results.push(project);
        } else if (project.author.toLowerCase().includes(search)) {
          results.push(project);
        }
      });

      setSearchResults(shuffle(results));
    } else if (projectList) {
      setSearchResults(shuffle(projectList));
    }
  };

  function shuffle(array: Project[]) {
    // knuth shuffle
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    async function getProjects() {
      fetch("/api/projects/", {
        method: "GET",
      })
        .then(async (res) => {
          const data = await res.json();
          const projectList = (data as Project[]).filter(
            (p) => p.date_created >= "2022-01-01"
          );
          setProjectList(projectList);
          setSearchResults(shuffle(projectList));
          const initialType = window?.location.search.split("initialType=");
          if (initialType.length > 0 && initialType[1]) {
            setFilters(
              initialType.length > 1
                ? (initialType[1] as ProjectType)
                : undefined
            );
          }
        })
        .catch(() => setProjectList([]));
    }

    getProjects();
  }, []);

  return (
    <>
      {/* <Alert background="red.600" marginX="2em" width="calc(100% - 4em)" color="white" as="a" href="https://forms.gle/WNzb4xNL7nsdbi7Y7" target="_blank" rel="noopener noreferrer" position="fixed" bottom={8} left={0}>
        Click here to vote for your favorite projects! You must vote to win!
      </Alert> */}
      <Heading mb="2">Student Projects</Heading>
      {projectList?.length === 0 ? (
        <Alert status="error">
          <AlertTitle>No projects found!</AlertTitle>
          <AlertDescription>
            Contact Mr. Buckley if this persists.
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <Text as="label" htmlFor="search" d="inline-block" mb="2">
            Search for a project by title or student name. Select a filter to
            narrow your search. <br />
            <Button
              color={useLinkColor()}
              variant="link"
              onClick={() => forceUpdate()}
            >
              Shuffle
            </Button>{" "}
            the results to see new ones!
          </Text>
          <RadioGroup
            onChange={(value) => {
              handleFilter(value as ProjectType);
            }}
            ariaLabel="Project Filter"
            value={filters}
          >
            <Flex direction="row" wrap="wrap" gridColumnGap="3">
              <ProjectRadio value="">All</ProjectRadio>
              {Object.keys(PROJECT_TYPES).map((key) => (
                <ProjectRadio value={key}>
                  {PROJECT_TYPES[key as ProjectType]}s
                </ProjectRadio>
              ))}
            </Flex>
          </RadioGroup>
          <Input
            id="search"
            mt="2"
            onChange={handleSearch}
            placeholder="Search"
          />
        </>
      )}
      {searchResults ? (
        <List spacing={3} mt="3">
          {searchResults
            ?.filter((val) => (filters ? filters === val.project_type : true))
            .slice(0, SEARCH_RESULTS_SLICE_END)
            .map((project) => (
              <ListItem>
                {project.project_type === "REPL" ? (
                  <LinkWrapper>
                    <Link href={`/projects/${project.id}`}>
                      <Heading as="h3" size="lg" mb="2">
                        {project.title}
                      </Heading>
                    </Link>
                  </LinkWrapper>
                ) : (
                  <LinkExternal
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heading as="h3" size="lg" mb="2">
                      {project.title}
                    </Heading>
                  </LinkExternal>
                )}
                <Stack direction="row" align="center" spacing="3" mb="2">
                  <Heading as="h4" size="md">
                    {project.author}
                  </Heading>
                  <Badge as="div">{PROJECT_TYPES[project.project_type]}</Badge>
                </Stack>
                <Text>
                  {project.description.slice(0, DESCRIPTION_SLICE_END)}
                  {project.description.length > DESCRIPTION_SLICE_END
                    ? "..."
                    : null}
                </Text>
              </ListItem>
            ))}
        </List>
      ) : null}
      <div style={{ display: "none", visibility: "hidden" }}>{count}</div>
    </>
  );
}
