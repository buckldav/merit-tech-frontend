import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  UnorderedList,
  Stack,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import { LinkExternal, LinkWrapper } from "./my-chakra";
import { Project, PROJECT_TYPES } from "types/project";
import Link from "next/link";

export function Aside() {
  return (
    <aside>
      <Flex as="section" direction="column" alignItems="center" pb="5">
        <Heading as="h2" size="md" my="3">
          Who Are We?
        </Heading>
        <Flex direction="column" alignItems="center" my="2">
          <Image
            src="/home1.jpg"
            width={450}
            height={300}
            alt="Merit Academy TSA Conference 2018"
          />
        </Flex>
        <Text>
          Merit Preparatory Academy is a secondary school (7-12 grades) in
          Springville, UT.
        </Text>
      </Flex>
      <Box as="section" py="5">
        <Heading as="h2" size="md" my="3">
          What does CTE look like at Merit?
        </Heading>
        <Flex direction="column" alignItems="center" my="2">
          <Image
            src="/tsa2019_20.jpg"
            width={450}
            height={160}
            alt="Merit Academy TSA Members 2019-20"
          />
        </Flex>
        <Text>
          CTE stands for Career Technology Education. Merit Academy offers a
          wide variety of CTE courses in the following fields:
        </Text>
        <UnorderedList my="2" pl="3">
          <ListItem>Audio/Visual Production</ListItem>
          <ListItem>Computer Science and Information Technology</ListItem>
          <ListItem>Culinary Arts and Costume Design</ListItem>
          <ListItem>Engineering, Robotics, and Woodshop</ListItem>
          <ListItem>Photography and Graphic Design</ListItem>
        </UnorderedList>
        <Text>
          Explore Merit CTE Courses by visiting a page made by Jacoby Day and
          Allie Erdmann in Web Development class!{" "}
          <LinkExternal
            href="https://cte.meritacademy.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://cte.meritacademy.tech
          </LinkExternal>
        </Text>
      </Box>
    </aside>
  );
}

export function Article(
  props: PropsWithChildren<{ project: Project; children?: ReactNode }>
) {
  const { project } = props;

  return (
    <article>
      <Heading as="h1" size="lg">
        Featured Student Project
      </Heading>
      {project && (
        <Box my={5}>
          {project.project_type === "REPL" ? (
            <LinkWrapper>
              <Link href={`/projects/${project.id}`}>
                <Heading as="h3" size="md" mb="2">
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
              <Heading as="h3" size="md" mb="2">
                {project.title}
              </Heading>
            </LinkExternal>
          )}
          <Stack direction="row" align="center" spacing="3" mb="2">
            <Heading as="h4" size="sm">
              {project.author}
            </Heading>
            <Badge as="div">{PROJECT_TYPES[project.project_type]}</Badge>
          </Stack>
          <Text mb="4">{project.description}</Text>
          <Button as="a" href="/projects">
            Check out more student projects here!
          </Button>
        </Box>
      )}

      {props.children}

      <Heading as="h2" size="md">
        Class Project - Library App
      </Heading>
      <Box my={5}>
        <Text>
          Students in the{" "}
          <LinkExternal href="https://cs.meritacademy.tech/#/disclosure?name=web-development-capstone">
            Web Development Capstone
          </LinkExternal>{" "}
          course at Merit are always looking for cool projects to do that have
          real-world connections. In collaboration with the English department,
          we decided to create a new library checkout system for our
          school.&nbsp;
          <b>Bryson Day</b>, <b>Eduardo Gutierrez</b>, and <b>Michael Dyck</b>{" "}
          stepped up to the challenge and learned token authentication, API
          development, data modelling with an ORM, and cron jobs for tasks like
          email.
        </Text>
      </Box>

      <Heading as="h2" size="md">
        Where Are They Now?
      </Heading>
      <Box my={5}>
        <Text>
          Students in the Web Development Capstone course at Merit are always
          looking for cool projects to do that have real-world connections. In
          collaboration with the English department, we decided to create a new
          library checkout system for our school.&nbsp;
          <b>Bryson Day</b>, <b>Eduardo Gutierrez</b>, and <b>Michael Dyck</b>{" "}
          stepped up to the challenge and learned token authentication, API
          development, data modelling with an ORM, and cron jobs for tasks like
          email.
        </Text>
      </Box>
    </article>
  );
}
