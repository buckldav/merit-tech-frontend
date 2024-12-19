import { Box, Grid, GridItem } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import ContactForm from "components/ContactForm";
import { Article, Aside } from "components/Home";
import Courses from "components/Courses";
import Flyer from "components/Flyer";
import { Project } from "types/project";
import { Course } from "types/course";
import { useWindowSize } from "hooks";

const HomePage = (
  props: PropsWithChildren<{ project: Project; courses: Array<Course> }>
) => {
  return (
    <Box
      mb={8}
      w="full"
      minWidth={(useWindowSize().width as number) > 800 ? "900px" : 0}
    >
      <Grid
        templateRows={
          (useWindowSize().width as number) > 800 ? "1fr" : "auto auto"
        }
        templateColumns={
          (useWindowSize().width as number) > 800 ? "3fr 1fr" : "1fr"
        }
        gap={(useWindowSize().width as number) > 800 ? 12 : 0}
      >
        <GridItem>
          <Article project={props.project}>
            <Courses courses={props.courses} />
            {/* <Flyer /> */}
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

export const getServerSideProps = async () => {
  const res = await fetch(process.env.API_URL + "/api/projects/");
  const json: Array<Project> = await res.json();
  // get random webgl project
  // const filtered = json.filter((proj) => proj.project_type === "WEBGL_GAME");
  // const proj = [Math.floor(Math.random() * filtered.length)];
  const proj = json.find((val) => val.id === 42)!;
  const resC = await fetch(process.env.API_URL + "/api/courses/");
  const jsonC = await resC.json();
  return {
    props: { project: proj, courses: jsonC as Array<Course> },
  };
};

export default HomePage;
