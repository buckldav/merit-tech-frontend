import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { projectDataDetail } from './projectData'
import { Heading, Text, Button } from "@chakra-ui/react"
import { LinkExternal, LinkWrapper, useLinkColor } from 'components/my-chakra'

export default function ProjectDetail() {
  const [showDescription, setShowDescription] = useState(false);

  const router = useRouter()
  const { id } = router.query
  const project = projectDataDetail(parseInt(id as string))

  return project ? <>
    <Heading as="h2" size="xl" textAlign="center" mb="4">{project.title}</Heading>
    <Heading as="h3" size="md" textAlign="center" mb="3">By: {project.author}</Heading>
    <Text mt="3" mb="5">
      {!project.embeddable || project.description.length < 70 ? project.description : <>
        {showDescription ? project.description : project.description.slice(0, 70) + "..."}
        <Button variant="link" color={useLinkColor()} ml="2" fontWeight="normal" onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? <>&lt; hide</> : <>expand &gt;</>}
        </Button>
      </>}
    </Text>

    {project.embeddable ?
      <iframe title={project.title} src={project.url} height={400}></iframe> :
      <Text fontWeight="bold" textAlign="center">This project is available at <LinkExternal href={project.url}>{project.url}</LinkExternal></Text>
    }
  </> : <>
    <p>Project {id} not found.</p>
    <Link href="/projects">Back to projects</Link>
  </>
}