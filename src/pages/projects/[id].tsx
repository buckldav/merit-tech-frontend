import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Heading, Text, Button, Box, Spinner } from "@chakra-ui/react";
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { LinkExternal, LinkWrapper, useLinkColor } from "components/my-chakra";
import { Project, PROJECT_TYPES } from "types/project";

export default function ProjectDetail() {
  const [showDescription, setShowDescription] = useState(false);
  const [project, setProject] = useState<Project>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getProject(id: string | string[] | undefined) {
      fetch("/api/projects/" + id, {
        method: "GET",
      })
        .then(async (res) => {
          const data = await res.json();
          if (data.id) {
            setProject(data);
          }
          setLoading(false);
        })
        .catch(() => (window.location.href = "404"));
    }

    getProject(id);
  }, [id]);

  return project ? (
    <>
      <Breadcrumb mb="5">
        <BreadcrumbItem>
          <LinkWrapper>
            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
          </LinkWrapper>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <LinkWrapper>
            <BreadcrumbLink
              href={`/projects?initialType=${project.project_type}`}
            >
              {PROJECT_TYPES[project.project_type]}s
            </BreadcrumbLink>
          </LinkWrapper>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <LinkWrapper>
            <BreadcrumbLink href={`/projects/${project.id}`}>
              {project.title}
            </BreadcrumbLink>
          </LinkWrapper>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h2" size="xl" textAlign="center" mb="4">
        {project.title}
      </Heading>
      <Heading as="h3" size="md" textAlign="center" mb="3">
        By: {project.author}
      </Heading>
      <Text mt="3" mb="5">
        {project.project_type !== "REPL" || project.description.length < 70 ? (
          project.description
        ) : (
          <>
            {showDescription
              ? project.description
              : project.description.slice(0, 70) + "..."}
            <Button
              variant="link"
              color={useLinkColor()}
              ml="2"
              fontWeight="normal"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? <>&lt; hide</> : <>expand &gt;</>}
            </Button>
          </>
        )}
      </Text>
      {project.project_type === "REPL" ? (
        <iframe title={project.title} src={project.url} height={500}></iframe>
      ) : (
        <Text fontWeight="bold" textAlign="center">
          This project is available at{" "}
          <LinkExternal
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.url}
          </LinkExternal>
        </Text>
      )}
      <br />
      <br />
    </>
  ) : loading ? (
    <Spinner />
  ) : (
    <>
      <Heading textAlign="center" as="h1" size="lg" mb="3">
        Project {id} not found.
      </Heading>
      <Box display="flex" justifyContent="center">
        <Button m="0 auto">
          <Link href="/projects">Back to projects</Link>
        </Button>
      </Box>
    </>
  );
}
