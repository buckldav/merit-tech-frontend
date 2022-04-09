import { Box, Grid, GridItem } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import ContactForm from "components/ContactForm";
import { Article, Aside } from "components/Home";
import Courses from "components/Courses";
import { Project } from "types/project";
import { Course } from "types/course";

const HomePage = (
  props: PropsWithChildren<{ project: Project; courses: Array<Course> }>
) => {
  return (
    <Box mb={8} w="full">
      <Grid templateRows="1fr" templateColumns="3fr 1fr" gap={12}>
        <GridItem>
          <Article project={props.project}>
            <Courses courses={props.courses} />
          </Article>
        </GridItem>
        <GridItem>
          <Aside />
        </GridItem>
      </Grid>
      <ContactForm />
    </Box>
  );
};

HomePage.getInitialProps = async () => {
  const res = await fetch(
    "https://meritacademy.herokuapp.com/api/projects/42/"
  );
  const json = await res.json();
  const resC = await fetch("https://meritacademy.herokuapp.com/api/courses/");
  const jsonC = await resC.json();
  return { project: json as Project, courses: jsonC as Array<Course> };
};

export default HomePage;
